import React, {useState, useEffect} from 'react'

export const Time = () => {

    const[state, changeState] = useState('');

    const getTime = () => {
        const d = new Date();
       // console.log(d.toString());
        let hour = d.getHours();
        const minute = d.getMinutes();
        const suffix = (hour < 12)? "AM" : "PM";
        if(suffix == "PM") {
            hour -= 12;
        }
        return "" + hour + ":" + minute + " " + suffix;
    }

    useEffect(() => {
       const currentTime = getTime();
       changeState(currentTime);
    });

    return (
        <div className = "time">
            {state}
        </div>
    )
}
