import React, { useContext, useEffect } from "react"
import { GearContext } from "./GearProvider"
import { Gear } from "./Gear"
import { Button } from "react-bootstrap"



export const GarageList = (props) => {
// this hook allows passing of data from children elements
    const { gear, getGear, setGear } = useContext(GearContext)  


// this useEffect tells React that my component needs to get the gear after render
    useEffect(() => {
        getGear()
    }, [])

    

    return (
        <>
            <Button className="gear-button" onClick={() => props.history.push("/gears/new")} variant="outline-primary">Add Gear</Button>
    <div className="gears">
        {/* <h1>Gear</h1> */}
      
        <div className="gearList">
            
        {
            
            gear.map(g => <Gear key={g.id} gear={g} />)
        }
            </div>
        </div> 
        </>
    )

}
   
















        
        
   