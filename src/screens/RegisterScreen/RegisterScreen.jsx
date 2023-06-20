import { View, Text, Image, ScrollView, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { GlobalStyles } from "../../utils/global.styles";
import { styles } from "./RegisterScreen.style";
import { Button, Input } from "@rneui/themed";
import { colors } from "../../utils/colors";

export default function RegisterScreen({navigation}) {
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
          autoCorrect={false}
          secureTextEntry={true}
          inputContainerStyle={GlobalStyles.input}
          labelStyle={styles.label}
          inputStyle={{ fontFamily: "epilogueRegular" }}
        />

        <Button
          title={"Register"}
          buttonStyle={GlobalStyles.buttonSecondary}
          onPress={() => navigation.navigate("Home")}
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
            color: colors.blue
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
