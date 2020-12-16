import React, { useContext, useRef, useEffect } from "react"
import { FriendContext } from "./FriendsProvider"



export const FriendForm = (props) => {
    const { getFriends } = useContext(FriendContext)






    useEffect(() => { 
        getFriends()
    }, [])






    return (

        <form className="newFriend">
            <h2 className="friendForm">Add Friend</h2>







<button onClick={() => props.history.push("/friend/new")}>
    Add Friend
</button>






        </form>




    )

}