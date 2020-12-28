import React from "react"
import { Link } from "react-router-dom"
import "./Gear.css"
import {Card, Button } from "react-bootstrap"


import {GearContext} from "./GearProvider"

// const { deleteGear, getGear, getGearById} = useContext(GearContext)



export const Gear = ({ gear }) => (

    <Card style={{ width: '18rem' }}>
       <Card.Body> 
    <section className="gear">
        <h3 className="gear__name">
            {/* <Link to={`/gears/${gear.id}`}> */}
                { gear.name }
            {/* </Link> */}
             </h3>

{/* <Link key={gear.id} id={gear.id} to={`/gears`} onClick={() => deleteGear(gear, "gear")}> */}
    <Button variant="outline-warning">Remove</Button>
    {/* </Link> */}

 
  

</section>
        </Card.Body>
    </Card>
)