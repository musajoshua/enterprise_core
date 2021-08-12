import React from 'react';
import {  Input } from 'rsuite';

const DisplayForm = ({ data }) => {
    return (
        <div style={{ margin: 100, margin: 10}}>
            {data.map((dt, idx) => (
                <div key={`data=${idx}`} style={{ padding: 10}}>
                    <p>Punchline: {dt.punchline}</p>
                    <p>Setup: {dt.setup}</p>
                    <p>Type: {dt.type}</p>
                </div>
            ))}
        </div>
    )
};

export default DisplayForm;