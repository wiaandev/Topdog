import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    img: {
        aspectRatio: 1,
        width:'100%',
        flex: 1,
        borderRadius: 10,
    },
    container: {
        width: '48%',
        alignItems: 'center',
        padding: 15,
        margin: '1%'
    },
    dogName: {
        fontFamily: 'regular',
        marginVertical: 10,
        color: colors.blue
    }
})