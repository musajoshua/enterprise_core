import React from 'react';
import {  Dropdown } from 'rsuite';


const CustomDropdown = ({ menuOptions}) => (
  <Dropdown title={menuOptions.title} >
    {menuOptions.options.map((option, idx) => (
      <Dropdown.Item key={`dropdown-${idx}`}>{option.title}</Dropdown.Item>
    ))}
  </Dropdown>
);

export default CustomDropdown;