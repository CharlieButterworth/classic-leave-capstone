import React, { useContext, useEffect } from "react"
import { TripContext } from "./TripProvider"
import { Trip } from "./Trip"
import { TripForm } from "./TripForm"



export const TripList = (props) => {

    const { trip, getTrip, setTrip } = useContext(TripContext)
    // const { gear }



    useEffect(() => {
        getTrip()
    }, [])

    return (
    <div className="trip">
        {/* <h1>Trips</h1> */}
        {/* <button onClick={() => props.history.push("/trip/create")}>
            Add Trip
        </button> */}
        <div className="tripList">
          <h3>My Trip's</h3>
        {
            
        trip.map(t => {

            return ( <> <Trip key={t.id} trip={t} />
        
        <button onClick={() => props.history.push(`/trip/${t.id}`)}>
            Add Gear To Trip
        </button>
        
        </>
        )})
            
}
 {/* <button onClick={() => props.history.push(`/trip/${trip.id})`)}>
            Add Gear To Trip
        </button> */}
            </div>
            
        </div> 
    )

}