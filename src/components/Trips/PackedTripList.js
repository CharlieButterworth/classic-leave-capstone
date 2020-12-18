import React, { useContext, useEffect } from "react"
import { Gear } from "../gear/Gear"
import { GearContext } from "../gear/GearProvider"
import {TripContext} from "./TripProvider"


export const PackedTripItems = (props) => {
    // const {gear, getGear} = useContext(GearContext)
    const {trip, getTrip, getPackedItems, packedItems, } = useContext(TripContext)
    const {gear, getGear } = useContext(GearContext)



useEffect(() => {
    getPackedItems().then(() => {
        getTrip().then(() => {
            getGear()
        })
    })
}, [])



return (

    <div className='packedItemsList'>

        
{
   packedItems.map(pi => {
/* eslint-disable no-unused-expressions */
       gear.find(gear => {{pi.activeUser === gear.activeUser && pi.gearId === gear.id}
     
       return <Gear key={gear.id} gear={gear} />})
            

console.log("PACKED ITEMS AND TRIPS HERE", packedItems, trip,)
     
         
            
            
            
        
          










             {/* <button onClick={() => props.history.push(`/trip/${trip.id})`)}>
            Add Gear To Trip
        </button> */}
            
            
            
            
        })
}
    </div>
)


}