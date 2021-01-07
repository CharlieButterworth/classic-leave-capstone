import React from "react"
import { Link } from "react-router-dom"
import "./Site.css"

export const Site = ({props,  site}) => {
    // console.log(site)
    return(
        <>

 <section className="site">
        <h3 className="site__name">
          
               <h3>{site.name}</h3>
                <p className="siteInfo">Description: {site.description}</p>
                 <p className="siteInfo">Total Number of Sites: {site.campsites.totalSites}</p>
                 <p className="siteInfo">Reservation Info: {site.reservationInfo}</p>
                {/* <Link href={site.directionsUrl} to={site.directionsUrl}>
                     {site.directionsUrl}
                    </Link>  */}
              
         
             </h3>

</section>
        </>
    )
}