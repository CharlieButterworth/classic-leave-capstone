import React from "react"

export const Site = ({site}) => {
    // console.log(site)
    return(
        <>

 <section className="site">
        <h3 className="site__name">
          
                { site.name }
                { site.address}
         
             </h3>

</section>
        </>
    )
}