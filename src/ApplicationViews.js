import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { ParkProvider } from "./components/parks/ParkProvider";
import { ParkList } from "./components/parks/ParkList"
import { GarageList } from "./components/gear/GarageList"
import { GearProvider } from "./components/gear/GearProvider"
import { GearForm } from "./components/gear/GearForm"
import { GearDetails } from "./components/gear/GearDetail"



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
             exact path="/garage"
              render={(props) => <GarageList  {...props} />}
              />
              <Route
             exact path="/garage/:gearId(/d+)"
              render={(props) => <GearDetails  {...props} />}
              />
              
              <Route exact path="/garage/new"
              render={(props) => <GearForm {...props} />}
              />
        </GearProvider>
            
            </>
            

    




                
    )


}