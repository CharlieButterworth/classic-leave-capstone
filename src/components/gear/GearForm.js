
import React, { useContext, useRef, useEffect } from "react"
import { GearContext } from "./GearProvider"
import "./Gear.css"


export const GearForm = (props) => {
    const { addGear, getGear, setGear } = useContext(GearContext)


    const gearName = useRef(null)
    
    
    
    useEffect(() => {
        getGear().then(setGear)
    }, [])
    
    const constructNewGear = () => {
        const garageId = parseInt(gearName.id)

        
        if (garageId === 0 ){
            window.alert("I mean you have to name the gear")
        } else {
            addGear({
                name: gearName.current.value
            })
            .then(() => props.history.push("./gear"))
        }
    }   

        return (
            <form className="gearForm">
            <h2 className="gearForm__title">Add Gear</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="gearName">Gear name: </label>
                    <input type="text" id="gearName" ref={gearName} required autoFocus className="form-control" placeholder="Gear Name" />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewGear()
                }}
                className="btn btn-primary">
                Save Gear
            </button>
            </form>
        )

}