import { View, Text, ScrollView, ImageBackground } from "react-native";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { getCurrentUser } from "../../services/firebase-auth";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserContext } from "../../context/User.context";
import { getSingleCompetition } from "../../services/firebase-db";
import { LinearGradient } from "expo-linear-gradient";
import { Button, Chip } from "@rneui/themed";
import { colors } from "../../utils/colors";
import { styles } from "./CompetitionDetailScreen.style";

export default function CompeititonDetailScreen({ navigation, route }) {
  const { id } = route.params;

  const [competitionData, setCompetitionData] = useState();

  const getCurrentCompetition = useCallback(async () => {
    try {
      const competition = await getSingleCompetition(id);
      console.log(competition);
      setCompetitionData(competition);
    } catch (error) {}
  }, [id]);

  useEffect(() => {
    getCurrentCompetition();
  }, [getCurrentCompetition]);

  console.log(competitionData);

  const bannerImg = {uri: competitionData && competitionData.banner}


  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <Text onPress={navigation.goBack}>Go Back</Text>
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
            <Text style={styles.competitionHeading}>{competitionData && competitionData.name}</Text>
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
        <Text style={styles.description}>{competitionData && competitionData.description}</Text>
        <Text style={styles.subheading}>Requirements</Text>
        <View style={styles.chipContainer}>
          <Chip
            title={competitionData && competitionData?.requirements?.breed + " Breed"}
            containerStyle={styles.chipStyle}
            color={colors.yellow}
          />
          <Chip
            title={competitionData && competitionData?.requirements?.age + " Old"}
            containerStyle={styles.chipStyle}
            color={colors.yellow}
          />
          <Chip
            title={
              competitionData && competitionData?.requirements?.vaccinated
                ? "Vaccinated"
                : "Not Vaccinated"
            }
            containerStyle={styles.chipStyle}
            color={colors.yellow}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
