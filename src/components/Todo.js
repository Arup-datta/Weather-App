import React from 'react'
import { useState, useEffect } from 'react';

// import Model from 'react-modal';

import {Button, Form, Modal} from 'react-bootstrap';

export const Todo = ({data, modifyFinalData, modifyUpdateValue}) => {
    const [init, setInit] = useState(data);
    const [state, setState] = useState(data); // set data as initial state
    const [buttonClicked, setButtonClicked] = useState(false);

    useEffect(() => {
       document.getElementById("todoForm").value = '';
    });
    

    const upLift = () => {
        modifyFinalData(data);
    }

    const updateUplift = () => {
        // call function passed from parent
        console.log("Uplift  called .. yaay");
        modifyUpdateValue(state, init);
    }


    const buttonClickController = () => {
       // console.log("Ashe?");
        // buttonClicked = true;
        // console.log(buttonClicked);
        updateUplift();
        setButtonClicked(!buttonClicked);
    }

    const update = (e) => {
        setState(e.target.value);
    }

    /// A single TODO is here
    return (
        <div className = "form-data">
            <h4 style = {{marginLeft : "5px" }}> {data} </h4>
            
            <Button className="btn btn-danger" onClick = {upLift}> Delete </Button>
            <Button style = {{marginLeft : "8px" }} onClick = {buttonClickController} > Update </Button>
            {/* {console.log(buttonClicked)} */}

            
            <Modal className = "updateModal" show = {buttonClicked} onHide = {buttonClickController}>
                <Modal.Header closeButton>
                    <Modal.Title> Update Todos </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <input type="text" name="state" placeholder="Update todos" value = {state} onChange = {update}/>
                    </Form>
                </Modal.Body>
                
                <Modal.Footer>
                    <Button style = {{width: "20%", backgroundPosition: "center", color: "white", backgroundColor: "green"}} onClick = {buttonClickController}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
