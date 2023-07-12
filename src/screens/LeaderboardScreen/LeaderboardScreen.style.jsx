import { StyleSheet } from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
    //enter styles
    container: {
        backgroundColor: colors.blue,
        padding: 20,
        flex: 1
    },
    backBtn: {
        flexDirection: 'row',
        marginBottom: 20,
        gap: 10,
        alignItems: 'center',
        fontFamily: 'regular'
    }
})