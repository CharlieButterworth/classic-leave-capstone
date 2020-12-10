import React, { useContext, useEffect, useState } from "react"
import { GearContext } from "./GearProvider"


export const GearDetails = (props) => {
    const { deleteGear  } = useContext(GearContext)

    const [gear, setGear] = useState()

    useEffect(() => {
        const gearId = parseInt(props.match.params.gearId)
        deleteGear(gearId)
            .then(setGear)
    }, [])

    return (
        <section className="gear">
        <h3 className="gear__name">{gear.name}</h3>
        
        
            <button onClick={
                () => {
                    deleteGear(gear.Id)
                    .then(() => {
                        props.history.push("/garage")
                    })
                }
            }>
                Remove
            </button>
            </section>
    )
        }
            