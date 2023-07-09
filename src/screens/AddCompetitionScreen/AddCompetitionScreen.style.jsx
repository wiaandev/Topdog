import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {},
  label: {
    fontFamily: "epilogueRegular",
    color: colors.white,
  },
  photo: {
    width: "100%",
    backgroundColor: colors.yellow_light,
    borderRadius: 10,
  },
  button: {
    backgroundColor: colors.blue,
    borderColor: colors.blue,
    borderRadius: 5,
    width: "100%",
    height: 70,
  },
  buttonOutline: {
    borderColor: colors.blue,
    borderWidth: 1,
    borderRadius: 5,
    width: "100%",
    height: 70,
  },
  date:{
    alignSelf: 'center',
    marginBottom: 20
  },
  checkboxContainer: {
    backgroundColor: colors.white_dark,
    borderRadius: 10,
    padding: 15,
    marginBottom: 30,
  },
  checkboxTextStyle: {
    color: colors.blue,
    fontFamily: "epilogueRegular",
    fontWeight: "epilogueRegular",
  },
});
