import React, { useContext, useEffect } from "react"
import { Gear } from "../gear/Gear"
import { GearContext } from "../gear/GearProvider"
import {TripContext} from "./TripProvider"


export const PackedTripItems = (props) => {
    const {trips, getTrip, getPackedItems, packedItems, } = useContext(TripContext)
    const {gear, getGear } = useContext(GearContext)



// useEffect(() => {
//     getTripPackedItems()
// })






    useEffect(() => {
    getPackedItems().then(() => {
        getTrip().then(() => {
            getGear()
        })
    })
}, [])



return (

    <div className='packedItemsList'>
<h3>What's Packed???</h3>
        
{
   packedItems.map(pi => {
/* eslint-disable no-unused-expressions */
       gear.find(gear => {{pi.activeUser === gear.activeUser && pi.tripId === trips.id}
     
     return   <Gear key={gear.id} gear={gear} />})
            
        })
}
    </div>
)


}