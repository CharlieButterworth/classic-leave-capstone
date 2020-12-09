import React, { useContext, useEffect } from "react"
import { ParkContext } from "./ParkProvider"
import { Link } from "react-router-dom"
import { Park } from "./Park"

export const ParkList = () => {
    const { parks, getParks } = useContext(ParkContext)
    console.log("HERE ARE THE PARKS", parks)

    useEffect(() => {
        getParks()
    }, 
    [])

    // useEffect(() => {
    //    console.log("HERE ARE THE PARKS", parks)

    // },[parks])

    return (
    <div className="parkList">
        
        <h1>Select a Park</h1>
            
                <select defaultValue="" name="park" ref={parks} id="parkLocation" className="form-control" >

                <option value="0">Please select a park...</option>
                    {
                        parks.map(p => <Park key={p.id} parkObj={p}/>)
                    }
               </select>
        </div>
        )
    }



{/* <div className="stateList">
        <h1>Select a State</h1>
            <select className="dropdown" id="stateSelect">
    <select defaultValue="" name="location" ref={parks} id="parkLocation" className="form-control" ></select>
                <option value="0">Please select a state</option>
                   
            </select>
        `

    
        
                </div> */}