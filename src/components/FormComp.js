import React from 'react'
import { useState, useEffect } from 'react';
import { Todo } from './Todo';


export const FormComp = () => {
    const[data, setData] = useState('');
    const [finalData, setFinalData] = useState([]);
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

    return (
        <div>
            <form>
            
                <input type="text" name="data" placeholder="Add todos" value = {data} onChange = {update} onKeyPress={handleKeyPress}/>
                
            </form>

            {
                finalData.map(data => (
                    // <div className = "form-data"> {data} </div>
                    <Todo data = {data}/>
                ))
            }

            {/* <div className = "form-data">{finalData.map(data => {

            })}</div> */}
        </div>
    )
}
