import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.yellow,
    flex: 1,
    alignItems: "center",
  },
  loginHeading: {
    color: colors.blue,
    alignSelf: "flex-start",
  },
  icon: {
    width: 150,
    height: 150,
    marginBottom: 40,
    marginTop: 10
  },
  label: {
    fontFamily: 'epilogueRegular',
    fontWeight: 'regular',
    color: colors.blue
  },
  image: {
    width: 300,
    height: 400,
    alignSelf: "center",
  },
  tersiaryBtn: {
    fontFamily: "epilogueRegular",
    color: colors.blue,
    marginTop: 30,
  },
  switchBtn: {
    fontFamily: "epilogueBold",
    color: colors.blue,
  },
});
