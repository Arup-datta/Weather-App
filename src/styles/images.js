import React from 'react'

import zion from "../images/zionnp.jpg";
import grand from "../images/grandcanyon.jpeg";

export const images = () => {
    // Need to modify this function when I have to set background manually
    const ara = []
    ara.push(zion);
    ara.push(grand);
    const val =  Math.floor(Math.random() * 100);
    return ara[val % 2];
}
