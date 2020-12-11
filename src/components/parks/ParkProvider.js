import React, { useState, useEffect } from "react"
import { apiKey } from "./Settings"

// this is for other components that need the data

export const ParkContext = React.createContext()



export const ParkProvider = (props) => {
    const [parks, setParks] = useState([])


    const getParks = () => {
        return fetch(`https://developer.nps.gov/api/v1/parks?api_key=${apiKey.npsKey}`)
        .then(res => res.json())
        .then((data) => data.data).then(setParks)
            
         //this was bad had (setParks)
        }
       
       
        
    const getParkById = (id) => {
        return fetch(`https://developer.nps.gov/api/v1/parks/?api_key=${apiKey.npsKey}`)
            .then(res => res.json())
    }
   
        
        return (
            <ParkContext.Provider value={{
                parks, getParks, setParks, getParkById
            }}>
            {props.children}
        </ParkContext.Provider>
    )
}
 //what should I console log here?
