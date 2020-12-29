import React, {useContext} from "react"
import { Link } from "react-router-dom"
import "./Gear.css"
import {Card, Button } from "react-bootstrap"


import {GearContext} from "./GearProvider"




export const Gear = ({ gear }) => {
    const { deleteGear} = useContext(GearContext)
    return (
    <>
    
    <Card style={{ width: '18rem' }}>
       <Card.Body> 
    <section className="gear">
        <h3 className="gear__name">
            <Link to={`/gears/${gear.id}`}>
                { gear.name }
            </Link>
             </h3>



 
  

</section>
        </Card.Body>
    </Card>
    </>
)
    }