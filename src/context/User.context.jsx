import { createContext, useState, useEffect, useLayoutEffect } from "react";
import { getCurrentUser } from "../services/firebase-auth";
import { getAllPets } from "../services/firebase-db";
import * as Location from "expo-location";
import { ActivityIndicator } from "react-native";
import { colors } from "../utils/colors";

console.log("LOADED CONTEXT");
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState([]);
  const [address, setAddress] = useState();
  const [pets, setPets] = useState([]);
  const [location, setLocation] = useState();

  const getCurrentSignedInUser = () => {
    const currentUser = getCurrentUser();
    console.log(currentUser);
    setLoggedInUser(currentUser);
    const retrievedPets = getAllPets(currentUser.uid);
    setPets(retrievedPets);
  };

  console.log("STOPPED BEFORE EFFECT");

  //TODO Setup useEffects
  useEffect(() => {
    console.log("USEEFFECT RUNNING");
    const fetchData = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          return;
        }

        const currentLocation = await Location.getCurrentPositionAsync({});

        const reverseGeoCode = async (location) => {
          try {
            const reverseGeoCodedAddress = await Location.reverseGeocodeAsync({
              longitude: location.coords.longitude,
              latitude: location.coords.latitude,
            });

            console.log("Reverse Geocoded");

            reverseGeoCodedAddress.forEach(({ city, district }) => {
              setAddress(`${district}, ${city}`);
            });
            console.log(address);
          } catch (error) {
            console.error("Error during reverse geocoding:", error);
          }
        };

        reverseGeoCode(currentLocation);
        //get all pets

        setLocation(currentLocation);
      } catch (error) {
        console.error("Error during data fetching:", error);
      }
    };
    fetchData();
    console.log("AAA LOOP" + fetchData);
  }, [getAllPets]);
  return (
    <UserContext.Provider
      value={{
        address,
        setAddress,
        loggedInUser,
        setLoggedInUser,
        pets,
        setPets,
        getCurrentSignedInUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
