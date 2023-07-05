import { View, Text } from "react-native";
import React from "react";
import { styles } from "./Timer.style";
import { Icon } from "@rneui/themed";
import { colors } from "../../utils/colors";

export default function Timer({ countdown }) {
  return (
    <View
      style={countdown.hours == 0 ? styles.countdownCritical : styles.container}
    >
      {countdown.hours == 0 ? <Icon type="material" name="warning" color={colors.blue}/> : ""}
      <Text style={styles.countdown}>
        {countdown.hours}{" "}
        <Text style={{ fontFamily: "epilogueRegular" }}>H</Text>
      </Text>
      <Text style={styles.countdown}>:</Text>
      <Text style={styles.countdown}>
        {countdown.minutes}{" "}
        <Text style={{ fontFamily: "epilogueRegular" }}>M</Text>
      </Text>
      <Text style={styles.countdown}>:</Text>
      <Text style={styles.countdown}>
        {countdown.seconds}{" "}
        <Text style={{ fontFamily: "epilogueRegular" }}>S</Text>
      </Text>
    </View>
  );
}
