import React, { useState } from "react"

export const UserContext = React.createContext()

export const UserProvider = (props) => {
    const [user, setUser] = useState([])


const getUser = () => {
    return fetch("http://localhost:8088/user")
        .then(res => res.json())
            .then(setUser)
}


return (
        <UserContext.Provider value={{
            user, setUser
        }}>
            {props.children}
        </UserContext.Provider>
    )



}
