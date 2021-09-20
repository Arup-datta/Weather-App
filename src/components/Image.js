import React from 'react'

import grandcanyon from "../images/grandcanyon.jpeg";
import "../styles/imgstyle.css";

export const Image = (props) => {
    return (
        <div>
            <h1> {props.children} </h1>
            <img className="image" src={grandcanyon} alt={"Grand canyon"}/>
        </div>
    )
}
