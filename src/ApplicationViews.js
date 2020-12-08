import React from "react";
import { Route } from "react-router-dom";
import { ParkProvider } from "./components/parks/ParkProvider";
import { ParkList } from "./components/parks/ParkList"
import { GearList } from "./components/gear/GearList"
import { GearProvider } from "./components/gear/GearProvider"



export const ApplicationViews = () => {
    return (

        //PARK INFO
        <>
        <ParkProvider>
            <Route exact path="/trip">
           <ParkList />
            </Route>
        </ParkProvider>


        //GEAR INFO
        
        <GearProvider>
            <Route exact path="/gear" render={(props) => <GearList {...props} />}
            />
            <GearList />
        </GearProvider>
            </>
            

    




                
    )


}