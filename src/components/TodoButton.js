import React from 'react'
import { FcBookmark } from "react-icons/fc";

import {Button, Form, Modal} from 'react-bootstrap';
import { useState } from 'react';
import { FormComp } from './FormComp';
import { useEffect } from 'react';

export const TodoButton = () => {
    /// When the site loads, load data from local storage
    const saveDataInLocalStorage = (val) => {
        localStorage.setItem('todos', val);
    }

    const getDataFromLocalStorage = () => {
        return localStorage.getItem('todos');
    }

    const[data, setData] = useState('');
    let [finalData, setFinalData] = useState([]);

    const [buttonClicked, setButtonClicked] = useState(false);

    const showTodos = () => {
        setButtonClicked(true);
    }
    const hideTodos = () => {
        setButtonClicked(false);
    }

    useEffect(() => {
        /// check local storage and set finalData according to that
        // setFinalData(getDataFromLocalStorage());
        setFinalData(getDataFromLocalStorage().split(','));
    }, []);

    return (
            <div className = "todo">
                {/* <FcBookmark onClick = {showTodos}/> */}
                <Button className = "btn btn-primary" onClick = {showTodos}> Todos </Button>

                <Modal show = {buttonClicked} onHide = {hideTodos}>
                    <Modal.Header closeButton>
                        <Modal.Title> Todos </Modal.Title>
                    </Modal.Header>

                    <FormComp data = {data} setData = {setData} finalData = {finalData} setFinalData = {setFinalData} saveDataInLocalStorage = {saveDataInLocalStorage}/>
                </Modal>
            </div>
    )
}
