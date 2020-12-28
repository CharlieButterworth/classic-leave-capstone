import React, { useContext, useEffect } from "react"
import { TripContext } from "./TripProvider"
import { Trip } from "./Trip"
import { TripForm } from "./TripForm"
import "./Trip.css"



export const TripList = (props) => {

    const { trips, getTrip, setTrip } = useContext(TripContext)
    



    useEffect(() => {
        getTrip()
    }, [])

    return (
    <div className="trip">
        {/* <h1>Trips</h1> */}
        <button onClick={() => props.history.push("/trips/create")}>
            Add Trip
        </button>
        <div className="tripList">
          <h3>My Trip's</h3>
          <p>Don't see trips? Add gear to begin!</p>
        {
            
        trips.map(t => {

            return ( 
            <>
            <Trip key={t.id} trip={t} 
                />
                
        
        <button onClick={() => props.history.push(`/trips/${t.id}`)}>
            Add Gear To Trip
        </button>
        
        
        </>
        )})
            
}
 {/* <button onClick={() => props.history.push(`/trip/${trip.id})`)}>
            Delete Gear
        </button> */}
            </div>
            
        </div> 
    )

}