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
        console.log("Search called");
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
    //    getCity();
         search();  /// gets temperature data
    }, []);

    const getCity = () => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {

                console.log(position)
                fetch( "http://maps.googleapis.com/maps/api/geocode/json?latlng="+ position.coords.latitude + "," + position.coords.longitude +"&sensor=true")
                    .then(res => res.json())
                    .then(result => {  
                     console.log(result);
                    });
  
                  
               // {position.coords.latitude}
              //  {position.coords.longitude}   
            })
        }
    }
    
    /// API blocked :')

    return (
        <div className="weather">
            {/* {console.log(weather.main.temp)}
            <div className="temp"> {Math.round(weather.main.temp)}°C </div>
            <h3>Feels like: {Math.round(weather.main.feels_like)}</h3>
            
            <div className = "loc">{weather.name} </div>  */}

            <div className="temp"> 31°C </div>
            <div className="loc">Dhaka</div>
           
        </div>
    )
}
