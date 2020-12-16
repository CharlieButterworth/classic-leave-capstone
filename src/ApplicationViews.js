import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { ParkProvider } from "./components/parks/ParkProvider";
import { ParkList } from "./components/parks/ParkList"
import { ParkDetails } from "./components/parks/ParkDetails"
import { GarageList } from "./components/gear/GarageList"
import { GearProvider } from "./components/gear/GearProvider"
import { GearForm } from "./components/gear/GearForm"
import { GearDetails } from "./components/gear/GearDetails"
import { TripForm } from "./components/trips/TripForm"
import { TripProvider } from "./components/trips/TripProvider";
import { TripList } from "./components/trips/TripList"
import { FriendProvider } from "./components/friends/FriendsProvider";
import { FriendList } from "./components/friends/FriendList"
import { UserProvider } from "./components/user/UserProvider";




export const ApplicationViews = (props) => {
    return (

        //PARK INFO
        <>
        

        <TripProvider>
        <GearProvider>
            <ParkProvider>
            <Route exact path="/trip"
          render={(props) =>  <ParkList {...props}/>}
          />
            {/* <Route
            path="/trip"
            render={(props) => <ParkDetails {...props} />}
        /> */}
            <Route exact path="/trip"
              render={(props) => <TripList {...props} />}
              />
            <Route exact path="/trip/create"
              render={(props) => <TripForm {...props} />}
              />
              
              <Route exact path="/trip/:id(\w\w\w\w\w\w\w\w.\w\w\w\w.\w\w\w\w.\w\w\w\w.\w\w\w\w\w\w\w\w\w\w\w\w)"
              render={(props) => <ParkDetails {...props}/>}
              />
        </ParkProvider>
              </GearProvider>
              </TripProvider>
            


        
        
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
            


            <FriendProvider>
                <Route
             exact path="/friend"
              render={(props) => <FriendList  {...props} />}
              />

            </FriendProvider>







            </>
            

    




                
    )


}