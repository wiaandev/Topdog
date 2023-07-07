import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "./AddCompetitionScreen.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { addCompetition } from "../../services/firebase-db";
import { colors } from "../../utils/colors";
import { GlobalStyles } from "../../utils/global.styles";
import { Avatar, Button, Input } from "@rneui/themed";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as ImagePicker from "expo-image-picker";

export default function AddCompetitionScreen({ navigation }) {
  const defaultValues = {
    name: "",
    description: "",
    address: "",
    city: "",
    date: new Date(),
  };

  const [bannerImg, setBannerImg] = useState(null);
  const [values, setValues] = useState(defaultValues);
  const { name, description, address, city, date } = values;

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
      setBannerImg(result.assets[0].uri);
    }
    console.log(bannerImg);
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: colors.yellow, flex: 1, padding: 20 }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text onPress={() => navigation.goBack()}> Go Back</Text>
        <Text
          style={{
            fontFamily: "epilogueBold",
            textAlign: "center",
            fontSize: 24,
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          New Competition Time
        </Text>
        <Text
          style={{
            fontFamily: "epilogueBold",
            textAlign: "center",
            fontSize: 16,
            marginBottom: 20,
          }}
        >
          Add Details Below
        </Text>

        <Text style={{ fontFamily: "epilogueRegular", fontSize: 16 }}>
          Competition Banner
        </Text>
        <TouchableOpacity onPress={pickImage}>
          {bannerImg && (
            <Avatar
              size={200}
              icon={{
                name: "add",
                type: "material",
                color: colors.yellow,
              }}
              source={{ uri: bannerImg }}
              containerStyle={styles.photo}
            />
          )}
          {!bannerImg && (
            <Avatar
              size={200}
              icon={{
                name: "add",
                type: "material",
                color: colors.yellow,
              }}
              containerStyle={styles.photo}
            />
          )}
        </TouchableOpacity>

        <Input
          label="Competition Name"
          placeholder="Cool Competition"
          autoCapitalize="none"
          onChangeText={(text) => setValues({ ...values, name: text })}
          value={name}
          errorMessage={""}
          autoCorrect={false}
          containerStyle={{ marginTop: 30 }}
          inputContainerStyle={GlobalStyles.input}
          keyboardType="default"
          labelStyle={{ fontFamily: "epilogueRegular", color: colors.blue }}
          inputStyle={{ fontFamily: "epilogueRegular" }}
        />

        <Input
          label="Description"
          placeholder="What is it about?"
          autoCapitalize="none"
          onChangeText={(text) => setValues({ ...values, description: text })}
          value={description}
          errorMessage={""}
          autoCorrect={false}
          inputContainerStyle={GlobalStyles.input}
          keyboardType="default"
          labelStyle={{ fontFamily: "epilogueRegular", color: colors.blue }}
          inputStyle={{ fontFamily: "epilogueRegular" }}
        />

        <Input
          label="Address"
          placeholder="Where is it?"
          autoCapitalize="none"
          onChangeText={(text) => setValues({ ...values, address: text })}
          value={address}
          errorMessage={""}
          autoCorrect={false}
          inputContainerStyle={GlobalStyles.input}
          keyboardType="default"
          labelStyle={{ fontFamily: "epilogueRegular", color: colors.blue }}
          inputStyle={{ fontFamily: "epilogueRegular" }}
        />

        <Input
          label="City"
          placeholder="Durban"
          autoCapitalize="none"
          onChangeText={(text) => setValues({ ...values, city: text })}
          value={city}
          errorMessage={""}
          autoCorrect={false}
          inputContainerStyle={GlobalStyles.input}
          keyboardType="default"
          labelStyle={{ fontFamily: "epilogueRegular", color: colors.blue }}
          inputStyle={{ fontFamily: "epilogueRegular" }}
        />

        <DateTimePicker
          mode="datetime"
          value={date}
          onChange={(event, val) => setValues({ ...values, date: val || date })}
          style={styles.date}
          textColor={colors.white}
          accentColor={colors.blue}
        />

        <View style={{ gap: 20 }}>
          <Button
            title={"Add Competition"}
            buttonStyle={styles.button}
            onPress={() => addCompetition(bannerImg, name, description, address, city, date)}
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
      </ScrollView>
    </SafeAreaView>
  );
}
