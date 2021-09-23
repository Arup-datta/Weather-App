import React from 'react'

import zion from "../images/zionnp.jpg";
import grand from "../images/grandcanyon.jpeg";

export const images = () => {
    const ara = []
    ara.push(zion);
    ara.push(grand);
    const val =  Math.floor(Math.random() * 100);
    return ara[val % 2];
}
