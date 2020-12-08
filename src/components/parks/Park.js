import React from "react"


export const Park = ({parkObj}) => (
    <section className="parks">
    <h4 className="national-parks">{parkObj.fullName}</h4>
 
    <button id="park-detail--{parkObj.id}">Details</button>

        

</section>
)