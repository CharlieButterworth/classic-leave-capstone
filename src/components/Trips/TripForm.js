import React, { useContext, useRef, useEffect } from "react"
import { TripContext } from "./TripProvider"
import { ParkContext } from "../parks/ParkProvider"
import { Form } from "react-bootstrap"
import { GearContext } from "../gear/GearProvider"
import { GarageList } from "../gear/GarageList"

export const TripForm = (props) => {
    const { addTrip, getTrip, setTrip, addPackedItem } = useContext(TripContext)
    const {parks, getParks } = useContext(ParkContext)
    const { gear, addGear, getGear } = useContext(GearContext)




    const tripName = useRef(null)
    const parkName = useRef(null)
    const gearName = useRef(null)
   



    useEffect(() => {
        getParks()
        .then(getTrip())
        .then(setTrip)
    }, [])

    useEffect(() => {
        let userId = +localStorage.getItem("app_user_id") 
         getGear({
                userId: parseInt(userId),
    })}, [])

   
    

    

const constructNewTrip = () => {
        // const tripId = parseInt(tripId.id)
        // const parkId = parseInt(parkId)

        
        if (tripName === ""){
            window.alert("I mean you have to name the trip")
        } else {
            addTrip({
                tripName: parkName.current.value,
                // packedItem: gear.name.current.value,
                
                // activityName: activityName.current.value,  ----- need to add the form for gear around here
                activeUser: parseInt(localStorage.getItem("app_user_id"))
            })
            .then(() => props.history.push("./"))
        }
    }   

    const handleItemSelect = () => {
        addPackedItem({
            // tripId,
            // gearId,
            activeUser: parseInt(localStorage.getItem("app_user_id"))
        })

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
                    <select onChange = {handleItemSelect}> 

                    
                    
                    <option value="0">Pack Your Things</option>
                    {
                        gear.map(g => <option key={g.id} value={g.id}>{g.name} </option>)
                        
                    }
                    </select>
                    {console.log(gear)}
                    
                  {/* Need to add gear here in order to have checkboxes to bring on trip */}
                  

           
    <div className="parkName">{parks.fullName}</div>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewTrip()
                }}
                className="btn btn-primary">
                Save Trip
            </button>
            {/* </select> */}
            </div>
            </fieldset>
            </form>
            </>
            
        
    )
    }




