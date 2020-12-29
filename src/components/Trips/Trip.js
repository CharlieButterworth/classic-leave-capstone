import React from "react"
import { Link } from "react-router-dom"
import {Card } from "react-bootstrap"
import "./Trip.css"

export const Trip = ({ trip }) => (
    <Card>
       <Card.Body> 
    <section className="trip">
            <article className="parkList">
            <Link to={`/trips/${trip.id}`}>  
           <h3>{trip.tripName} </h3>   
           </Link>  
                
            </article>

        

</section>
 </Card.Body>
    </Card>
)