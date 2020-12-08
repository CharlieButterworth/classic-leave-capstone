import React, { useContext, useEffect } from "react"
import { ParkContext } from "./ParkProvider"
import { Link } from "react-router-dom"
import { Park } from "./Park"

export const ParkList = (props) => {
    const { parks, getParks } = useContext(ParkContext)

    useEffect(() => {
        getParks()
    }, 
    [])

    return (
    <div className="parkList">
        <h1>Parks</h1>
            <select className="dropdown" id="parkSelect">
                <option value="0">Please select a park...</option>
                {parks.map(
            parksObj => {
                return `<option value="${parksObj.fullName}">${parksObj.fullName}</option>`

            }
        ).join("")
            }
            </select>
        `

    
        
        </div>
        )
}