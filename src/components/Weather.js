import React, {useState, useEffect} from 'react'
import "../styles/imgstyle.css"
import { geolocated } from "react-geolocated";

const api = {
    key: "86c0443b57492c9cf8a7681cc6cab359",
    base: "https://api.openweathermap.org/data/2.5/"
}


export const Weather = () => {

    const [weather, setWeather] = useState({});

    const search = () => {
       // console.log("Asche");
        fetch(`${api.base}weather?q=dhaka&units=metric&APPID=${api.key}`)
              .then(res => res.json())
              .then(result => {
                setWeather(result); /// weather updated
                console.log(result);
               });
    }

    useEffect(() => {
        // Updates the weather by calling this function
       /// console.log("Nothing") 
       ///getCity();
      /// search();
    }, []);

    const getCity = () => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {

                fetch( "http://maps.googleapis.com/maps/api/geocode/json?latlng="+ position.coords.latitude + "," + position.coords.longitude +"&sensor=false")
                    .then(res => res.json())
                    .then(result => {  
                     console.log(result);
                    });
  
                  
               // {position.coords.latitude}
              //  {position.coords.longitude}   
            })
        }
    }
    

    return (
        <div className="weather">
            {/* <h3 className = "temp">{Math.round(weather.main.temp)}°C</h3> */}
            <div className="temp"> 32°C </div>
            <h3 className = "loc">Dhaka </h3>

        </div>
    )
}
