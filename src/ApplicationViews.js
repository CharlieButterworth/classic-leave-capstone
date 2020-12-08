import React from "react";
import { Route } from "react-router-dom";
import { ParkProvider } from "./components/parks/ParkProvider";
import { ParkList } from "./components/parks/ParkList"



export const ApplicationViews = () => {
    return (
        <>
        <ParkProvider>
            <Route exact path="/trip">
           <ParkList />
            </Route>
        </ParkProvider>
        </>
                
    )


}