import React, { useState, useEffect } from "react"

export const SiteContext = React.createContext()

export const SiteProvider = (props) => {
    const [campsite, setCampsite] = useState([])


    const getSites = () => {
        return fetch("http://localhost:8088/data")
        .then(res => res.json())
        .then(setCampsite)
    }

    console.log(campsite)
    
    
    return (
        <SiteContext.Provider value={{
            campsite, setCampsite, getSites
        }}>
            {props.children}
        </SiteContext.Provider>
    )
    
    
    
    
}