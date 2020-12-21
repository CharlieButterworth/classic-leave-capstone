import React, { useContext, useEffect, useRef} from "react"
import { ParkContext } from "./ParkProvider"
import { Link } from "react-router-dom"
import { Park } from "./Park"
import { TripContext } from "../trips/TripProvider"

export const ParkList = (props) => {
    const { parks, getParks, getParkById } = useContext(ParkContext)
    const { trip } = useContext(TripContext)

    const park = useRef([]) //tried (null)
    console.log("PARK PROPS", props)
    useEffect(() => {
        getParks()
    }, 
    [])
    
    const handleParkSelect = () => {
        
        getParks()
        // .then(() => 
        //     props.history.push(`/trip/${tripId}`)
        // )
    }
    
    return (
        <div className="parkList">
        {console.log(props)}
        
        <h1>Select a Park</h1>


                <select 
            onChange = {handleParkSelect}
                 defaultValue="" name="park" ref={park} id="parkLocation" className="form-control">

                <option value="0">Please select a park</option>
                    {
                        parks.map(p => <option key={p.id} value={p.id}>{p.fullName} </option> )
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