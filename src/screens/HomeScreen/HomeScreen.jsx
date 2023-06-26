import {
  Text,
  View,
  Pressable,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState, useContext } from "react";
import { Avatar, Button, ButtonGroup, Divider, Icon, Input } from "@rneui/themed";
import { colors } from "../../utils/colors";
import CompetitionCard from "../../components/CompetitionCard/CompetitionCard";
import { styles } from "./HomeScreen.style";
import * as Location from "expo-location";
import { GlobalStyles } from "../../utils/global.styles";

// Location Import

import { CompetitionContext } from "../../context/Competition.context";
import { UserContext } from "../../context/User.context";
import { Skeleton } from "@rneui/themed";
import { addCompetition } from "../../services/firebase-db";
import { getCurrentUser } from "../../services/firebase-auth";

const HomeScreen = ({ navigation }) => {
  // const competitions = useContext(CompetitionContext);
  const { loggedInUser, getCurrentSignedInUser, address } =
    useContext(UserContext);

  useEffect(() => {
    getCurrentSignedInUser();
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
                source={require("../../../assets/icon.png")}
                size={50}
                rounded
              />
              <Text
                style={{ fontFamily: "epilogueRegular", color: colors.white }}
              >
                {loggedInUser.displayName}
              </Text>
            </Pressable>
          </View>
        </View>
        <Divider  color={colors.white} style={{marginVertical: 15}}/>
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
          titleStyle={{fontFamily: 'epilogueRegular', color: colors.white, alignSelf: 'center'}}
          iconContainerStyle={{alignSelf: 'center', marginRight: 5, justifyContent: 'center'}}
        />
      </View>
      <Input
        placeholder="Search Competitions..."
        leftIcon={{ type: "material", name: "search" }}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text) => setSearchTerm(text)}
      />
      <Text style={styles.headingStyle}>Nearby Competitions</Text>
      {/* <Text style={styles.headingStyle}>{loggedInUser}</Text> */}
      {/* 
      <FlatList
        data={competitions}
        // numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("CompetitionDetail", { id: item.id })
            }
          >
            <CompetitionCard heading={item.name} address={item.address} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      /> */}
    </View>
  );
};

export default HomeScreen;
