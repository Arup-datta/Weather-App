import React from 'react'

import one from "../images/1.jpg";
import two from "../images/2.jpg";
import three from "../images/3.jpg";
import four from "../images/4.jpg";
import five from "../images/5.jpg";

// import imageFolder from "../images/";

export const images = () => {
    // Need to modify this function when I have to set background manually
    const ara = []
    ara.push(one);
    ara.push(two);
    ara.push(three);
    ara.push(four);
    ara.push(five);
    // print(imageFolder);
    console.log(ara.length)
    const val =  Math.floor(Math.random() * 100);
    return ara[val % ara.length];
}
