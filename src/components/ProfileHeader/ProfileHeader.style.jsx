import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.white_dark,
      padding: 15,
    },
    headerContent: {
        alignItems: 'center',
        gap: 20
    },
    profileImg: {
      marginHorizontal: 20
    },
    username: {
      fontFamily: 'epilogueBold',
      color: colors.blue,
      fontSize: 26
    }
  });
  