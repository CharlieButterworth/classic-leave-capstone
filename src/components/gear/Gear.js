import React from "react"
import { Link } from "react-router-dom"
import "./Gear.css"
import {GearDetail} from "./GearDetail"
import { propTypes } from "react-bootstrap/esm/Image"
import { deleteGear } from "./GearProvider"



export const Gear = ({ gear }) => (
    <section className="gear">
        <h3 className="gear__name">
            <Link to={`/garage/${gear.id}`}>
                { gear.name }
            </Link>
            
        </h3>
 
     
    {/* <div className="gear__name">{gear.name}</div> */}
      
    
<button>Remove</button>
  

</section>
)