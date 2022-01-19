import {normalize} from "./mainStyles";
import {StyleSheet} from "react-native";


export const userStyles = StyleSheet.create({
    title: {
        fontSize: normalize(40),
        lineHeight: normalize(46),
        fontWeight: 'bold',
        color: "#25847E"
    },
    container: {
        paddingVertical: normalize(40),
        paddingHorizontal: normalize(50),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    modal: {
        width: '90%',
        backgroundColor: "#25847E",
        borderRadius: 20,
        padding: 35,
        display: 'flex',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    }
})