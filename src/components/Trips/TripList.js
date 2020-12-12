import React, { useContext, useEffect } from "react"
import { TripContext } from "./TripProvider"
import { Trip } from "./Trip"



export const TripList = (props) => {

    const { trip, getTrip, setTrip } = useContext(TripContext)



    useEffect(() => {
        getTrip()
    }, [])

    return (
    <div className="gear">
        <h1>Trips</h1>
        <button onClick={() => props.history.push("/trip/create")}>
            Add Trip
        </button>
        <div className="tripList">
            
        {
            
            trip.map(t => <Trip key={t.id} trip={t} />)
        }
            </div>
        </div> 
    )

}