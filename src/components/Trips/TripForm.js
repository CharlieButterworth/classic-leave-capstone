import React, { useContext, useRef, useEffect } from "react"
import { ParkContext } from "../parks/ParkProvider"
import { Form } from "react"

export const TripForm = (props) => {
    const { parks, getParks } = useContext(ParkContext)




    const tripName = useref(null)



    useEffect(() => {
        getTrips()
    }, [])


    

    return (
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="text" placeholder="Enter Trip Name" />
  </Form.Group>
  </Form>

    )

}