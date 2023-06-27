import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "../config/firebase";
import { Alert } from "react-native";

import { onCreateUserInDb } from "./firebase-db";
import { collection, doc, getDoc } from "firebase/firestore";

export const onRegisterNewUser = (username, email, password, checked) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      console.log("New User: " + user);
      await onCreateUserInDb(username, email, checked, user.uid);
      updateAuthProfile(username, checked); // updating profile with authentication
      // TODO Create user in our DB
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + ": " + errorMessage);
    });
};

export const onSignInUser = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + ": " + errorMessage);

      Alert.alert(errorCode);
    });
};

//  Sign Out Functionality
export const onLogOut = () => {
  signOut(auth)
    .then(() => {
      console.log("Logged out");
    })
    .catch((err) => {
      console.log(err.errorMessage);
    });
};

// Returns the currently logged in user
export const getCurrentUser = () => {
  console.log(auth.currentUser + "THIS IS THE USER");
  return auth.currentUser;
};

export const checkIsJudge = async (uid) => {
  try {
    const userRef = doc(collection(db, "users"), uid);
    const querySnapshot = await getDoc(userRef);

    if (querySnapshot.exists() && querySnapshot.data().isJudge) {
      console.log("This user is a judge")
      return true;
    } else {
      console.log("this user is not a judge")
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

const updateAuthProfile = (username) => {
  updateProfile(auth.currentUser, {
    displayName: username,
  })
    .then(() => {
      // Profile updated!
      // ...
      console.log("Profile Updated");
    })
    .catch((error) => {
      // An error occurred
      // ...
      console.log(username);
      console.log(error);
      console.log("Profile Update ERROR");
    });
};
