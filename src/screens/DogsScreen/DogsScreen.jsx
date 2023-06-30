import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./DogsScreen.style";
import { colors } from "../../utils/colors";
import { Button, Icon } from "@rneui/themed";
import { GlobalStyles } from "../../utils/global.styles";
import { FlatList } from "react-native";
import { UserContext } from "../../context/User.context";
import { getAllPets } from "../../services/firebase-db";
import PetCard from "../../components/PetCard/PetCard";

export default function DogsScreen({ navigation }) {
  const { pets, getCurrentSignedInUser } = useContext(UserContext);
  console.log(pets);

  const onAddPet = () => {
    navigation.navigate("AddDog");
  };

  useEffect(() => {
    getCurrentSignedInUser();
  }, []);

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
        renderItem={({ item }) => {
          console.log("Rendering item:", item);

          return (
            <PetCard
              name={item.name}
              img={item.img}
              breed={item.breedType}
              age={item.age}
              vaccinated={item.vaccinated}
            />
          );
        }}
      />
    </View>
  );
}
