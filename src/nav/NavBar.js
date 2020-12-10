import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"


export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/garage">Garage</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/trip">Plan Trip</Link>
            </li>
        </ul>
)




}