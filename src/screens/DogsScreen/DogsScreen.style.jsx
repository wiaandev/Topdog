import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  heading: {
    fontSize: 24,
    color: colors.blue,
    fontFamily: "epilogueBold",
  },
  grid: {
    flex: 2,
    marginHorizontal: "auto",
    width: 400,
    backgroundColor: "green",
  },
  addButton: {
    borderColor: colors.blue,
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
  },
  cardContainer: {
    width: "49%",
    margin: "1%",
    borderRadius: 10,
  },
});
