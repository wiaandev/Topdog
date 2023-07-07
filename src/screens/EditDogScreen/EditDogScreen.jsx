import { View, Text } from "react-native";
import React, { useCallback, useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./EditDogScreen.style";
import { getSinglePet } from "../../services/firebase-db";
import { getCurrentUser } from "../../services/firebase-auth";
import { useFocusEffect } from "@react-navigation/native";
import { colors } from "../../utils/colors";
import { Avatar, Image } from "@rneui/themed";

export default function EditDogScreen({ navigation, route }) {
  console.log("EDIT DOG RUNNING");
  const { id } = route.params;
  console.log("PET ID", id);

  console.log("USER ID", getCurrentUser().uid);

  const [petData, setPetData] = useState(null);

  const getCurrentPet = useCallback(async () => {
    try {
      const pet = await getSinglePet(getCurrentUser().uid, id);
      console.log(pet);
      setPetData(pet);
    } catch (error) {
      console.log("Error retrieving pet:", error);
    }
  }, [id]);

  useEffect(() => {
    getCurrentPet();
  }, [getCurrentPet]);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.yellow_light, padding: 20 }}
    >
      <Text onPress={() => navigation.navigate("AllDogs")}>Go Back</Text>
      {petData && (
        <Avatar
          size={200}
          rounded
          icon={{
            name: "pets",
            type: "material",
            color: colors.white,
          }}
          source={{ uri: petData.img }}
          containerStyle={styles.photo}
        />
      )}
      <View style={styles.petInformation}>
        <Text style={styles.heading}>{petData && petData.name}</Text>
        <Text style={styles.informationBreed}>
          The {petData && petData.breedType}
        </Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 10,
            marginBottom: 10,
          }}
        >
          <View
            style={{
              backgroundColor: colors.blue_light,
              borderRadius: 10,
              width: "33.3%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.information}>
              {petData && petData.height} cm
            </Text>
          </View>

          <View
            style={{
              backgroundColor: colors.blue_light,
              borderRadius: 10,
              width: 100,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.information}>
              {petData && petData.weight} kg
            </Text>
          </View>
          <View
            style={{
              backgroundColor: colors.blue_light,
              borderRadius: 10,
              width: 100,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.information}>
              {petData && petData.age} year(s) old
            </Text>
          </View>
          <View
            style={{
              backgroundColor: colors.blue_light,
              borderRadius: 10,
              width: 100,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {petData && petData.isVaccinated ? (
              <Text style={styles.information}>
                {petData && petData.name} is vaccinated
              </Text>
            ) : (
              <Text style={styles.information}>
                {petData && petData.name} is not vaccinated
              </Text>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
