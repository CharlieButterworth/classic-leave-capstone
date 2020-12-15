import React, { useContext, useEffect, useState } from "react";
import { ParkContext } from "./ParkProvider"
import { Modal, Button } from "react-bootstrap"

export const ParkDetails = (props) => {
    const { getParkById }  = useContext(ParkContext)

    const [parks, setPark] = useState({})

    const park = ({})

    useEffect(() => {
        const parkId = parseInt(props.match.params.id)
        getParkById(parkId).then(setPark)
        // console.log(props)
    }, [])

    // useEffect(() => {
    //     const selectedPark = parks.find(p => p.id === parks.id) || {}
    //    setPark(selectedPark)
    // }, []) 
    

    return (
<>
<section className="park">

    <h3>HELLO</h3>

    {/* {console.log(props)} */}
   
<Modal.Dialog>

    <Modal.Title>{park.fullName}</Modal.Title>
    {console.log("PARK", park)}


  <Modal.Body>
    <p>{park.fullName}</p>
    <p>{park.entranceFees}</p>
  </Modal.Body>

  <Modal.Footer>
    <Button onClick={() => props.history.push("/trip")}variant="secondary">Close</Button>
    <Button onClick={() => props.history.push("/trip/create")} variant="primary">Lets Adventure</Button>
  </Modal.Footer>
</Modal.Dialog>
   



{/* <button onClick={() => {
    props.history.push(`/trip/create`)
}}>Let's Adventure!</button> */}

</section>

</>
    )

}