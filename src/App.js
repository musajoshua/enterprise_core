import React, { useState } from 'react';

import 'rsuite/dist/styles/rsuite-dark.css';

import { Counter } from './features/counter/Counter';

import CustomDropdown from './components/CustomDropDown';
import CustomForm from './components/CustomForm';

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
  const [Component, setComponent] = useState(null)
  const selectOnChange = (value) => {
    setComponent(stringToComponent[value])
  }

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
        {Component && Component}
      </div>
    </div>
  );
}

export default App;
