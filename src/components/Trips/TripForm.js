import React, { useContext, useRef, useEffect } from "react"
import { TripContext } from "./TripProvider"
import { ParkContext } from "../parks/ParkProvider"
import { Form } from "react-bootstrap"
import { GearContext } from "../gear/GearProvider"

export const TripForm = (props) => {
    const { addTrip, getTrip, setTrip } = useContext(TripContext)
    const {parks, getParks } = useContext(ParkContext)
    const { gear, addGear } = useContext(GearContext)




    const tripName = useRef(null)
    const parkName = useRef(null)
    const activityName = useRef(null)



    useEffect(() => {
        getParks()
        .then(getTrip())
        .then(setTrip)
    }, [])


    const handleCheckbox = (event) => {
        let activeUser = +localStorage.getItem("app_user_id")

        if (event.target.checked) {
            addGear({
                userId: parseInt(activeUser)
            })
        }

    }

const constructNewTrip = () => {
        const tripId = parseInt(tripId.id)
        // const parkId = parseInt(parkId)

        
        if (tripName === ""){
            window.alert("I mean you have to name the trip")
        } else {
            addTrip({
                tripName: parkName.current.value,
                // activityName: activityName.current.value,  ----- need to add the form for gear around here
                activeUser: parseInt(localStorage.getItem("app_user_id"))
            })
            .then(() => props.history.push("./"))
        }
    }   
    

    return (
        <>
        <form className="tripForm">
            <h2 className="tripForm__title"></h2>
            <fieldset>
                <h3>PARK NAME</h3>
                <div className="form-group">
                    <label htmlFor="tripName">Trip name: </label>
                    <input type="text" id="tripName" ref={parkName} required autoFocus className="form-control" placeholder="Trip Name" />
                  
                  {/* Need to add gear here in order to have checkboxes to bring on trip */}
                  
       
{gear.map(gear => {
    const userGear = gear.find(g => g.gearId === tripId && +localStorage.getItem("app_user_id"))

    if(userGear) {
        return (<Form.Check type="checkbox" key={gear.id} label={gear.name} id={userGear.id} defaultChecked= {true} onChange={event => {handleCheckbox(event)}} />
        )
    }
    else {
        <div></div>
    }
})}
                  
                    {/* <Form>
                    {['gear'].map((gear) => (
                         <div key={checkbox} className="mb-3">
                          <Form.Check type={checkbox} id={`http://localhost:8088/gear/`}>
                           <Form.Check.Input type={checkbox} isValid />
                           <Form.Check.Label>{"http://localhost:8088/gear"}</Form.Check.Label>
                               <Form.Control.Feedback type="valid">Packed!</Form.Control.Feedback>
                          </Form.Check>
                             </div>
                              ))}
                            </Form> */}
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