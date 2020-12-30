import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { ParkProvider } from "./components/parks/ParkProvider";
// import { ParkList } from "./components/parks/ParkList"
// import { ParkDetails } from "./components/parks/ParkDetails"
import { GarageList } from "./components/gear/GarageList"
import { GearProvider } from "./components/gear/GearProvider"
import { GearForm } from "./components/gear/GearForm"
import { GearDetails } from "./components/gear/GearDetails"
import { TripForm } from "./components/trips/TripForm"
import { TripProvider } from "./components/trips/TripProvider";
import { TripList } from "./components/trips/TripList"
// import { FriendProvider } from "./components/friends/FriendsProvider";
// import { FriendList } from "./components/friends/FriendList"
import  { PackForTrip, PackItems } from "./components/trips/PackItems"
import {FinalTrips} from "./components/trips/FinalTrips"
import { SiteList } from "./Sites/SiteList"
import { SiteProvider } from "./Sites/SiteProvider";
import { SiteDetails } from "./Sites/SiteDetail"





export const ApplicationViews = (props) => {
    return (

        //PARK INFO
        <>
        
      <SiteProvider>

        <TripProvider>
        <GearProvider>
            <ParkProvider>
            <Route exact path="/trips"
          render={(props) =>  <SiteList {...props}/>}
          />
           <Route exact path="/trip/:id(\w\w\w\w\w\w\w\w.\w\w\w\w.\w\w\w\w.\w\w\w\w.\w\w\w\w\w\w\w\w\w\w\w\w)"
          render={(props) =>  <SiteDetails {...props}/>}
          />
            <Route
           exact path="/"
           render={(props) => <FinalTrips {...props} />}
        />
            <Route exact path="/trips"
              render={(props) => <TripList {...props} />}
              />
            <Route exact path="/trips/create"
              render={(props) => <TripForm {...props} />}
              />
              <Route path="/trips/:id(\d+)"
              render={(props) => <PackItems {...props} />}
              />
               {/* <Route exact path="/trips/:id(\d+)"
              render={(props) => <PackedTripItems {...props} />}
              /> */}
              {/* <Route exact path="/campsite"
              render={(props) => <ParkCampsites {...props} />}
              /> */}
              
              {/* <Route exact path="/trips/:id(\w\w\w\w\w\w\w\w.\w\w\w\w.\w\w\w\w.\w\w\w\w.\w\w\w\w\w\w\w\w\w\w\w\w)"
              render={(props) => <ParkDetails {...props}/>}
              /> */}
        </ParkProvider>
              </GearProvider>
              </TripProvider>
              </SiteProvider>
            


        
        
        <GearProvider>
            <Route
             exact path="/gears"
              render={(props) => <GarageList  {...props} />}
              />
              <Route
                path="/gears/:id(\d+)"
              render={(props) => <GearDetails  {...props} />}
              />
              
              <Route exact path="/gears/new"
              render={(props) => <GearForm {...props} />}
              />
        </GearProvider>
            


           







            </>
            

    




                
    )


}