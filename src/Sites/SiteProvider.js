import React, { useState, useEffect } from "react"

export const SiteContext = React.createContext()

export const SiteProvider = (props) => {
    const [campsite, setCampsite] = useState([])
    const [siteId, setCampSitebyId] = useState([])


    const getSites = () => {
        return fetch("http://localhost:8088/data")
        .then(res => res.json())
        .then(setCampsite)
    }

    console.log(campsite)
    
    const getCampSiteById = (siteId) => {
        return fetch (`http://localhost:8088/data/${siteId}`)
        .then(res => res.json())
        .then(setCampSitebyId)
    }
    
    return (
        <SiteContext.Provider value={{
            campsite, setCampsite, getSites, getCampSiteById, setCampSitebyId, siteId
        }}>
            {props.children}
        </SiteContext.Provider>
    )
    
    
    
    
}