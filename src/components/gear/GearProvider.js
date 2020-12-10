import React, { useState, useEffect } from "react"

export const GearContext = React.createContext()

export const GearProvider = (props) => {
    const [gear, setGear] = useState([])


    const getGear = () => {
        return fetch("http://localhost:8088/gear")
        .then(res => res.json())
            .then(setGear)
    }

    const addGear = gear => {
        return fetch("http://localhost:8088/gear", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
        },
        body: JSON.stringify(gear)
        
        })
        .then(getGear)
}
const getGearById = (gearId) => {
        return fetch(`http://localhost:8088/garage/${gearId}`)
            .then(res => res.json())
    }


        const deleteGear = gearId => {
    return fetch(`http://localhost:8088/garage/${gearId}`, {
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