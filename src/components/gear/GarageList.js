import React, { useContext, useEffect } from "react"
import { GearContext } from "./GearProvider"
import { Gear } from "./Gear"


export const GarageList = () => {

    const { gear, getGear } = useContext(GearContext)



    useEffect(() => {
        getGear()
    }, [])


if (gear.length === true) {
    
    
    return (
        <div className="gear">
        {
            gear.map(g => <Gear key={g.id} garage={g} />)
        }
        </div>
        )
    } else {
        return (
             <div className="gear">
        {
            gear.map(g => <Gear key={g.id} garage={g} />)
        }
        </div>

        
    )}
    }