import React from 'react'
import { useState, useEffect } from 'react';
import { Todo } from './Todo';
import {Form} from 'react-bootstrap';

export const FormComp = ({data, setData, finalData, setFinalData, saveDataInLocalStorage}) => {
    // const[data, setData] = useState('');
    // let [finalData, setFinalData] = useState([]);
    useEffect(() => {
        document.getElementById("todoForm").value = '';
    });
    
    const update = (e) => {
       /// e.preventDefault();
        setData(e.target.value);
    }

    const handleKeyPress = (event) => {
        /// i need to do something here
        ///event.preventDefault();
        if(event.key === 'Enter'){
            setFinalData([...finalData, data]);
            /// change localstorage
            saveDataInLocalStorage(finalData); /// local storage updated
            event.preventDefault();
        }
    }

    // Delete function
    const modifyFinalData = (value) => {
        // console.log(value);
        // // finalData = finalData.filter(text => text !== value);
        // console.log("before update: ");
        // console.log(finalData);
        let ara = finalData.filter(myFunction);
        setFinalData(ara);
        // change local storage
        saveDataInLocalStorage(ara); 
        function myFunction(val) {
            return val != value;
        }

       // console.log("final data updated: ")
        //console.log(finalData);
    }

    const modifyUpdateValue = (curr, prev) => {
        // console.log("Printing states: ");
        // console.log(curr);
        // console.log(prev);
        setFinalData(finalData.map(filterFunc));
        // change local storage
        saveDataInLocalStorage(finalData);
        function filterFunc(val) {
            if(val == prev) {
                /// equal to old value, update and set it as new value
                return curr;
            }
            else {
                return val;
            }
        }

        // console.log(finalData);
    }

    return (
        <div>
            <Form className = "form-control-lg">
            
                <input type="text" name="data" placeholder="Add todos" id = "todoForm" value = {data} onChange = {update} onKeyPress={handleKeyPress}/>
                
            </Form>

            <div className = "todoComponents">

                {
                    finalData.map(data => (
                        // <div className = "form-data"> {data} </div>
                        <Todo data = {data} modifyFinalData = {modifyFinalData}  modifyUpdateValue = {modifyUpdateValue}/>
                    ))
                }
            </div>

            {/* <div className = "form-data">{finalData.map(data => {

            })}</div> */}
        </div>
    )
}
