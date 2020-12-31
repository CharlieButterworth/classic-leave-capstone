import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"


export const NavBar = (props) => {

    const clearLocalStorage = () => {
        localStorage.removeItem('app_user_id')
    }
    
    return (
        
        <ul className="navbar">
            <img></img>
            <li className="navbar__item">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/gears">My Gear</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/trips">Plan Trip</Link>
            </li>
            
        </ul>
        
)




}