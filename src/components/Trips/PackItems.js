import React, { useContext, useRef, useEffect, useState } from "react"
import { TripContext, TripProvider } from "./TripProvider"
import { ParkContext } from "../parks/ParkProvider"
import { Form } from "react-bootstrap"
import { GearContext } from "../gear/GearProvider"
import { GarageList } from "../gear/GarageList"



export const PackItems = (props) => {
    const { gear, addGear, getGear } = useContext(GearContext)
    const { getPackedItems, addPackedItem, packedItems } = useContext(TripContext)


   const  [selectedItem, setSelectedItem] = useState(null)

    const tripName = useRef(null)




    let item 
    useEffect(() => {
        console.log(selectedItem)
        return item = gear.find(g => g.id === packedItems)
    }, [selectedItem])

    useEffect(() => {
        getPackedItems().then(getGear)
    }, [])
   

    const packGear = (event) => {

     if (tripName === ""){
            window.alert("I mean you have to name the trip")
        } else {
            addPackedItem({
                // tripId: parseInt(props.match.params.id),
                // gear: parseInt(props.match.parmas.id),
                newItemId: parseInt(event.target.value),
                activeUser: parseInt(localStorage.getItem("app_user_id")),
                
                // tripId


})
        }
    }

    

    // const handleItemSelect = (event) => {
    //     const stateToChange = [...packedItems]

    //     stateToChange.push(newItemId)
    //     setPackedItems(stateToChange)
    //     // {
    //     //     gear.map(g => <p key={g.id} value={g.id}>{g.name}</p>)
    //     // }
    // }

return (
    <div>

    <>
    <form className="packForm">
{console.log(packedItems)}
 <select onChange={(c => {
    setSelectedItem(c.target.value)})}>
    

 

                    
                    
                    <option value="0">Pack Your Things</option>
                    {
                        gear.map(g => <option key={g.id} value={g.id}>{g.name} </option>)
                    }
                    {console.log(gear)}

                    </select>

<h3 className="packedList">Packed List</h3>
{/* {gear.find((g) => {
    g.id === selectedItem 
    return <p>{g.name}</p>

})} */}
                 {
                    
                  <p>{item}</p>

                }  
                
                {/* {console.log(packedItems)} */}

                <button onClick={() => props.history.push("/trip")}>
            Done Packing
        </button>

<button onClick={() => props.history.push("/gear/new")}>
            Add Gear
        </button>
 
 <button
            type="submit"
            onClick={(evt) => {
                evt.preventDefault();
                packGear()
                .then(() => props.history.push("/trip") )
            }}
            className="btn btn-primary"
            >
            Add To trip
          </button>

    </form>






    </>
            </div>




                




)


}

    













