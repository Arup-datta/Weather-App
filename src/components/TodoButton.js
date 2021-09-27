import React from 'react'
import { FcBookmark } from "react-icons/fc";

import {Button, Form, Modal} from 'react-bootstrap';
import { useState } from 'react';
import { FormComp } from './FormComp';

export const TodoButton = () => {
    const[data, setData] = useState('');
    let [finalData, setFinalData] = useState([]);

    const [buttonClicked, setButtonClicked] = useState(false);

    const showTodos = () => {
        setButtonClicked(true);
    }
    const hideTodos = () => {
        setButtonClicked(false);
    }

    return (
            <div className = "todo">
                {/* <FcBookmark onClick = {showTodos}/> */}
                <Button className="btn btn-primary" onClick = {showTodos}> Todos </Button>

                <Modal show = {buttonClicked} onHide = {hideTodos}>
                    <Modal.Header closeButton>
                        <Modal.Title> Todos </Modal.Title>
                    </Modal.Header>

                    <FormComp data = {data} setData = {setData} finalData = {finalData} setFinalData = {setFinalData}/>
                </Modal>
            </div>
    )
}
