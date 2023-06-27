import { Platform, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 10,
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 55 : 10
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: 20,
  },
  locationIcon: {
    marginRight: 10,
  },
  subHeading: {
    color: colors.blue,
    fontSize: 14,
    fontFamily: "epilogueRegular",
  },
  heading: {
    fontSize: 20,
    fontFamily: "epilogueBold",
    color: colors.white,
  },
  headingStyle: {
    fontSize: 24,
    color: colors.blue,
    fontFamily: "epilogueBold",
    marginLeft: 10,
    marginTop: 35,
    marginBottom: 10
  },
  userContainer: {
    padding: 20,
    backgroundColor: colors.blue,
    borderRadius: 20,
    marginBottom: 30
  },
  petButton:{
    borderColor: colors.white,
    borderWidth: 1,
    width: 100,
    borderRadius: 10
  }
});
