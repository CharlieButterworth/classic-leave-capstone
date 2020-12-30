import React, { useContext, useEffect, useState } from "react";
import { SiteContext } from "./SiteProvider";


export const SiteDetails = (site) => {
    const {getSites} = useContext(SiteContext)

    useEffect(() => {
        getSites()
    }, [])









    return (
        <>
        <section className="site">
            <h2 className="site__name">Details</h2>
            <p>{site.name}</p>
            </section>
            </>
    )
    
    
    
    
    
    
    
    
    
    
}
