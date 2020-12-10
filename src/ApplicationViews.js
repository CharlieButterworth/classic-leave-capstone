import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { ParkProvider } from "./components/parks/ParkProvider";
import { ParkList } from "./components/parks/ParkList"
import { GarageList } from "./components/gear/GarageList"
import { GearProvider } from "./components/gear/GearProvider"
import { GearForm } from "./components/gear/GearForm"
import { Gear } from "./components/gear/Gear"



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
              {/* <Route
              exact path="/garage"
              render={(props) => <Gear {...props} />}
              /> */}
              <Route exact path="/garage/new"
              render={(props) => <GearForm {...props} />}
              />
        </GearProvider>
            
            </>
            

    




                
    )


}