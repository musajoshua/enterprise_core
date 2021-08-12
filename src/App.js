import React, { useState, useEffect } from 'react';

import 'rsuite/dist/styles/rsuite-dark.css';

import { Counter } from './features/counter/Counter';

import CustomForm from './components/CustomForm';
import CustomForm2 from './components/CustomForm2';
import CustomDropdown from './components/CustomDropDown';
import DisplayForm from './components/DisplayForm';

import Home from './components/Home';
import Profile from './components/Profile';

const stringToComponent  = {
  Home,
  Profile
}
const menuOptions = {
  title: 'Menu',
  options: [
    {
      title: 'Home',
    },
    {
      title: 'About us',
    },
    {
      title: 'Contact US',
    }
  ]
}

function App() {
  const [SelectedComponent, setSelectedComponent] = useState(null)
  const [data, setData] = useState([])
  const [formData, setFormData] = useState({
    punchline: '',
    setup:'',
    type:''
  });

  const selectOnChange = (value) => {
    setSelectedComponent(stringToComponent[value])
  }

  const inputOnChange = (value, event) => {
    const { name } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const submitForm = (event) => {
    event.preventDefault();

    setData((prev) => ([
      formData,
      ...prev
    ]))
  }

  console.log(data)

  useEffect(() => {
    const fetchData  = async () => {
      const res = await fetch(process.env.REACT_APP_API_URL);
      const result = await res.json()
      setData(result)
    }
    fetchData()
  }, [])

  return (
    <div>
      <div>
        <h1>Task 1:</h1>
        <Counter />
      </div>
      <div>
        <h1>Task 2:</h1>
        <CustomDropdown menuOptions={menuOptions} />
      </div>
      <div>
        <h1>Task 3:</h1>
        <CustomForm selectOnChange={selectOnChange} />
        {SelectedComponent && SelectedComponent }
      </div>
      <div>
        <h1>Task 4:</h1>
        <CustomForm2 formData={formData} inputOnChange={inputOnChange} submitForm={submitForm} />
        <DisplayForm data={data} />
      </div>
    </div>
  );
}

export default App;
