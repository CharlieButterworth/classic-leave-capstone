import React from "react"


export const Park = ({parkObj}) => (
    <>
    <section className="parks">
            <article className="parkList">
            <h3 className="parkName">${parkObj.fullName}</h3>
            <div className="park_pic">${parkObj.description}</div>
              <div className="park_fees">${parkObj.entranceFees}</div>  
                
            </article>

        

</section>
</>
)