import React from "react"
import "./ParkProvider"



export const Park = ({ parksObj }) => (
    <section className="parks">
    <h4 className="national-parks">{parksObj.fullName}</h4>
 
   <option value="{parksObj.fullName}">{parksObj.fullName} 
   {parksObj.map(
                    parksObj => {

                        console.log(parksObj)
                        return `<option value="${parksObj.fullName}">${parksObj.fullName}</option>`
                        
                    }
                    ).join("")
                }
                </option>
   
 </section>       
)