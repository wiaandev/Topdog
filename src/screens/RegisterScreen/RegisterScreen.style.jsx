import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  //enter styles
  container: {
    backgroundColor: colors.blue,
    flex: 1,
    alignItems: "center",
  },
  icon: {
    width: 150,
    height: 150,
    marginBottom: 40,
    marginTop: 10,
  },
  label: {
    fontFamily: "epilogueRegular",
    fontWeight: 'regular',
    color: colors.white
  },
  tersiaryBtn: {
    fontFamily: "epilogueRegular",
    color: colors.white,
    marginTop: 30,
  },
  switchBtn: {
    fontFamily: "epilogueBold",
    color: colors.yellow,
  },
});
