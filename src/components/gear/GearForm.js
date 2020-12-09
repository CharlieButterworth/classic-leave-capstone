import { useEffect } from "react"
import { GearContext } from "./GearProvider"


export const GearList = (props) => {
    const { addGear } = useContext(GearContext)



    const gearType = useRef(null)
    
    
    useEffect(() => {
        getGear()
    }, [])
    
    const constructNewGear = () => {

        
        if (gearId === 0 ){
            window.alert("I mean you have to name hte gear")
        } else {
            addGear({
                gearType 
            })
            .then(() => props.history.push("./garage"))
        }
    }   

        return (
            <form className="gearForm">
            <h2 className="gearForm__title">Add Gear</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="gearName">Gear name: </label>
                    <input type="text" id="gearName" ref={name} required autoFocus className="form-control" placeholder="Gear Name" />
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