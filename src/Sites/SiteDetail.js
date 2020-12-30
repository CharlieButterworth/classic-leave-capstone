import React, { useContext, useEffect, useState } from "react";
import { SiteContext } from "./SiteProvider";


export const SiteDetails = (props) => {
    const {campsite, getSites} = useContext(SiteContext)

    const [selectedSite, setSelectedSite ] = useState([])

    useEffect(() => {
        getSites().then(setSelectedSite)
    }, [])
    
    // console.log("SITE", siteId)
    useEffect(() => {
            const siteId = parseInt(props.match.params.id)
            
            const site = getSites()
            const selectedSiteName = siteId
            const pickedSite = campsite.filter((campsite) => campsite.name === selectedSiteName)
          
  
    }, [selectedSite]) 



    
    
    
    return (
        <>
        <section className="site">
            <h2 className="site__name">Details</h2>
            <p>{campsite.name}</p>
            </section>
            </>
    )
    
    
    
    
    
    
    
    
    
    
}
