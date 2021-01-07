import React, { useState } from "react"

export const GearContext = React.createContext()

export const GearProvider = (props) => {
    const [gear, setGear] = useState([])

    const user = localStorage.getItem("app_user_id")
    const getGear = () => {
        return fetch(`http://localhost:8088/gears/?activeUser=${user}`)
        .then(res => res.json())
            .then(setGear)
    }

    const addGear = gear => {
        return fetch("http://localhost:8088/gears", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
        },
        body: JSON.stringify(gear)
        
        })
        .then(getGear)
}
const getGearById = (id) => {
        return fetch(`http://localhost:8088/gears/${id}`)
            .then(res => res.json())
    }


    const deleteGear = (id) => {
    return fetch(`http://localhost:8088/gears/${id}`, {
        method: "DELETE"
    })
        .then(getGear)
}
return (
        <GearContext.Provider value={{
            gear, addGear, getGear, setGear, deleteGear, getGearById
        }}>
            {props.children}
        </GearContext.Provider>
    )
}