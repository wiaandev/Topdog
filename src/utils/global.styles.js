import { StyleSheet } from "react-native";
import {colors} from './colors';

export const GlobalStyles = StyleSheet.create({
  container: {
    padding: 20,
  },
  buttonPrimary: {
    backgroundColor: colors.blue,
    borderColor: colors.blue,
    borderRadius: 5,
    width: "100%",
    height: 70,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  buttonSecondary: {
    backgroundColor: colors.yellow,
    borderColor: colors.yellow,
    borderRadius: 5,
    width: "100%",
    height: 70,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  buttonTitle: {
    fontFamily: "epilogueBold",
  },
  input: {
    fontFamily: "epilogueRegular",
    backgroundColor: colors.white_dark,
    borderBottomColor: colors.white_dark,
    padding: 10,
    borderWidth: 0,
    borderColor: colors.white,
    borderRadius: 10,
    marginTop: 5,
  },
  heading: {
    fontFamily: "epilogueBold",
    fontSize: 24,
  },
  body: {
    fontFamily: 'epilogueRegular',
    fontSize: 14
  }
});
