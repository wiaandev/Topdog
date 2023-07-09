import { View, Text, ScrollView } from "react-native";
import React, { useCallback, useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./EditDogScreen.style";
import { getSinglePet, updateDogInfo } from "../../services/firebase-db";
import { getCurrentUser } from "../../services/firebase-auth";
import { useFocusEffect } from "@react-navigation/native";
import { colors } from "../../utils/colors";
import { Avatar, Button, CheckBox, Divider, Image, Input } from "@rneui/themed";
import { GlobalStyles } from "../../utils/global.styles";

export default function EditDogScreen({ navigation, route }) {
  console.log("EDIT DOG RUNNING");
  const { id } = route.params;
  console.log("PET ID", id);

  console.log("USER ID", getCurrentUser().uid);

  const [petData, setPetData] = useState(null);

  const [name, setName] = useState();
  const [breed, setBreed] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [checked, setChecked] = useState();

  const getCurrentPet = useCallback(async () => {
    try {
      const pet = await getSinglePet(getCurrentUser().uid, id);
      console.log(pet);
      setPetData(pet);
      setName(pet.name);
      setBreed(pet.breedType);
      setHeight(pet.height);
      setWeight(pet.weight);
      setAge(pet.age);
      setChecked(pet.isVaccinated);
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
      <ScrollView>
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

        <Divider color={colors.blue} width={1} style={{ marginVertical: 30 }} />

        <Text
          style={{
            fontFamily: "epilogueBold",
            color: colors.blue,
            marginBottom: 20,
            fontSize: 20,
          }}
        >
          Edit Info
        </Text>
        <Input
          label="Name"
          placeholder="Which breeds are allowed?"
          autoCapitalize="none"
          onChangeText={(text) => setName(text)}
          value={name}
          errorMessage={""}
          autoCorrect={false}
          inputContainerStyle={GlobalStyles.input}
          keyboardType="default"
          labelStyle={{ fontFamily: "epilogueRegular", color: colors.blue }}
          inputStyle={{ fontFamily: "epilogueRegular" }}
          disabled
          disabledInputStyle={{ opacity: 0.3 }}
        />

        <Input
          label="Breed"
          placeholder="Which breeds are allowed?"
          autoCapitalize="none"
          onChangeText={(text) => setBreed(text)}
          value={breed}
          errorMessage={""}
          autoCorrect={false}
          inputContainerStyle={GlobalStyles.input}
          keyboardType="default"
          labelStyle={{ fontFamily: "epilogueRegular", color: colors.blue }}
          inputStyle={{ fontFamily: "epilogueRegular" }}
        />

        <Input
          label="Height (in cm)"
          placeholder="Which breeds are allowed?"
          autoCapitalize="none"
          onChangeText={(text) => setHeight(text)}
          value={height}
          errorMessage={""}
          autoCorrect={false}
          inputContainerStyle={GlobalStyles.input}
          keyboardType="default"
          labelStyle={{ fontFamily: "epilogueRegular", color: colors.blue }}
          inputStyle={{ fontFamily: "epilogueRegular" }}
        />

        <Input
          label="Weight (in KG)"
          placeholder="Which breeds are allowed?"
          autoCapitalize="none"
          onChangeText={(text) => setWeight(text)}
          value={weight}
          errorMessage={""}
          autoCorrect={false}
          inputContainerStyle={GlobalStyles.input}
          keyboardType="default"
          labelStyle={{ fontFamily: "epilogueRegular", color: colors.blue }}
          inputStyle={{ fontFamily: "epilogueRegular" }}
        />

        <Input
          label="Age"
          placeholder="Which breeds are allowed?"
          autoCapitalize="none"
          onChangeText={(text) => setAge(text)}
          value={age}
          errorMessage={""}
          autoCorrect={false}
          inputContainerStyle={GlobalStyles.input}
          keyboardType="default"
          labelStyle={{ fontFamily: "epilogueRegular", color: colors.blue }}
          inputStyle={{ fontFamily: "epilogueRegular" }}
        />

        <CheckBox
          checked={checked}
          checkedColor={colors.blue}
          containerStyle={{
            backgroundColor: "transparent",
            marginBottom: 30,
          }}
          onIconPress={() => setChecked(!checked)}
          onPress={() => console.log("onPress()")}
          size={30}
          textStyle={{
            color: colors.blue,
            fontFamily: "epilogueRegular",
            fontWeight: "epilogueRegular",
          }}
          title="Vaccinated"
          titleProps={{}}
          uncheckedColor={colors.blue}
        />

        <View style={{ gap: 20 }}>
          <Button
            title={"Update"}
            buttonStyle={GlobalStyles.buttonPrimary}
            onPress={() =>
              updateDogInfo(
                getCurrentUser().uid,
                id,
                name,
                breed,
                height,
                weight,
                age,
                checked
              ).then(() => {
                navigation.goBack()
              })
            }
            icon={{
              name: "chevron-right",
              type: "material",
              size: 30,
              color: colors.white,
            }}
            iconRight
            iconContainerStyle={{ marginLeft: 10 }}
            titleStyle={{
              fontFamily: "epilogueBold",
              alignItems: "center",
              justifyContent: "center",
              color: colors.white,
            }}
          />

          <Button
            title={"Cancel"}
            type="outline"
            buttonStyle={styles.buttonOutline}
            onPress={() => navigation.goBack()}
            titleStyle={{ fontFamily: "epilogueBold", color: colors.blue }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
