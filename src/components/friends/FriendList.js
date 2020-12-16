import React, { useContext, useEffect } from "react"
import { FriendContext } from "./FriendsProvider"
import { Friend } from "./Friend"


export const FriendList = (props) => {
    const {friend, getFriends} = useContext(FriendContext)


        useEffect(() => {
            getFriends()
        }, [])


         return (
    <div className="friend">
        <h1>Friends</h1>
        <button onClick={() => props.history.push("/friend/new")}>
            Add Friend
        </button>
        <div className="friendList">
            
        {
            
            friend.map(f => <Friend key={f.id} friend={f} />)
        }
            </div>
        </div> 
    )
}