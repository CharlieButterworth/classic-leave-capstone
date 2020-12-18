import React, { useContext, useRef, useEffect, useState } from "react"
import { TripContext, TripProvider } from "./TripProvider"

import { GearContext } from "../gear/GearProvider"




export const PackItems = (props) => {
    const { gear, getGear } = useContext(GearContext)
    const { getPackedItems, addPackedItem, packedItems, setPackedItem } = useContext(TripContext)

    const [itemArray, setItemArray] = useState([])
   const  [selectedItem, setSelectedItem] = useState(null)

    const tripName = useRef(null)
    const gearValue = useRef(null)

    useEffect(() => {
        getPackedItems().then(getGear)
    }, [])


    let item = ""
    useEffect(() => {
        // console.log(selectedItem)
        return item = gear.find(g => g.id === packedItems)
    }, [selectedItem])

   

    const packGear = (event) => {
console.log("console", event.target.value)
     if (tripName === ""){
            window.alert("I mean you have to name the trip")
        } else {
            addPackedItem({
                tripId: parseInt(props.match.params.id),
                gearId: parseInt(event.target.value),
                activeUser: parseInt(localStorage.getItem("app_user_id")),
                
                
                
                
            })
            
        }
    }


    return (
        <>
    <div>

    <form className="packForm">
{/* {console.log(packedItems)} */}
 <select onChange={(c => {
    //  console.log("LOGGG", c)
     let packList = +c.target.value
    setSelectedItem(c.target.value)
    itemArray.push(packList)
    packGear(c)
    })}>
                    
                    <option value="0">Pack Your Things</option>
                    {
                        gear.map(g => <option key={g.id} ref={gearValue} value={g.id} id={g.id}>{g.name} </option>)
                        
                    }
                    {console.log("Gear", gear)}
                    {/* {console.log(packedItems)} */}

                    </select>

                
                {/* {console.log(packedItems)} */}

        
        <h3 className="packedList">Packed List</h3>
    {
        itemArray.map(item => {
            /* eslint-disable no-unused-expressions */
           let gearItem = gear.find(g =>  {return item === g.id})
        console.log("NEW CONSOLELOG", gear, item)
            return (
                <p>{gearItem.name}</p>
            )
        })
    }
                    {/* This is where the item is listed once selected in dropdown */}
                

    </form>
            </div>
    </>

)


}

    













