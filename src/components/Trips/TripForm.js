import React, { useContext, useRef, useEffect } from "react"
import { TripContext } from "./TripProvider"
import { ParkContext } from "../parks/ParkProvider"
import { Form } from "react"

export const TripForm = (props) => {
    const { addTrip, getTrip, setTrip } = useContext(TripContext)
    const {parks, getParks } = useContext(ParkContext)




    const tripName = useRef(null)
    const parkName = useRef(null)



    useEffect(() => {
        getParks()
        .then(getTrip())
        .then(setTrip)
    }, [])

const constructNewTrip = () => {
        const tripId = parseInt(tripName.id)
        // const parkId = parseInt(parkId)

        
        if (tripId === 0 ){
            window.alert("I mean you have to name the trip")
        } else {
            addTrip({
                tripName: parkName.current.value
            })
            .then(() => props.history.push("./"))
        }
    }   
    

    return (
        <>
        <form className="tripForm">
            <h2 className="tripForm__title">Add Trip</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="tripName">Trip name: </label>
                    <input type="text" id="tripName" ref={parkName} required autoFocus className="form-control" placeholder="Trip Name" />
                </div>
            </fieldset>
    <div className="parkName">{parks.fullName}</div>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewTrip()
                }}
                className="btn btn-primary">
                Save Trip
            </button>
            </form>
            </>
        
    )

}