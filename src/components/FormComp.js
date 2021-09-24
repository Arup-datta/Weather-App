import React from 'react'
import { useState, useEffect } from 'react';
import { Todo } from './Todo';
import {Form} from 'react-bootstrap';

export const FormComp = () => {
    const[data, setData] = useState('');
    let [finalData, setFinalData] = useState([]);
    const update = (e) => {
       /// e.preventDefault();
        setData(e.target.value)
    }

    const handleKeyPress = (event) => {
        ///event.preventDefault();
        if(event.key === 'Enter'){
            setFinalData([...finalData, data]);
            event.preventDefault();
        }
    }

    const modifyFinalData = (value) => {
        console.log(value);
        // finalData = finalData.filter(text => text !== value);
        console.log("before update: ");
        console.log(finalData);
        let ara = finalData.filter(myFunction);
        setFinalData(ara);
        function myFunction(val) {
            return val != value;
        }

       // console.log("final data updated: ")
        //console.log(finalData);
    }

    const modifyUpdateValue = (curr, prev) => {
        console.log("Printing states: ");
        console.log(curr);
        console.log(prev);
        setFinalData(finalData.map(filterFunc));
        function filterFunc(val) {
            if(val == prev) {
                /// equal to old value, update and set it as new value
                return curr;
            }
            else {
                return val;
            }
        }

        console.log(finalData);
    }

    return (
        <div>
            <Form style = {{overflowY:'scroll'}}>
            
                <input type="text" name="data" placeholder="Add todos" value = {data} onChange = {update} onKeyPress={handleKeyPress}/>
                
            </Form>

            {
                finalData.map(data => (
                    // <div className = "form-data"> {data} </div>
                    <Todo data = {data} modifyFinalData = {modifyFinalData}  modifyUpdateValue = {modifyUpdateValue}/>
                ))
            }

            {/* <div className = "form-data">{finalData.map(data => {

            })}</div> */}
        </div>
    )
}
