import React, { useState, useEffect } from "react"
import { apiKey } from "./Settings"

export const ParkContext = React.createContext()



export const ParkProvider = (props) => {
    const [parks, setParks] = useState([])


    const getParks = () => {
        return fetch(`https://developer.nps.gov/api/v1/parks?api_key=${apiKey.npsKey}`)
        .then(res => res.json())
        .then(parsedParks => {
            setPark = parsedParks.data  //tried from holiday road
        }) //this was bad had (setParks)
        }
       
        
    
   
        
        return (
            <ParkContext.Provider value={{
                parks, getParks, setParks
            }}>
            {props.children}
        </ParkContext.Provider>
    )
}
 //what should I console log here?
