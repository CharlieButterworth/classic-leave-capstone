import React, { useContext, useEffect } from "react"
import { GearContext } from "../gear/GearProvider"
import {TripContext} from "./TripProvider"


export const PackedTripItems = (props) => {
    // const {gear, getGear} = useContext(GearContext)
    const {trip, getTrip, getPackedItems, packedItems, } = useContext(TripContext)




useEffect(() => {
    getPackedItems().then(() => {
        getTrip()
    })
}, [])



return (
    <div className='packedItemsList'>

        
{
   packedItems.map(pi => {
/* eslint-disable no-unused-expressions */
        trip.find(trip => {pi.activeUser == trip.activeUser})

     
        return (
            <p>{pi.id}</p>
            )
            
        })
}








    </div>
)


}