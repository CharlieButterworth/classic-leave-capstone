import React, { useContext, useRef, useEffect, useState } from "react"
import { TripContext } from "./TripProvider"
import "./Trip.css"

import { GearContext } from "../gear/GearProvider"




export const PackItems = (props) => {
    const { gear, getGear } = useContext(GearContext)
    const { getTripPackedItems, addPackedItem, packedItems } = useContext(TripContext)

    
   const  [selectedItem, setSelectedItem] = useState(null)

   const tripId = parseInt(props.match.params.id)
    const tripName = useRef(null)
    const gearValue = useRef(null)
    // const packList = useRef(null)

    useEffect(() => {
      const tripId = parseInt(props.match.params.id)
        getGear().then(getTripPackedItems(tripId))
        
    }, [])



    const packGear = (event) => {
// console.log("console", event.target.value)
     if (tripName === ""){
            window.alert("I mean you have to name the trip")
        } else {
            addPackedItem({
                tripId: tripId,
                gearId: parseInt(event.target.value),
                activeUser: parseInt(localStorage.getItem("app_user_id")), //take this out 
                
                
                
                
            })
            .then(getTripPackedItems(tripId))
            
        }
    }


return (
    <>
      <div>
        <form className="packForm">
          <select
            onChange={(c) => {
              packGear(c);
            }}
            >
            <option className="gear-drop"value="0">Pack Your Things</option>
            {
            gear.map((g) => (
              <option  key={g.id} value={g.id} id={g.id}>
                {g.name}
              </option>
            ))
            }
          </select>
            {console.log("Gear", gear)}
          <h3 className="packedList">Packed List</h3>
          {
          packedItems.map((item) => {
            //   if (item.gear.tripId === trip.id){ 
            //       window.alert("Nothing is packed!")
            //   } else {
            return <p className="packItem">{item.gear.name}</p>;
          })
          }
        </form>
      </div>
    </>
  );
};



    













