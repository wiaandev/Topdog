import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue_light,
  },
  inner: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 20,
    width: "100%",
  },
  competition: {
    padding: 20,
    marginBottom: 10,
  },
  competitionHeading: {
    fontFamily: "epilogueBold",
    color: colors.blue,
    fontSize: 20,
    marginBottom: 10,
  },
  address: {
    fontFamily: "epilogueRegular",
    color: colors.blue,
    fontSize: 16,
    marginBottom: 10,
  },
  time: {
    fontFamily: "epilogueRegular",
    color: colors.blue,
    fontSize: 16,
    marginBottom: 10,
  },
  subHeading: {
    fontFamily: "epilogueBold",
    fontSize: 18,
    color: colors.blue,
  },
  chipStyle: {
    marginVertical: 15,
    color: colors.blue,
    fontFamily: "epilogueRegular",
  },
});
