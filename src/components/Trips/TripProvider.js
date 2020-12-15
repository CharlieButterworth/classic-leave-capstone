import React, { useState } from "react"

export const TripContext = React.createContext()

export const TripProvider = (props) => {
    const [trip, setTrip] = useState([])



const getTrip = () => {
    return fetch("http://localhost:8088/trip")
    .then(res => res.json())
    .then(setTrip)
}

const addTrip = trip => {
        return fetch("http://localhost:8088/trip", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
        },
        body: JSON.stringify(trip)
        
        })
        .then(getTrip)

    }


return (
        <TripContext.Provider value={{
            trip, getTrip, setTrip, addTrip
        }}>
            {props.children}
        </TripContext.Provider>
    )
}

