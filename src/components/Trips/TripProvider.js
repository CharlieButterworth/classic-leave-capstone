import React, { useState } from "react"

export const TripContext = React.createContext()

export const TripProvider = (props) => {
    const [trips, setTrip] = useState([])
    const [packedItems, setPackedItems ] = useState([])

const user = localStorage.getItem("app_user_id")
// const tripId = trips.id
// const tripId = parseInt(props.match.params.id)
// console.log(tripId)


const getTrip = () => {
    return fetch(`http://localhost:8088/trips/?activeUser=${user}`)
    .then(res => res.json())
    .then(setTrip)
}

const addTrip = trip => {
        return fetch("http://localhost:8088/trips", {
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
        
        })
        


    }

//     const getPackedItems = () => {
//     return fetch(`http://localhost:8088/packedItem?_expand=gear&activeUser=${user}`)
//     .then(res => res.json())
//     .then(setPackedItems)
// }

const getTripPackedItems = (tripId) => {
    return fetch(`http://localhost:8088/packedItem?_expand=gear&tripId=${tripId}`)
    .then(res => res.json())
    .then(setPackedItems)
}
// console.log("GETTRIPPACKEDITEM", getTripPackedItems)


const deleteTrip = (id) => {
    return fetch(`http://localhost:8088/trips/${id}`, {
        method: "DELETE"
    })
        .then(getTrip)
}
    


return (
        <TripContext.Provider value={{
            trips, getTrip, setTrip, addTrip, addPackedItem, packedItems, getTripPackedItems, deleteTrip
        }}>
            {props.children}
        </TripContext.Provider>
    )
}

