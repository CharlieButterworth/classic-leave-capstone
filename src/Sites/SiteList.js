import React, { useEffect, useContext, useRef } from "react"
import { SiteContext } from "./SiteProvider"
import { Site } from "./Sites"
import "./Site.css"


export const SiteList = (props) => {
    const {campsite, getSites} = useContext(SiteContext)

    const campSite = useRef(null)

    useEffect(() => {
        getSites()
    }, [])

const handleSiteSelect = () => {
    
   
        props.history.push(`/trip/${campSite.current.value}`)
    }
console.log(props)

// console.log(campsite)

return (
    <>
   <select className="site-doprdown" onChange = {handleSiteSelect} name="site" ref={campSite}>

    <option value="0">Please select a Site</option>
    {
        campsite.map(s => <option className="site-dropdown"key={s.id} value={s.id} >{s.name}</option>)
    }
    </select>
    </>
)


}