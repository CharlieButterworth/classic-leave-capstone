import React from "react"


export const Park = ({parkObj}) => (
    <>
    <section className="parks">
            <option key={parkObj.id} value={parkObj.id}>
       {parkObj.data.fullName} 
            </option>

        

</section>
</>
)