import React, { useContext, useEffect } from "react"
import { TripContext } from "./TripProvider"
import { Trip } from "./Trip"
import { TripForm } from "./TripForm"
import "./Trip.css"



export const TripList = (props) => {

    const { trips, getTrip, deleteTrip } = useContext(TripContext)
    



    useEffect(() => {
        getTrip()
    }, [])

    return (
    <div className="trip-info">
        
        <button className="add-trip" onClick={() => props.history.push("/trips/create")}>
            Add Trip
        </button>
        <div className="tripList">
          <h3>My Trip's</h3>
          <p>Don't see trips? Add gear to begin!</p>
        {
            
        trips.map(t => {

            return ( 
            <> 
            <div className="trips">

            <Trip key={t.id} trip={t} />
        
        <button className="add-trip" onClick={() => props.history.push(`/trips/${t.id}`)}>
            Add Gear To Trip
        </button>
        
        <button className="add-trip" onClick={() => {
            // {console.log(gear)}
            deleteTrip(t.id)
            .then(() => {
                props.history.push("/trips")
            })
            
        }
            }>
                Delete Trip
            </button>
        </div>
        
        </>
        )})
            
}

            </div>
            
        </div> 
    )

}