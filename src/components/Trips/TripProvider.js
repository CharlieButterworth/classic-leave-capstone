import React, { useState, useEffect } from "react"

export const TripContext = React.createCContext()

export const TripProvider = (props) => {
    const [trip, setTrip] = useState([])



const getTrip = () => {
    return fetch("http://localhost:8088/trip")
    .then(res => res.json())
    .then(setTrip)
}


return (
        <TripContext.Provider value={{
            trip, getTrip, setTrip
        }}>
            {props.children}
        </TripContext.Provider>
    )
}

