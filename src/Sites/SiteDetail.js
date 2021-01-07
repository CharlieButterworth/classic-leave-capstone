import React, { useContext, useEffect, useState } from "react";
import { SiteContext } from "./SiteProvider";
import { Site } from "./Sites"
import { Modal, Button } from "react-bootstrap"
import "./Site.css"


export const SiteDetails = (props) => {
    const {campsite, getSites, getCampSitebyId, setCampsite} = useContext(SiteContext)
    const [siteId, setCampSitebyId] = useState([])
    // const [campsite, setCampsite] = useState([])

    useEffect(() => {
       getSites()
    }, [])

    // useEffect(() => {
    //         const siteId = parseInt(props.match.params.id)
    //     getCampSitebyId().then(setCampSitebyId(siteId))
    // }, [])

    // console.log('SITEID', siteId )
    
//     useEffect(() => {
//         const siteId = parseInt(props.match.params.id)
//         getCampSitebyId(siteId)
//         }, [])
// console.log(siteId)

    // useEffect(() => {
       
    //     const selectedSite = siteId

    //     console.log("SITEDETAIL", props)

    // }, [selectedSite])



    
    
    
    console.log("RETURN", props)
    return (
        <>
        <Modal.Dialog>
 
    <Modal.Title>{campsite.name}</Modal.Title>
 

  <Modal.Body>
      <section className="site">
             <button className="add-trip" onClick={() => props.history.push("/trips/create")}>
            Add Trip
        </button>
            

             {
        campsite.map(s => <Site key={s.id} site={s} />)
                }

            </section>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal.Dialog>
        
            </>
    )
    
    
    
    
    
    
    
    
    
    
}
