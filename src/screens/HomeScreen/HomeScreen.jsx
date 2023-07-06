import {
  Text,
  View,
  Pressable,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState, useContext } from "react";
import {
  Avatar,
  Button,
  ButtonGroup,
  Divider,
  Icon,
  Input,
} from "@rneui/themed";
import { colors } from "../../utils/colors";
import CompetitionCard from "../../components/CompetitionCard/CompetitionCard";
import { styles } from "./HomeScreen.style";
import * as Location from "expo-location";
import { GlobalStyles } from "../../utils/global.styles";
import { auth } from "../../config/firebase";

// Location Import

import { CompetitionContext } from "../../context/Competition.context";
import { UserContext } from "../../context/User.context";
import { Skeleton } from "@rneui/themed";
import { addCompetition } from "../../services/firebase-db";
import { checkIsJudge, getCurrentUser } from "../../services/firebase-auth";

const HomeScreen = ({ navigation }) => {
  // const competitions = useContext(CompetitionContext);
  const { loggedInUser, getCurrentSignedInUser, address } =
    useContext(UserContext);

  const competitions  = useContext(CompetitionContext);
  console.log(competitions);

  const [isJudge, setIsJudge] = useState(false);

  useEffect(() => {
    getCurrentSignedInUser();

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


  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={styles.location}>
            <Icon
              name="location-on"
              color={colors.white}
              size={40}
              style={styles.locationIcon}
            />
            <View>
              <Text
                style={{ fontFamily: "epilogueBold", color: colors.white_dark }}
              >
                Your Location
              </Text>
              <Text style={styles.heading}>{address}</Text>
            </View>
          </View>
          <View>
            <Pressable onPress={() => navigation.navigate("Profile")}>
              <Avatar
                source={{ uri: loggedInUser.photoURL }}
                size={50}
                rounded
                containerStyle={{ alignSelf: "center" }}
              />
              <Text
                style={{
                  fontFamily: "epilogueRegular",
                  color: colors.white,
                  textAlign: "center",
                }}
              >
                {loggedInUser.displayName}
              </Text>
            </Pressable>
          </View>
        </View>
        {!isJudge && (
          <>
            <Divider color={colors.white} style={{ marginVertical: 15 }} />
            <Button
              buttonStyle={styles.petButton}
              type="outline"
              title={"Pets"}
              icon={{
                name: "pets",
                type: "material",
                size: 15,
                color: "white",
              }}
              titleStyle={{
                fontFamily: "epilogueRegular",
                color: colors.white,
                alignSelf: "center",
              }}
              iconContainerStyle={{
                alignSelf: "center",
                marginRight: 5,
                justifyContent: "center",
              }}
              onPress={() => navigation.navigate("AllDogs")}
            />
          </>
        )}
      </View>
      <Input
        placeholder="Search Competitions..."
        leftIcon={{ type: "material", name: "search" }}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text) => setSearchTerm(text)}
      />
      <Text style={styles.headingStyle}>Nearby Competitions</Text>
      
      <FlatList
        data={competitions}
        // numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("CDetail", { id: item.id })
            }
          >
            <CompetitionCard heading={item.name} address={item.address} banner={item.banner} countdown={item.timeEnd}/>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
      
      {isJudge && (
        <>
          <Pressable onPress={() => navigation.navigate("AddCompetition")}>
            <View
              style={{
                alignItems: "center",
                backgroundColor: colors.white,
                padding: 15,
                borderRadius: 10,
                borderColor: colors.blue,
                borderWidth: 1,
              }}
            >
              <Icon name="add" type="material" color={colors.blue} />
              <Text
                style={{
                  fontFamily: "epilogueBold",
                  color: colors.blue,
                  fontSize: 20,
                }}
              >
                {" "}
                Add Competition
              </Text>
            </View>
          </Pressable>
        </>
      )}
    </View>
  );
};

export default HomeScreen;
