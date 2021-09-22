import React from 'react'
import { useState } from 'react';

import Model from 'react-modal';

export const Todo = ({data, modifyFinalData, modifyUpdateValue}) => {
    const [init, setInit] = useState(data);
    const [state, setState] = useState(data); // set data as initial state
    const [buttonClicked, setButtonClicked] = useState(false);

    const upLift = () => {
        modifyFinalData(data);
    }

    const updateUplift = () => {
        // call function passed from parent
        console.log("Uplift  called .. yaay");
        modifyUpdateValue(state, init);
    }


    const buttonClickController = () => {
        if(buttonClicked) {
            updateUplift(); /// pass it to it's parent
        }
       // console.log("Ashe?");
        // buttonClicked = true;
        // console.log(buttonClicked);
        setButtonClicked(!buttonClicked);
    }

    const update = (e) => {
        setState(e.target.value);
    }


    return (
        <div className = "form-data">
            {data}
            <button onClick = {upLift}> Delete </button>
            <button onClick = {buttonClickController} > Update </button>
            {console.log(buttonClicked)}
            <Model className = "modal" isOpen = {buttonClicked}>
                <h4>Update todos</h4>

                <form>
                    <input type="text" name="state" placeholder="Update todos" value = {state} onChange = {update}/>
                </form>

                <button onClick = {buttonClickController}>
                    Submit
                </button>
            </Model>
        </div>
    )
}
