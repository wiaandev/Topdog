import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {},
  petInformation: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 10,
  },
  photo: {
    marginVertical: 10,
    backgroundColor: colors.blue,
    alignSelf: "center",
  },
  heading: {
    fontFamily: 'epilogueBold',
    fontSize: 24,
    color: colors.blue
  },
  information: {
    fontFamily: 'epilogueRegular',
    fontSize: 14,
    padding: 10,   
    color: colors.blue,
    textAlign: 'center'
  },
  informationBreed: {
    fontFamily: 'epilogueRegular',
    fontSize: 16,
    marginVertical: 10,
    color: "#6d7d99",
    marginBottom: 20
  },
  warning:{
    fontFamily: 'epilogueBold',
    fontSize: 16,
    backgroundColor: 'salmon',
    color: colors.white,
    padding: 10,
    borderRadius: 10,
    width: "60%"
  },
  success: {
    fontFamily: 'epilogueBold',
    fontSize: 16,
    backgroundColor: '#90EE90',
    color: colors.blue,
    padding: 10,
    borderRadius: 10,
    width: "60%"
  }
});
