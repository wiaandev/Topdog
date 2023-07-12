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
    gap: 5,
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
  overlayView: {
    height: "100%",
    width: "100%",
    position: "absolute",
    backgroundColor: "rgba(0, 204, 0, 0.5)",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(20,33,61,0.5)",
    alignItems: "center",
    marginVertical: Platform.OS === "ios" ? 70 : 70,
  },
  modalView: {
    backgroundColor: colors.white,
    borderRadius: 20,
    width: 300,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    flexWrap: "wrap",
    flex: 1,
  },

  tappedPet: {
    // Style to apply when the pet item is tapped
    backgroundColor: "limegreen",
    padding: 5,
    borderRadius: 10
    // Add any other desired styles
  }
});
