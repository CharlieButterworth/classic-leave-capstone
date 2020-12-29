import React, { useContext, useEffect } from "react"
import { TripContext } from "./TripProvider"
import { Trip } from "./Trip"
import "./Trip.css"

export const FinalTrips = (props) => {
 const { trips, getTrip, deleteTrip } = useContext(TripContext)

useEffect(() => {
        getTrip()
    }, [])

 return (

     <div className="final-trips"> 
     <h3>My Trip's</h3>
     <p>Add some to gear to get started!
        Then plan your Trip!
     </p>
     
     
     {
            
        trips.map(t => {

            return ( <> <Trip key={t.id} trip={t} />
        
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
        
        </>
        )})
            
}
     
     
     
     
     
     </div>

 )
}