import {
  Text,
  View,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useSyncExternalStore } from "react";
import { styles } from "./AddDogScreen.style";
import { Button, CheckBox, Input } from "@rneui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar } from "@rneui/themed";
import { colors } from "../../utils/colors";
import * as ImagePicker from "expo-image-picker";
import { addPetToUserCollection } from "../../services/firebase-db";
import { getCurrentUser } from "../../services/firebase-auth";

const defaultValues = {
  name: "",
  breedType: "",
  age: 0,
  weight: 0,
  height: 0,
};

const AddDogScreen = ({ navigation }) => {
  const [checked, setChecked] = useState(false);
  const [profileImg, setProfileImg] = useState(null);
  const [values, setValues] = useState(defaultValues);
  const { name, breedType, age, weight, height } = values;
  const uid = getCurrentUser().uid;
  console.log(uid);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });
    console.log(result);
    if (!result.canceled) {
      setProfileImg(result.assets[0].uri);
    }
    console.log(profileImg);
  };

  const onAddPet = () => {
    addPetToUserCollection(
      profileImg,
      values.name,
      values.breedType,
      values.age,
      values.weight,
      values.height,
      checked,
      uid
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>Add Your Pet</Text>

          <TouchableOpacity onPress={pickImage}>
            {profileImg && (
              <Avatar
                size={200}
                rounded
                icon={{
                  name: "add-a-photo",
                  type: "material",
                  color: colors.white,
                }}
                source={{ uri: profileImg }}
                containerStyle={styles.photo}
              />
            )}
            {!profileImg && (
              <Avatar
                size={200}
                rounded
                icon={{
                  name: "add-a-photo",
                  type: "material",
                  color: colors.white,
                }}
                containerStyle={styles.photo}
              />
            )}
          </TouchableOpacity>

          <Input
            label="Name"
            placeholder="Enter..."
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => setValues({ ...values, name: text })}
            value={name}
            labelStyle={{
              fontFamily: "epilogueRegular",
              fontWeight: "epilogueRegular",
              color: colors.blue,
            }}
            inputStyle={{ fontFamily: "epilogueRegular" }}
            inputContainerStyle={styles.input}
            errorMessage={""}
          />

          <Input
            label="Breed Type"
            placeholder="Enter..."
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => setValues({ ...values, breedType: text })}
            value={breedType}
            labelStyle={{
              fontFamily: "epilogueRegular",
              fontWeight: "epilogueRegular",
              color: colors.blue,
            }}
            inputStyle={{ fontFamily: "epilogueRegular" }}
            inputContainerStyle={styles.input}
            containerStyle={{ marginVertical: 10 }}
          />

          <Input
            label="Age (Years Old)"
            placeholder="Enter..."
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="numeric"
            onChangeText={(text) => setValues({ ...values, age: text })}
            value={age}
            labelStyle={{
              fontFamily: "epilogueRegular",
              fontWeight: "epilogueRegular",
              color: colors.blue,
            }}
            inputStyle={{ fontFamily: "epilogueRegular" }}
            inputContainerStyle={styles.input}
            containerStyle={{ marginVertical: 10 }}
          />

          <Input
            label="Weight (kg)"
            placeholder="Enter..."
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => setValues({ ...values, weight: text })}
            value={weight}
            labelStyle={{
              fontFamily: "epilogueRegular",
              fontWeight: "epilogueRegular",
              color: colors.blue,
            }}
            inputStyle={{ fontFamily: "epilogueRegular" }}
            inputContainerStyle={styles.input}
            containerStyle={{ marginVertical: 10 }}
          />

          <Input
            label="Height (cm)"
            placeholder="Enter..."
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => setValues({ ...values, height: text })}
            value={height}
            labelStyle={{
              fontFamily: "epilogueRegular",
              fontWeight: "regepilogueRegularular",
              color: colors.blue,
            }}
            inputStyle={{ fontFamily: "epilogueRegular" }}
            inputContainerStyle={styles.input}
            containerStyle={{ marginVertical: 10 }}
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
              title={"Add Pet"}
              buttonStyle={styles.button}
              onPress={onAddPet}
              titleStyle={{ fontFamily: "epilogueBold" }}
            />
            <Button
              title={"Cancel"}
              type="outline"
              buttonStyle={styles.buttonOutline}
              onPress={() => navigation.goBack()}
              titleStyle={{ fontFamily: "epilogueBold", color: colors.blue }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddDogScreen;
