import React from 'react';
import {  SelectPicker } from 'rsuite';

const CustomForm = ({ selectOnChange}) => {
    const data = [
      {
        label: "Home",
        value: "Home",
      },
      {
        label: "Profile",
        value: "Profile",
      },
    ]

    return (
        <SelectPicker onChange={selectOnChange} data={data} block />
    )
};

export default CustomForm;