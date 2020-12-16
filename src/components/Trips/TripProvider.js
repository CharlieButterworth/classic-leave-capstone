import React, { useState } from "react"

export const TripContext = React.createContext()

export const TripProvider = (props) => {
    const [trip, setTrip] = useState([])


const user = localStorage.getItem("app_user_id")
const getTrip = () => {
    return fetch(`http://localhost:8088/trip/?activeUser=${user}`)
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
    const addPackedItem = () => {
        return fetch(`http://localhost:8088/packedItem`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
        },
        body: JSON.stringify(trip)
        
        })
        .then(setTrip)


    }

    


return (
        <TripContext.Provider value={{
            trip, getTrip, setTrip, addTrip, addPackedItem
        }}>
            {props.children}
        </TripContext.Provider>
    )
}

