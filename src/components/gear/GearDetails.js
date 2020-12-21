import React, { useContext, useEffect, useState } from "react"
import { GearContext } from "./GearProvider"


export const GearDetails = (props) => {
    // this hook allows passing of data from children elements
    const { deleteGear, getGear, getGearById} = useContext(GearContext)

    const [gear, setGear] = useState({});

    // this useEffect is matchin/setting gearId equal to the id found in props 

    useEffect(() => {
        const gearId = parseInt(props.match.params.id)
        getGearById(gearId).then(setGear)
        // console.log(props)
    }, [])
    

   

    return (
        <>
        <section className="gear">
        <h3 className="gear__name">{gear.name}</h3>
        

        
            <button className="delete__btn"onClick={() => {
        // {console.log(gear)}
                    deleteGear(gear.id)
                    .then(() => {
                        props.history.push("/gears")
                    })
                    
                }
            }>
                Remove
            </button>
            </section>
            </>
    )
 }
            