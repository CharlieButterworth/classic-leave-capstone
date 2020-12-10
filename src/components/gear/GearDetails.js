import React, { useContext, useEffect, useState } from "react"
import { GearContext } from "./GearProvider"


export const GearDetails = (props) => {
    const { deleteGear  } = useContext(GearContext)

    const [gear, setGear] = useState({ });

    // useEffect(() => {
    //     const gearid = parseInt(props.match.params.gearId)
    //     getGearById(gearId).then(setGear)
    // }, [])

    useEffect(() => {
        const gearId = gear.find(g => g.id === parseInt(props.match.params.gearId)) || {}
        setGear(gearId)
    }, [gear])

    return (
        <>
        <section className="gear">
        <h3 className="gear__name">{gear.name}</h3>
        
        
            <button className="delete__btn"onClick={() => {
                    deleteGear(gear)
                    .then(() => {
                        props.history.push("/garage")
                    })
                    
                }
            }>
                Remove
            </button>
            </section>
            </>
    )
 }
            