import { View, Text, Image, ScrollView, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { GlobalStyles } from "../../utils/global.styles";
import { styles } from "./RegisterScreen.style";
import { Button, Input, CheckBox } from "@rneui/themed";
import { colors } from "../../utils/colors";

import { onRegisterNewUser } from "../../services/firebase-auth";

//define our defaultValues
const defaultValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function RegisterScreen({ navigation }) {
  //useStates
  const [values, setValues] = useState(defaultValues);
  const { username, email, password, confirmPassword } = values;

  // useState for our checkbox
  const [checked, setChecked] = useState(false);

  //error UI useStates
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [conPasswordError, setConPasswordError] = useState("");

  //function to register our new user and add them to the Cloud Firestore and to the authentication
  const onRegister = () => {
    //if check if fields are empty
    if (!username && !email && !password && !confirmPassword) {
      setUsernameError("Enter your name");
      setEmailError("Enter your email");
      setPasswordError("Enter your password");
      setConPasswordError("Confirm your password");
      return;
    } else {
      onRegisterNewUser(username, email, password, checked);
    }
  };

  //function to toggle the checkbox
  onToggleChecked = () => {
    setChecked(!checked);
  };

  return (
    <ScrollView>
      <SafeAreaView style={[GlobalStyles.container, styles.container]}>
        <Image
          source={require("../../../assets/icon.png")}
          style={styles.icon}
        />
        <Text style={[GlobalStyles.heading, { color: colors.white }]}>
          Topdog
        </Text>
        <Text style={[GlobalStyles.heading, { color: colors.yellow }]}>
          Register
        </Text>

        <Input
          label="Username"
          placeholder="CoolDog45"
          autoCapitalize="none"
          onChangeText={(formValue) =>
            setValues({ ...values, username: formValue })
          }
          value={username}
          errorMessage={usernameError}
          autoCorrect={false}
          containerStyle={{ marginTop: 30 }}
          inputContainerStyle={GlobalStyles.input}
          keyboardType="default"
          labelStyle={styles.label}
          inputStyle={{ fontFamily: "epilogueRegular" }}
        />

        <Input
          label="Email"
          placeholder="cool-owner@dog.com"
          autoCapitalize="none"
          onChangeText={(formValue) =>
            setValues({ ...values, email: formValue })
          }
          value={email}
          errorMessage={emailError}
          autoCorrect={false}
          inputContainerStyle={GlobalStyles.input}
          keyboardType="email-address"
          labelStyle={styles.label}
          inputStyle={{ fontFamily: "epilogueRegular" }}
        />

        <Input
          label="Password"
          placeholder="strongLik3Hu5ky"
          autoCapitalize="none"
          onChangeText={(formValue) =>
            setValues({ ...values, password: formValue })
          }
          value={password}
          errorMessage={passwordError}
          autoCorrect={false}
          secureTextEntry={true}
          inputContainerStyle={GlobalStyles.input}
          labelStyle={styles.label}
          inputStyle={{ fontFamily: "epilogueRegular" }}
        />

        <Input
          label="Confirm Password"
          placeholder="strongLik3Hu5ky"
          autoCapitalize="none"
          onChangeText={(formValue) =>
            setValues({ ...values, confirmPassword: formValue })
          }
          value={confirmPassword}
          errorMessage={conPasswordError}
          autoCorrect={false}
          secureTextEntry={true}
          inputContainerStyle={GlobalStyles.input}
          labelStyle={styles.label}
          inputStyle={{ fontFamily: "epilogueRegular" }}
        />

        <CheckBox
          checked={checked}
          checkedColor={colors.yellow}
          containerStyle={styles.checkboxContainer}
          onIconPress={() => setChecked(!checked)}
          onPress={() => console.log("onPress()")}
          size={30}
          textStyle={styles.checkboxTextStyle}
          title="I am a judge"
          titleProps={{}}
          uncheckedColor={colors.yellow}
        />

        <Button
          title={"Register"}
          buttonStyle={GlobalStyles.buttonSecondary}
          onPress={onRegister}
          icon={{
            name: "chevron-right",
            type: "material",
            size: 30,
            color: colors.blue,
          }}
          iconRight
          iconContainerStyle={{ marginLeft: 10 }}
          titleStyle={{
            fontFamily: "epilogueBold",
            alignItems: "center",
            justifyContent: "center",
            color: colors.blue,
          }}
        />

        <Text style={styles.tersiaryBtn}>Have an account?</Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={styles.switchBtn}>Log In</Text>
        </Pressable>
      </SafeAreaView>
    </ScrollView>
  );
}
