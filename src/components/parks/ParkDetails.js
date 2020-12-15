import React, { useContext, useEffect, useState } from "react";
import { ParkContext } from "./ParkProvider"

export const ParkDetails = (props) => {
    const { getParkById }  = useContext(ParkContext)

    const [parks, setPark] = useState({})


    useEffect(() => {
        const parkId = parseInt(props.match.params.id)
        getParkById(parkId).then(setPark)
        // console.log(props)
    }, [])

    // useEffect(() => {
    //     const selectedPark = parks.find(p => p.id === parks.id) || {}
    //    setPark(selectedPark)
    // }, []) 
    

    return (
<>
<section className="park">

    <h3 className="park__name">{parks.fullName}</h3>



<button onClick={() => {
    props.history.push(`/trip/create`)
}}>Let's Adventure!</button>

</section>

</>
    )

}