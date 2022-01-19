import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native'
import Svg, {Path} from "react-native-svg";
import {useNavigation} from '@react-navigation/native';
import {normalize} from "react-native-elements";

export const BackButtonUser = () => {

    const navigation = useNavigation()
    return (
        <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.3}
            style={styles.button}
        >
            <Svg width='30' height='30' viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path
                    d="M21.0938 39.375L4.21875 22.5L21.0938 5.625L21.0938 14.0625L36.5625 14.0625C36.9355 14.0625 37.2931 14.2107 37.5569 14.4744C37.8206 14.7381 37.9688 15.0958 37.9688 15.4688L37.9688 29.5312C37.9688 29.9042 37.8206 30.2619 37.5569 30.5256C37.2931 30.7893 36.9355 30.9375 36.5625 30.9375L21.0938 30.9375L21.0938 39.375Z"
                    stroke="#E3FFF8" stroke-width="4.41964" stroke-linecap="round" stroke-linejoin="round"/>
            </Svg>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: normalize(44),
        height: normalize(44),
        backgroundColor: '#6DAA90',
        shadowColor: "#000",
        shadowOffset: {
            width: 12,
            height: 15,
        },
        shadowOpacity: 0.95,
        shadowRadius: 7.84,
        elevation: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 500,
        zIndex: 100,
    }
})