import React from 'react'

import { Button } from 'react-bootstrap';
import { useEffect } from 'react';

export const MainFocusData = ({data, DeleteData}) => {
    useEffect(() => {
        // console.log(data.length);
        // console.log(data);
        document.getElementById("focusfield").value = '';
        if(data.length == 0) {
            document.getElementById('button').style.visibility='hidden';
        }
        else {
            // console.log("Ashe ki?");
            document.getElementById('button').style.visibility='visible';
        }
    });
    return (
        <div>
             <div className = "focus"> {data} </div>
             <div class="col-md-12 text-center"> 
                <Button className="btn btn-danger" id = "button" onClick = {DeleteData}> Delete </Button>
            </div>
        </div>
    )
}
