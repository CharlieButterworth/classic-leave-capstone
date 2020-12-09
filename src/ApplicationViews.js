import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { ParkProvider } from "./components/parks/ParkProvider";
import { ParkList } from "./components/parks/ParkList"
import { GarageList } from "./components/gear/GarageList"
import { GearProvider } from "./components/gear/GearProvider"
import { GearForm } from "./components/gear/GearForm"



export const ApplicationViews = () => {
    return (

        //PARK INFO
        <>
        <ParkProvider>
            <Route exact path="/trip">
           <ParkList />
            </Route>
        </ParkProvider>


        
        
        <GearProvider>
            <Route
              path="/garage"
              render={(props) => <GarageList {...props} />}
              />
              <Route exact path="/garage/create"
              render={(props) => <GearForm {...props} />}
              />
        </GearProvider>
            
            </>
            

    




                
    )


}