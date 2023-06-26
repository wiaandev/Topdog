import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.yellow,
    borderRadius: 10,
    marginVertical: 10,
    margin: 5,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
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
    fontFamily: "bold",
    color: colors.blue,
    fontSize: 20,
    marginBottom: 10,
  },
  address: {
    fontFamily: "regular",
    color: colors.blue_dark,
    fontSize: 16,
    marginBottom: 10,
  },
  time: {
    fontFamily: "regular",
    color: colors.white,
    fontSize: 16,
    marginBottom: 10,
  },
  subHeading: {
    fontFamily: "bold",
    fontSize: 18,
    color: colors.blue,
  },
  chipStyle: {
    marginVertical: 15,
    color: colors.blue,
    fontFamily: "regular",
  },
});
