import React, { useContext, useEffect, useState } from "react";
import {ParkContext } from "./ParkProvider"

export const ParkDetails = (props) => {
    const { getParkById }  = useContext(ParkContext)

    const [park, setPark] = useState({ gear: {}})


    useEffect(() => {
        const parkId = parseInt(props.match.params.id)
        getParkById(parkId).then(setPark)
        console.log(props)
    }, [])

    return (
<>
<section className="park">
    <h3 className="park__name">{park.fullName}</h3>



<button onClick={() => {
    props.history.push(`/trip/create`)
}}>Let's Adventure!</button>

</section>

</>
    )

}