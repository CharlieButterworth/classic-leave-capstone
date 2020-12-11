import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { ParkProvider } from "./components/parks/ParkProvider";
import { ParkList } from "./components/parks/ParkList"
import { ParkDetails } from "./components/parks/ParkDetails"
import { GarageList } from "./components/gear/GarageList"
import { GearProvider } from "./components/gear/GearProvider"
import { GearForm } from "./components/gear/GearForm"
import { GearDetails } from "./components/gear/GearDetails"




export const ApplicationViews = (props) => {
    return (

        //PARK INFO
        <>
        <ParkProvider>
            <Route exact path="/trip">
           <ParkList />
            </Route>
            <Route
            path="/trip"
            render={(props) => <ParkDetails {...props} />}
            />
        </ParkProvider>


        
        
        <GearProvider>
            <Route
             exact path="/gear"
              render={(props) => <GarageList  {...props} />}
              />
              <Route
                path="/gear/:id(\d+)"
              render={(props) => <GearDetails  {...props} />}
              />
              
              <Route exact path="/gear/new"
              render={(props) => <GearForm {...props} />}
              />
        </GearProvider>
            
            </>
            

    




                
    )


}