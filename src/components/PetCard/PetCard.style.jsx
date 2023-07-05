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
        alignItems: 'flex-start',
        padding: 15,
        margin: '1%',
        gap: 5,
        backgroundColor: colors.blue_light,
        borderRadius: 10,
    },
    dogName: {
        fontFamily: 'epilogueBold',
        marginVertical: 10,
        fontSize: 20,
        color: colors.blue
    }
})