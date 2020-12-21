import React, { useContext, useRef, useEffect, useState } from "react"
import { TripContext, TripProvider } from "./TripProvider"
import { ParkContext } from "../parks/ParkProvider"
import { Form } from "react-bootstrap"
import { GearContext } from "../gear/GearProvider"
import { GarageList } from "../gear/GarageList"

export const TripForm = (props) => {
    const { trip, addTrip, getTrip, setTrip, addPackedItem } = useContext(TripContext)
    const {parks, getParks } = useContext(ParkContext)
    const { gear, addGear, getGear } = useContext(GearContext)

    const [packedItems, setPackedItems ] = useState([])


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

   
    // useEffect(() => {
    //     getGear()
    //     .then(() => {})

    // }, [trip])

    

const constructNewTrip = (gear) => {
        // const tripId = parseInt(tripId.id)
        // const parkId = parseInt(parkId)

        
        if (tripName === ""){
            window.alert("Please Name Trip!")
        } else {
            addTrip({
                tripName: parkName.current.value,
                activeUser: parseInt(localStorage.getItem("app_user_id")),
                
            })
            // console.log(activeUser)
            // .then(() => addPackedItem({
            //     // gear: gear.Id,
            //     activeUser: parseInt(localStorage.getItem("app_user_id")),
            //     packedItems,
            //     // tripId
            // }
            // ))
            .then(() => props.history.push("/"))
        }
       

    // const handleItemSelect = (event) => {
    //     const newItemId = parseInt(event.target.value)
    //     const stateToChange = [...packedItems]

    //     stateToChange.push(newItemId)
    //     setPackedItems(stateToChange)
        // {
        //     gear.map(g => <p key={g.id} value={g.id}>{g.name}</p>)
        // }
    }
    

    return (
        <>
        <form className="tripForm">
            <h2 className="tripForm__title"></h2>
            
            <fieldset>
                <h3>Step 1:</h3>
                <div className="form-group">
                    <label htmlFor="tripName">Trip name: </label>
                    <input type="text" id="tripName" ref={parkName} required autoFocus className="form-control" placeholder="Trip Name" />
                    {/* <select onChange={handleItemSelect}> 

                    
                    
                    <option value="0">Pack Your Things</option>
                    {
                        gear.map(g => <option key={g.id} value={g.id}>{g.name} </option>)
                        
                    }
                    </select> */}
                    {/* {console.log(gear)} */}
                    
                  
                  
            {/* <h3 className="packedList">Packed List</h3>
                {packedItems.map(item =>  <p>{item}</p>)}  {/*need to add onto this with a .filter in order to find the name of the gear*/}
    {/* <div className="parkName">{parks.fullName}</div>  */}
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





