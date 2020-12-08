import React, { useContext, useEffect } from "react"
import { GearContext } from "./GearProvider"
import { Gear } from "./Gear"


export const GearList = () => {

    const { gear, getGear } = useContext(GearContext)



    useEffect(() => {
        getGear()
    }, [])




    return (
        <div className="gear">
        {
            gear.map(gear => <Gear key={gear.id} customer={gear} />)
        }
        </div>
    )
}