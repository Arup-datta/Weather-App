import React from 'react'

import { useState, useEffect } from 'react';
import {Form} from 'react-bootstrap';

export const MainFocus = () => {
    const[data, setData] = useState('');
    let [finalData, setFinalData] = useState('');
    const update = (e) => {
        setData(e.target.value);
        console.log(data);
    }

    const clearField = () => {
        document.getElementById('#focusfield').value = '';
    }
    const handleKeyPress = (event) => {
        ///event.preventDefault();
        if(event.key === 'Enter'){
            ///clearField();
            setFinalData(data);
            event.preventDefault();
            // document.getElementById('focusfield').value = '';
        }
    }

    return (
        <div>
            <Form>
                <input type="text" name="data" placeholder="What's your main focus today?" value = {data} id = "focusfield" onChange = {update} onKeyPress={handleKeyPress}/>
            </Form>
            <div className = "focus"> {finalData} </div>
        </div>
    )
}
