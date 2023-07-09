import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  //enter styles
  container: {
    backgroundColor: colors.white,
    padding: 10,
    flex: 1,
    paddingTop: Platform.OS === "android" ? 30 : 30,
    width: "100%",
  },
  competitionHeading: {
    display: "flex",
    position: "absolute",
    bottom: 10,
    flexDirection: "row",
    // marginTop: 10,
    color: colors.white,
    padding: 10,
    fontSize: 30,
    fontFamily: "epilogueBold",
    justifyContent: "flex-start",
    alignContent: "center",
    alignItems: "flex-end",
  },
  countdownStyle: {
    fontFamily: "epilogueBold",
    color: colors.yellow,
    position: "absolute",
    left: 10,
    bottom: 15,
  },
  chipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    marginBottom: 50,
    gap: 5
  },
  description: {
    fontFamily: "epilogueRegular",
    color: colors.blue,
    lineHeight: 20,
  },
  subheading: {
    fontFamily: "epilogueBold",
    fontSize: 18,
    color: colors.blue,
    marginTop: 20,
  },
});
