import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native'
import Svg, {Path} from "react-native-svg";
import {BoxShadow} from 'react-native-shadow';


const NextButton = () => {
    return (
        <TouchableOpacity activeOpacity={0.3} style={styles.button}>
            <Svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M19.9062 2.625L36.7812 19.5L19.9062 36.375V27.9375H4.4375C4.06454 27.9375 3.70685 27.7893 3.44313 27.5256C3.17941 27.2619 3.03125 26.9042 3.03125 26.5312V12.4688C3.03125 12.0958 3.17941 11.7381 3.44313 11.4744C3.70685 11.2107 4.06454 11.0625 4.4375 11.0625H19.9062V2.625Z" stroke="#E3FFF8" stroke-width="4.41964" stroke-linecap="round" stroke-linejoin="round"/>
            </Svg>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 88,
        height: 88,
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
        zIndex: 100
    }
})

export default NextButton;