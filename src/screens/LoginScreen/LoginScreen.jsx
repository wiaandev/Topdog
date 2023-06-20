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

export default function LoginScreen({ navigation }) {
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
        inputContainerStyle={GlobalStyles.input}
        keyboardType="password"
        labelStyle={styles.label}
        inputStyle={{ fontFamily: "epilogueRegular" }}
      />

      <Button
        title={"Log In"}
        buttonStyle={GlobalStyles.buttonPrimary}
        onPress={""}
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
