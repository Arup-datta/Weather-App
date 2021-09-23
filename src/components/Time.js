import React, {useState, useEffect} from 'react'

export const Time = () => {

    const[state, setState] = useState('');
    const [firstCall, setFirstCall] = useState(false);

    const getTime = () => {
        const d = new Date();
       // console.log(d.toString());
        let hour = d.getHours();
        const minute = d.getMinutes();
        const suffix = (hour < 12)? "AM" : "PM";
        if(suffix == "PM" && hour > 12) {
            hour -= 12;
        }
        // const seconds = d.getSeconds();
        return "" + (hour.toString().length == 1? ("0" + hour) : hour) + ":" + (minute.toString().length == 1? ("0" + minute) : minute) + " " + suffix;
    }

    // useEffect(() => {
    //    const currentTime = getTime();
    //    changeState(currentTime);
    // });

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = getTime();
            setState(currentTime);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className = "time">
            {state}
        </div>
    )
}
