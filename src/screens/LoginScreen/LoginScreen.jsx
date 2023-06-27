import {
  ScrollView,
  Image,
  Text,
  View,
  StatusBar,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "./LoginScreen.style";
import { Button, Input } from "@rneui/themed";
import { GlobalStyles } from "../../utils/global.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../utils/colors";

// 🔥 Firebase Import
import { onSignInUser } from "../../services/firebase-auth";
import { auth } from "../../config/firebase";

const defaultValues = {
  email: "",
  password: "",
};

export default function LoginScreen({ navigation }) {
  const [values, setValues] = useState(defaultValues);
  const { email, password } = values;
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const nav = useNavigation();

  useEffect(() => {
    console.log("UseEffect Running");
    const subscriber = auth.onAuthStateChanged((user) => {
      if (user) {
        nav.navigate("Home");
      }
    });
    return subscriber;
  }, []);

  const logOn = () => {
    let mailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/;
    if (email.length === "" && password === "") {
      setEmailError("Enter an email");
      setPasswordError("Enter a password");
    } else if (!email.match(mailRegex) && !password.match(passRegex)) {
      setEmailError("Email is incorrect! Try Again");
      setPasswordError("Password is incorrect! Try again");
    } else {
      onSignInUser(email, password);
    }
  };

  return (
    <SafeAreaView style={[GlobalStyles.container, styles.container]}>
      <StatusBar />
      <Image source={require("../../../assets/icon.png")} style={styles.icon} />

      <Text style={[GlobalStyles.heading, styles.loginHeading]}>
        Yay, you're back
      </Text>

      <Input
        label="Email"
        placeholder="cool-owner@dog.com"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text) =>
          setValues({
            ...values,
            email: text,
          })
        }
        value={email}
        errorMessage={emailError}
        containerStyle={{ marginTop: 30 }}
        inputContainerStyle={GlobalStyles.input}
        keyboardType="email-address"
        labelStyle={styles.label}
        inputStyle={{ fontFamily: "epilogueRegular" }}
      />

      <Input
        label="Password"
        placeholder="strongLik3Hu5ky"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        onChangeText={(text) =>
          setValues({
            ...values,
            password: text,
          })
        }
        value={password}
        errorMessage={passwordError}
        inputContainerStyle={GlobalStyles.input}
        keyboardType="password"
        labelStyle={styles.label}
        inputStyle={{ fontFamily: "epilogueRegular" }}
      />

      <Button
        title={"Log In"}
        buttonStyle={GlobalStyles.buttonPrimary}
        onPress={logOn}
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
        }}
      />

      <Text style={styles.tersiaryBtn}>New to Topdog?</Text>
      <Pressable onPress={() => navigation.navigate("Register")}>
        <Text style={styles.switchBtn}>Sign Up</Text>
      </Pressable>

      <Image
        source={require("../../../assets/login.png")}
        style={styles.image}
      />
    </SafeAreaView>
  );
}
