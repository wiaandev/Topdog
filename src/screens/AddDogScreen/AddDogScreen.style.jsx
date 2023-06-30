import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  heading: {
    fontFamily: "epilogueBold",
    fontSize: 36,
    color: colors.blue,
    textAlign: "center",
  },
  photo: {
    marginVertical: 30,
    backgroundColor: colors.blue,
    alignSelf: "center",
  },
  input: {
    fontFamily: "epilogueRegular",
    backgroundColor: colors.white_dark,
    padding: 5,
    borderWidth: 0,
    borderColor: colors.white,
    borderRadius: 10,
    marginTop: 3,
  },
  button: {
    backgroundColor: colors.blue,
    borderColor: colors.blue,
    borderRadius: 5,
    width: "100%",
    height: 70
  },
  buttonOutline: {
    borderColor: colors.blue,
    borderWidth: 1,
    borderRadius: 5,
    width: "100%",
    height: 70
  },
});
