import React, { useState } from "react"

export const TripContext = React.createContext()

export const TripProvider = (props) => {
    const [trip, setTrip] = useState([])
    const [packedItems, setPackedItems ] = useState([])

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
    const addPackedItem = (item) => {
        return fetch(`http://localhost:8088/packedItem`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
        },
        body: JSON.stringify(item)
        
        }).then(getPackedItems)
        


    }

    const getPackedItems = () => {
    return fetch(`http://localhost:8088/packedItem/?activeUser=${user}`)
    .then(res => res.json())
    .then(setPackedItems)
}



    


return (
        <TripContext.Provider value={{
            trip, getTrip, setTrip, addTrip, addPackedItem, packedItems, getPackedItems, 
        }}>
            {props.children}
        </TripContext.Provider>
    )
}

