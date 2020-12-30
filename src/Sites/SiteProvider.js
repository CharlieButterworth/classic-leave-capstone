import React, { useState, useEffect } from "react"

export const SiteContext = React.createContext()

export const SiteProvider = (props) => {
    const [campsite, setCampsite] = useState([])
    // const [getSiteById, setCampsitebyId] = useState([])


    const getSites = () => {
        return fetch("http://localhost:8088/data")
        .then(res => res.json())
        .then(setCampsite)
    }

    console.log(campsite)
    
    // const getSiteById = (siteId) => {
    //     return fetch (`http://localhost:8088/data/${siteId}`)
    //     .then(res => res/json())
    //     .then(setCampsitebyId)
    // }
    
    return (
        <SiteContext.Provider value={{
            campsite, setCampsite, getSites, 
        }}>
            {props.children}
        </SiteContext.Provider>
    )
    
    
    
    
}