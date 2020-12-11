import React, { useContext, useEffect, useState } from "react"
import { GearContext } from "./GearProvider"


export const GearDetails = (props) => {
    const { deleteGear, getGear, getGearById} = useContext(GearContext)

    const [gear, setGear] = useState({});

    useEffect(() => {
        const gearId = parseInt(props.match.params.id)
        getGearById(gearId).then(setGear)
        // console.log(props)
    }, [])
    

    // useEffect(() => {
    //     const gearId = gear.find(g => g.id === parseInt(props.match.params.gearId)) 
    //     .then(setGear(gearId))
    //     .then(getGear)
    // }, [])

    return (
        <>
        <section className="gear">
        <h3 className="gear__name">{gear.name}</h3>
        

        
            <button className="delete__btn"onClick={() => {
        {console.log(gear)}
                    deleteGear(gear.id)
                    .then(() => {
                        props.history.push("/gear")
                    })
                    
                }
            }>
                Remove
            </button>
            </section>
            </>
    )
 }
            