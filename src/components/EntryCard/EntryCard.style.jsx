import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    borderRadius: 10,
    padding: 20,
    gap: 10,
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginBottom: 20
  },
  entryCardHeading: {
    fontFamily: "epilogueBold",
    color: colors.white,
    fontSize: 20,
  },
  entryCardBreed: {
    fontFamily: "epilogueRegular",
    fontSize: 16,
    color: colors.white,
  },
  entryCardAge: {
    fontFamily: "epilogueRegular",
    fontSize: 14,
    color: colors.white,
  },
  input: {
    width: 80,
    borderBottomWidth: 3,
    borderColor: colors.white,
  },
  column: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    marginRight: 10,
  },
  score: {
    fontFamily: 'caveat',
    color: colors.yellow,
    fontSize: 48
  },
  maxScore: {
    fontFamily: "caveat",
    fontSize: 60,
    color: colors.white,
    alignSelf: "center",
  },
  enterButton: {
    backgroundColor: colors.yellow,
    borderColor: colors.blue,
    borderRadius: 5,
    width: "100%",
    height: 70,
    marginBottom: 10,
  },
  heading: {
    fontFamily: 'epilogueBold',
    color: colors.white,
    fontSize: 20
  },
  subHeading: {
    fontFamily: 'epilogueRegular',
    color: colors.white
  }
});