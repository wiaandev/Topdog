import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./DogsScreen.style";
import { colors } from "../../utils/colors";
import { Button, Icon } from "@rneui/themed";
import { GlobalStyles } from "../../utils/global.styles";
import { FlatList } from "react-native";
import { UserContext } from "../../context/User.context";
import { getAllPets } from "../../services/firebase-db";
import PetCard from "../../components/PetCard/PetCard";
import { useFocusEffect } from "@react-navigation/native";
import { getCurrentUser } from "../../services/firebase-auth";

export default function DogsScreen({ navigation }) {
  const { getCurrentSignedInUser } = useContext(UserContext);
  const [pets, setPets] = useState();

  const onAddPet = () => {
    navigation.navigate("AddDog");
  };

  const getPets = async () => {
    const pets = await getAllPets(getCurrentUser().uid);
    setPets(pets);
    // console.log("THIS IS IT" + pets);
  };

  useFocusEffect(
    useCallback(() => {
      getCurrentSignedInUser();
      getPets();
    }, [])
  );

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 30,
        }}
      >
        <Text onPress={navigation.goBack}>Go Back</Text>
        <Text style={styles.heading}>Your Dogs</Text>
        <Button
          title={"Add"}
          type="outline"
          icon={{ name: "add", type: "material", color: colors.blue }}
          iconRight
          titleStyle={{ fontFamily: "epilogueRegular", color: colors.blue }}
          buttonStyle={styles.addButton}
          onPress={onAddPet}
        />
      </View>
      <FlatList
        numColumns={2}
        data={pets}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => navigation.navigate("EditDog", { id: item.id })}
          >
            <PetCard
              name={item.name}
              img={item.img}
              breed={item.breedType}
              age={item.age}
              vaccinated={item.isVaccinated ? "Yes" : "No"}
            />
          </TouchableOpacity>
        )}
        bounces={false}
        ListEmptyComponent={
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              marginTop: 50,
              justifyContent: 'center'
            }}
          >
            <Text
              style={{
                fontFamily: "epilogueRegular",
                fontSize: 16,
                color: colors.blue,
              }}
            >
              No Dogs Found! Let's Fix That!
            </Text>
            <Icon
              name="dog-side-off"
              type="material-community"
              size={200}
              color={colors.blue_light}
            />
            <Button
              title={"Add"}
              buttonStyle={GlobalStyles.buttonSecondary}
              onPress={() => navigation.navigate('AddDog')}
              icon={{
                name: "add",
                type: "material",
                size: 30,
                color: colors.white,
              }}
              iconRight
              titleStyle={{
                fontFamily: "epilogueBold",
                alignItems: "center",
                justifyContent: "center",
                color: colors.white,
              }}
            />
          </View>
        }
      />
    </View>
  );
}
