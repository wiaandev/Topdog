import {
  Timestamp,
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { uploadToStorage } from "./firebase-storage";

// User Collection
export const onCreateUserInDb = async (username, email, isJudge, uid) => {
  try {
    const docRef = await setDoc(doc(db, "users", uid), {
      username,
      email,
      isJudge,
      createdAt: Timestamp.now(),
    });
    console.log(docRef);
  } catch (error) {
    console.log("Error: " + error);
  }
};

export const getAllCompetitions = async () => {
  const competitions = [];
  try {
    const querySnapshot = await getDocs(collection(db, "competitions"));
    console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
      competitions.push({ ...doc.data(), id: doc.id });
    });
    return competitions;
  } catch (error) {
    console.log(error);
    return competitions;
  }
};

export const getSingleCompetition = async (id) => {
  try {
    const competitionRef = doc(collection(db, "competitions"), id);
    const competitionSnapshot = await getDoc(competitionRef);

    if (competitionSnapshot.exists()) {
      const competitionData = competitionSnapshot.data();
      return competitionData;
    } else {
      console.log("competition could not be found");
    }
  } catch (error) {
    console.log(error);
  }
};

export const getSinglePet = async (uid, id) => {
  try {
    const petRef = doc(collection(db, "users", uid, "pets"), id);
    const petSnapshot = await getDoc(petRef);

    if (petSnapshot.exists()) {
      const petData = petSnapshot.data();
      return petData;
    } else {
      console.log("pet couldn't be found");
    }
  } catch (error) {
    console.log(error);
  }
};

export const addPetToUserCollection = async (
  profileImg,
  name,
  breedType,
  age,
  weight,
  height,
  isVaccinated,
  uid
) => {
  try {
    const userDocRef = doc(db, "users", uid);
    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      const docRef = await addDoc(collection(db, "users", uid, "pets"), {
        img: await uploadToStorage(
          profileImg,
          `petImages/${userDocRef.id}_${Math.floor(Math.random() * 6) + 1}`
        ),
        name: name,
        breedType: breedType,
        age: age,
        weight: weight,
        height: height,
        isVaccinated: isVaccinated,
      });
      console.log("Added Pet " + docRef.id);
    } else {
      console.log("User document does not exist");
    }
  } catch (error) {
    console.log("SOME ERROR: ", error);
  }
};

export const addCompetition = async (
  bannerImg,
  name,
  description,
  address,
  city,
  age,
  breed,
  vaccinated,
  date
) => {
  const convertToUnix = () => {
    const competitionDate = date;
    return new Date(competitionDate).getTime() / 1000;
  };

  try {
    const unixTimeStamp = convertToUnix();

    const docRef = await addDoc(collection(db, "competitions"), {
      name: name,
      banner: await uploadToStorage(
        bannerImg,
        `petImages/${Math.floor(Math.random() * 6) + 1}`
      ),
      description: description,
      address: address,
      city: city,
      requirements: {
        age: age,
        breed: breed,
        vaccinated: vaccinated,
      },
      timeEnd: unixTimeStamp,
    });

    console.log(unixTimeStamp);
  } catch (err) {
    console.log("Something went wrong here: " + err);
  }
};

export const getAllPets = async (uid) => {
  const pets = [];
  try {
    const querySnapshot = await getDocs(collection(db, "users", uid, "pets"));
    console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
      pets.push({ ...doc.data(), id: doc.id });
    });
    return pets;
  } catch (error) {
    console.log(error);
    return pets;
  }
};

export const enterCompetition = async (
  name,
  competitionId,
  img,
  breedType,
  age,
  weight,
  height,
  isVaccinated,
  score,
  petOwner
) => {
  try {
    const competitionDocRef = doc(db, "competitions", competitionId);
    const competitionDocSnapshot = await getDoc(competitionDocRef);

    if (competitionDocSnapshot.exists()) {
      const docRef = await addDoc(
        collection(db, "competitions", competitionId, "entries"),
        {
          img: img,
          name: name,
          breedType: breedType,
          age: age,
          weight: weight,
          height: height,
          isVaccinated: isVaccinated,
          score: score,
          petOwner: petOwner,
        }
      );
      console.log("Entered contestant " + docRef.id);
    } else {
      console.log("Competition document does not exist");
    }
  } catch (error) {
    console.error("ERROR ENTERING PET ", error);
  }
};

export const getAllEntries = async (competitionId) => {
  const entries = [];
  try {
    const querySnapshot = await getDocs(
      collection(db, "competitions", competitionId, "entries")
    );
    console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
      entries.push({ ...doc.data(), id: doc.id });
    });
    return entries;
  } catch (error) {
    console.log(error);
    return entries;
  }
};

export const getLeaderboard = async (competitionId) => {
  const entries = [];
  try {
    const entriesCollectionRef = collection(
      db,
      "competitions",
      competitionId,
      "entries"
    );
    const querySnapshot = await getDocs(
      query(entriesCollectionRef, orderBy("score", "desc"), limit(3))
    );
    console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
      entries.push({ ...doc.data(), id: doc.id });
    });
    return entries;
  } catch (error) {
    console.log(error);
    return entries;
  }
};

export const updateEntryScoreInCompetition = async (
  competitionId,
  entryId,
  updatedScore
) => {
  try {
    const competitionRef = doc(db, "competitions", competitionId);
    const entryRef = doc(competitionRef, "entries", entryId);

    await updateDoc(entryRef, { score: updatedScore });
    console.log("Entry score updated successfully");
  } catch (error) {
    console.log("Error updating entry score:", error);
  }
};
