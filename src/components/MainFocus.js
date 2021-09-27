import React from 'react'

import { useState, useEffect } from 'react';
import {Form, Button} from 'react-bootstrap';

import { MainFocusData } from './MainFocusData';

export const MainFocus = () => {
    const[data, setData] = useState('');
    let [finalData, setFinalData] = useState('');
    const update = (e) => {
        setData(e.target.value);
        console.log(data);
    }


    const handleKeyPress = (event) => {
        ///event.preventDefault();

        if(event.key === 'Enter'){
            // document.getElementById("#focusfield").value = "";
            ///clearField();
            
            setFinalData(data);
            event.preventDefault();
           /// event.stopPropagation();
            // 
        }
    }

    const DeleteData = (e) => {
        /// called from child
        console.log("Called?");
        setFinalData('');
       // e.preventDefault();
    }

    return (
        <div>
            <Form className = "form-control-lg">
                <input type="text" name="data" placeholder="What's your main focus today?" value = {data} id = "focusfield" onChange = {update} onKeyPress={handleKeyPress}/>
            </Form>
            {/* <div className = "focus"> {finalData} </div>
            <Button className="btn btn-danger" onClick = {upLift}> Delete </Button> */}
            {/* <Button style = {{marginLeft : "8px" }} onClick = {buttonClickController} > Update </Button> */}
            <MainFocusData data = {finalData} DeleteData = {DeleteData}/>
        </div>
    )
}
