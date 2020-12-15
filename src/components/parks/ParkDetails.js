import React, { useContext, useEffect, useState } from "react";
import { ParkContext } from "./ParkProvider"
import { Modal, Button } from "react-bootstrap"

export const ParkDetails = (props) => {
    const { getParkById, getParks }  = useContext(ParkContext)

    const [parks, setPark] = useState([])
    const [selectedPark, setSelectedPark] = useState({})

    const park = ([])

    useEffect(() => {
        getParks()
    }, [])

    // useEffect(() => {
    //     getParkById(parkId).then(setPark)
    //     // console.log(props)
    // }, [])
    
    
    useEffect(() => {
            const parkId = parseInt(props.match.params.id)
            
            const parks= getParks()
            const selectedParkName = parkId
            const setSelectedPark = parks.filter(
          (parksObj) => parksObj.fullName === selectedParkName)
          
  
    }, [park]) 
    
    
    return (
        <>
<section className="park">
        {console.log("USEEFFECT", parks)}

    <h3>HELLO</h3>
    

    {console.log("PROPS", props)}
   
{/* <Modal.Dialog>

    <Modal.Title>{parks.fullName}</Modal.Title>
    {console.log("PARK", park)}


  <Modal.Body>
    <p>{parks.fullName}</p>
    <p>{parks.entranceFees}</p>
  </Modal.Body>

  <Modal.Footer>
    <Button onClick={() => props.history.push("/trip")} variant="secondary">Close</Button>
    <Button onClick={() => props.history.push("/trip/create")} variant="primary">Let's Adventure</Button>
  </Modal.Footer>
</Modal.Dialog>
    */}



{/* <button onClick={() => {
    props.history.push(`/trip/create`)
}}>Let's Adventure!</button> */}

</section>

</>
    )

}