import React from 'react';
import {  Input } from 'rsuite';

const CustomForm2 = ({ formData, inputOnChange, submitForm }) => {

    return (
        <div style={{ display: 'flex', justifyContent:'center', alignItems: 'center'}}>
          <form onSubmit={submitForm}>
            <Input style={{ padding: 10, margin: 10, width: 1000}} name='punchline' placeholder='punchline' value={formData.punchline} onChange={inputOnChange}/>
            <Input style={{ padding: 10, margin: 10, width: 1000}} name='setup' placeholder='setup' value={formData.setup} onChange={inputOnChange} />
            <Input style={{ padding: 10, margin: 10, width: 1000}} name='type' placeholder='type' value={formData.type} onChange={inputOnChange} />
            <Input style={{ padding: 10, margin: 10, width: 1000}} name='submit' type='submit' />
          </form>
        </div>
    )
};

export default CustomForm2;