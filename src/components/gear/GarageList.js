import React, { useContext, useEffect } from "react"
import { GearContext } from "./GearProvider"
import { Gear } from "./Gear"



export const GarageList = (props) => {

    const { gear, getGear, setGear } = useContext(GearContext)



    useEffect(() => {
        getGear()
    }, [])

    return (
    <div className="gear">
        <h1>Gear</h1>
        <button onClick={() => props.history.push("/gear/new")}>
            Add Gear
        </button>
        <div className="gearList">
            
        {
            
            gear.map(g => <Gear key={g.id} gear={g} />)
        }
            </div>
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