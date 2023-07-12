import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  FlatList,
  Modal,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { checkIsJudge, getCurrentUser } from "../../services/firebase-auth";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserContext } from "../../context/User.context";
import {
  enterCompetition,
  getAllEntries,
  getAllPets,
  getSingleCompetition,
  updateEntryScoreInCompetition,
} from "../../services/firebase-db";
import { LinearGradient } from "expo-linear-gradient";
import { Button, Chip, Divider, Icon } from "@rneui/themed";
import { colors } from "../../utils/colors";
import { styles } from "./CompetitionDetailScreen.style";
import { auth } from "../../config/firebase";
import { GlobalStyles } from "../../utils/global.styles";
import PetCard from "../../components/PetCard/PetCard";
import EntryCard from "../../components/EntryCard/EntryCard";

export default function CompeititonDetailScreen({ navigation, route }) {
  const { id } = route.params;

  const [competitionData, setCompetitionData] = useState();
  const [entries, setEntries] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [pets, setPets] = useState();
  const { getCurrentSignedInUser } = useContext(UserContext);
  const [isTapped, setIsTapped] = useState(false);
  const [score, setScore] = useState(0);

  const defaultValues = {
    name: "",
    age: "",
    breedType: "",
    height: "",
    weight: "",
    img: "",
    vaccinated: false,
    score: 0,
    petOwner: "",
  };

  const [values, setValues] = useState(defaultValues);

  const selectPet = (item) => {
    setValues({
      ...values,
      name: item.name,
      age: item.age,
      breedType: item.breedType,
      height: item.height,
      weight: item.weight,
      img: item.img,
      vaccinated: item.isVaccinated,
      score: 0,
      petOwner: getCurrentUser().uid,
    });
    setIsTapped(true);
    console.log(values);
  };

  enterDogInCompetition = () => {
    enterCompetition(
      values.name,
      id,
      values.img,
      values.breedType,
      values.age,
      values.weight,
      values.height,
      values.vaccinated,
      values.score,
      values.petOwner
    );
  };

  const getCurrentCompetition = useCallback(async () => {
    try {
      const competition = await getSingleCompetition(id);
      console.log(competition);
      setCompetitionData(competition);
    } catch (error) {}
  }, [id]);

  const onRetrieveEntries = async () => {
    const entries = await getAllEntries(id);
    setEntries(entries);
    console.log(entries);
  };

  const onRetrievePets = async () => {
    const allPets = await getAllPets(getCurrentUser().uid);
    setPets(allPets);
  };

  const [isJudge, setIsJudge] = useState(false);

  useEffect(() => {
    getCurrentCompetition();
    getCurrentSignedInUser();
    onRetrieveEntries();
    onRetrievePets();

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);

        checkIsJudge(uid)
          .then((result) => {
            setIsJudge(result);
          })
          .catch((error) => {
            console.log("Error checking if user is judge:", error);
            setIsJudge(false);
          });
      } else {
        setIsJudge(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [getCurrentCompetition]);

  console.log(competitionData);

  const bannerImg = { uri: competitionData && competitionData.banner };

  const toggleOverlay = () => {
    setModalVisible(!modalVisible);
    setIsTapped(false);
  };

  function onScoreChange(newValue) {
    // setScore((items) => [...items, score])
    console.log(newValue);
    setScore(newValue);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Text
          onPress={navigation.goBack}
          style={{
            marginVertical: 20,
            fontFamily: "epilogueRegular",
            color: colors.blue,
          }}
        >
          Go Back
        </Text>
        <ImageBackground
          source={competitionData && bannerImg}
          resizeMode="cover"
          style={{
            width: "100%",
            height: 280,
            borderRadius: 10,
            marginBottom: 20,
            overflow: "hidden",
          }}
        >
          <LinearGradient
            colors={["#14213D00", "#14213D"]}
            style={{ width: "100%", height: "100%" }}
          >
            <Text style={styles.competitionHeading}>
              {competitionData && competitionData.name}
            </Text>
            <Button
              title={"View Leaderboard"}
              icon={{
                name: "leaderboard",
                type: "material",
                size: 15,
                color: "white",
              }}
              onPress={() => navigation.navigate("Leaderboard", { id: id })}
              buttonStyle={{ backgroundColor: colors.yellow }}
            />
          </LinearGradient>
          {/* <GoProButton /> */}
        </ImageBackground>
        <Text style={styles.description}>
          {competitionData && competitionData.description}
        </Text>
        <Text style={styles.subheading}>Requirements</Text>
        <View style={styles.chipContainer}>
          <Chip
            title={
              competitionData && competitionData?.requirements?.breed + " Breed"
            }
            containerStyle={styles.chipStyle}
            color={colors.yellow}
          />
          <Chip
            title={
              competitionData &&
              competitionData?.requirements?.age + "< Years Old"
            }
            containerStyle={styles.chipStyle}
            color={colors.yellow}
          />
          <Chip
            title={
              competitionData && competitionData?.requirements?.isVaccinated
                ? "Vaccinated"
                : "Not Vaccinated"
            }
            containerStyle={styles.chipStyle}
            color={colors.yellow}
          />
        </View>
        {!isJudge && (
          <Button
            title={"Enter Competition"}
            buttonStyle={GlobalStyles.buttonPrimary}
            onPress={toggleOverlay}
            iconContainerStyle={{ marginLeft: 10 }}
            titleStyle={{
              fontFamily: "epilogueBold",
              alignItems: "center",
              justifyContent: "center",
              color: colors.white,
            }}
          />
        )}

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text>Choose your dog</Text>
              <FlatList
                data={pets}
                style={styles.petList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                  if (item.breedType === competitionData?.requirements?.breed) {
                    return (
                      <TouchableOpacity
                        onPress={() => selectPet(item)}
                        style={[isTapped && styles.tappedPet]}
                      >
                        <PetCard
                          name={item.name}
                          img={item.img}
                          breed={item.breedType}
                          age={item.age}
                          vaccinated={item.isVaccinated ? "Yes" : "No"}
                        />
                      </TouchableOpacity>
                    );
                  } else {
                    return null;
                  }
                }}
                ListEmptyComponent={<Text>You have no pets</Text>}
              />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={enterDogInCompetition}
              >
                <Text style={styles.textStyle}>Enter Competition</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        {isJudge && (
          <>

            <Text style={{fontFamily: 'epilogueBold', fontSize: 24}}>Our entries</Text>

            <FlatList
              data={entries}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <EntryCard
                    name={item.name}
                    img={item.img}
                    breedType={item.breedType}
                    age={item.age}
                    score={item.score}
                    id={item.id}
                    setScore={setScore}
                    sendScore={() =>
                      updateEntryScoreInCompetition(
                        id,
                        item.id,
                        parseInt(score)
                      )
                    }
                    onChangeText={onScoreChange}
                  />
                );
              }}
              keyExtractor={(item) => item.id}
              ListEmptyComponent={
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 50,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "epilogueRegular",
                      fontSize: 18,
                      color: colors.blue,
                    }}
                  >
                    No Entries Yet
                  </Text>
                  <Icon
                    name="no-dogs"
                    type="foundation"
                    size={300}
                    color={colors.blue_light}
                  />
                </View>
              }
            />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
