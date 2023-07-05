import { StyleSheet } from "react-native";
import React from "react";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.yellow,
    color: colors.blue,
    gap: 10,
    width: 200,
    fontFamily: 'epilogueBold',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10
  },
  countdownCritical: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    width: 230,
    backgroundColor: "salmon",
    color: colors.white,
    borderRadius: 10,
    fontFamily: "epilogueBold",
    padding: 10,
    marginVertical: 10,
  },
  countdown: {
    fontFamily: 'epilogueBold',
    fontSize: 18,
    color: colors.blue
  }
});
