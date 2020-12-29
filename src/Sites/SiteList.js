import React, { useEffect, useContext } from "react"
import { SiteContext } from "./SiteProvider"
import { Site } from "./Sites"



export const SiteList = (props) => {
    const {campsite, getSites} = useContext(SiteContext)


    useEffect(() => {
        getSites()
    }, [])


console.log(campsite)

return (
    <>
   <select>

    <option value="0">Please select a Site</option>
    {
        campsite.map(s => <option className="site-dropdown"key={s.id} >{s.name}</option>)
    }
    </select>
    </>
)


}