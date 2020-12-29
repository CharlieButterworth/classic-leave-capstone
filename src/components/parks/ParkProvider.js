import React, { useState, useEffect } from "react"
import { apiKey } from "./Settings"

// this is for other components that need the data

export const ParkContext = React.createContext()



export const ParkProvider = (props) => {
    const [parks, setParks] = useState([])
    const [campgrounds] =useState([])

    const getParks = () => {
        return fetch(`https://developer.nps.gov/api/v1/campgrounds?api_key=${apiKey.npsKey}`)
        .then(res => res.json())
        .then((data) => data.data).then(setParks)
            
         //this was bad had (setParks)
        }
       
       
        
    const getParkById = () => {
        return fetch(`https://developer.nps.gov/api/v1/parks/?api_key=${apiKey.npsKey}`)
            .then(res => res.json())
            .then((data) => data.data).then(setParks)
    }
   
        
        return (
            <ParkContext.Provider value={{
                parks, getParks, setParks, getParkById, campgrounds
            }}>
            {props.children}
        </ParkContext.Provider>
    )
}
 //what should I console log here?
