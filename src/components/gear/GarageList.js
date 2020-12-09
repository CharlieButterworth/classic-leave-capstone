import React, { useContext, useEffect } from "react"
import { GearContext } from "./GearProvider"
import { Gear } from "./Gear"
import { Link } from "react-router-dom"

export const GarageList = (props) => {

    const { gear, getGear, setGear } = useContext(GearContext)



    useEffect(() => {
        getGear().then(setGear)
    }, [])

    return (
    <div className="gear">
        <h1>Gear</h1>
        <button onClick={() => props.history.push("/garage/create")}>
            Add Gear
        </button>
        <article className="gearList">
        {
                    gear.map(gear => {
                        return <Link key={gear.id} to={`/garage/create`}>
                            <h3>{garage.gearName}</h3>
                        </Link>
                    })
                }
            </article>
        </div>
    )

}
   















// if (gear.length === true) {
        
        
    //     return (
    //         <div className="gear">
    //         {
    //             gear.map(g => <Gear key={g.id} garage={g} />)
    //         }
    //         </div>
    //         )
    //     } else {
    //         return (
    //              <div className="gear">
    //         {
    //             gear.map(g => <Gear key={g.id} garage={g} />)
    //         }
    //         </div>
    
            
    //     )}