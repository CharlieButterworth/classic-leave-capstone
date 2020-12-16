import React, { useState } from "react"

export const FriendContext = React.createContext()


export const FriendProvider = (props) => {
    const [friend, setFriend] = useState([])

    const activeUser = parseInt(localStorage.getItem("app_user_id"))



const getFriends = (activeUserId) => {
    return fetch (`http://localhost:8088/friendsId=${activeUserId}`)
    .then(res => res.json())
    .then(setFriend)
}





return (
        <FriendContext.Provider value={{
            friend, setFriend, getFriends
        }}>
            {props.children}
        </FriendContext.Provider>
    )


}