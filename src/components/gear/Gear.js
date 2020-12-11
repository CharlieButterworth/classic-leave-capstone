import React from "react"
import { Link } from "react-router-dom"
import "./Gear.css"




export const Gear = ({ gear }) => (
    <section className="gear">
        <h3 className="gear__name">
            <Link to={`/gear/${gear.id}`}>
                { gear.name }
            </Link>
            
        </h3>
 
  

</section>
)