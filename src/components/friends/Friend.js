import React from "react"
import { Link } from "react-router-dom"


export const Friend = ({ friend }) => (
    <section className="friend">
        <h3 className="friend__name">
            <Link to={`/friend/new`}>
                { friend.name }
            </Link>
            
        </h3>
 
  

</section>
)