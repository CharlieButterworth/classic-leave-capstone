import React, { useContext, useRef, useEffect, useState } from "react"
import { TripContext, TripProvider } from "./TripProvider"
import { ParkContext } from "../parks/ParkProvider"
import { Form } from "react-bootstrap"
import { GearContext } from "../gear/GearProvider"
import { GarageList } from "../gear/GarageList"


export const PackItems = (props) => {
    const { gear, addGear, getGear } = useContext(GearContext)
    const { trip, addTrip, getTrip, setTrip, addPackedItem } = useContext(TripContext)


    const [packedItems, setPackedItems ] = useState([])

    const tripName = useRef(null)
   

    const packGear = () => {

     if (tripName === ""){
            window.alert("I mean you have to name the trip")
        } else {
            addPackedItem({
                tripId: parseInt(props.match.params.id),
                gear: gear.Id,
                activeUser: parseInt(localStorage.getItem("app_user_id")),
                
                // tripId


})
        }

    }

    const handleItemSelect = (event) => {
        const newItemId = parseInt(event.target.value)
        const stateToChange = [...packedItems]

        stateToChange.push(newItemId)
        setPackedItems(stateToChange)
        // {
        //     gear.map(g => <p key={g.id} value={g.id}>{g.name}</p>)
        // }
    }

return (
    <>
    <form className="packForm">

 <select onChange={handleItemSelect}> 

                    
                    
                    <option value="0">Pack Your Things</option>
                    {
                        gear.map(g => <option key={g.id} value={g.id}>{g.name} </option>)
                    }
                    {console.log(gear)}

                    </select>

<h3 className="packedList">Packed List</h3>
                {packedItems.map(item =>  <p>{item}</p>)}

                <button onClick={() => props.history.push("/gear/new")}>
            Forget Anything??
        </button>

<button onClick={() => props.history.push("/gear/new")}>
            Add Gear
        </button>
 

    </form>






    </>









)


}
    













