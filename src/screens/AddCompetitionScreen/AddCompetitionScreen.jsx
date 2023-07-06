import { View, Text } from "react-native";
import React from "react";
import { styles } from "./AddCompetitionScreen.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { addCompetition } from "../../services/firebase-db";
import { colors } from "../../utils/colors";
import { GlobalStyles } from "../../utils/global.styles";
import { Input } from "@rneui/themed";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function AddCompetitionScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{ backgroundColor: colors.yellow, flex: 1, padding: 20 }}
    >
      <Text onPress={() => navigation.goBack()}> Go Back</Text>
      <Text>New Competition Time</Text>
      
      <Input
        label="Competition Name"
        placeholder="Cool Competition"
        autoCapitalize="none"
        onChangeText={""}
        value={""}
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
        onChangeText={""}
        value={""}
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
        onChangeText={""}
        value={""}
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
        onChangeText={""}
        value={""}
        errorMessage={""}
        autoCorrect={false}
        inputContainerStyle={GlobalStyles.input}
        keyboardType="default"
        labelStyle={{ fontFamily: "epilogueRegular", color: colors.blue }}
        inputStyle={{ fontFamily: "epilogueRegular" }}
      />

    </SafeAreaView>
  );
}
