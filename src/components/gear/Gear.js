import React from "react"
import { Link } from "react-router-dom"
import "./Gear.css"
import {Card } from "react-bootstrap"




export const Gear = ({ gear }) => (
    <Card>
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
)