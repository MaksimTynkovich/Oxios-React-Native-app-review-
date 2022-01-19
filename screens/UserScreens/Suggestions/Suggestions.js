import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import {userStyles} from "../../../styles/userStyles";
import {normalize, windowHeight} from "../../../styles/mainStyles";
import Svg, {Path, Polygon} from "react-native-svg";
import MessagesForm from "./MessagesForm";
import i18n from '../../../MultiLanguages/i18n';
import { useTranslation } from 'react-i18next';

const Suggestions = () => {

    const [score, setScore] = useState(0)
    const [page, setPage] = useState("DEFAULT")
    const {t, i18n}=useTranslation();
    const [openKeyBoard, setOpenKeyBoard] = useState(false)

    return (
        <View style={[userStyles.container, {paddingTop: 40, backgroundColor: "#f2f2f2"}]}>
            <Text style={{...userStyles.title}}>{t('Suggestions.title')}</Text>
            {!openKeyBoard && <View style={styles.stars}>
                {[1, 2, 3, 4, 5].map((item, index) => (
                    <TouchableOpacity
                        onPress={() => setScore(index + 1)}
                        key={index}
                    >
                        <Svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 300 275" version="1.1">
                        <Polygon fill={index + 1 <= score ? "#EEA942" : ""}stroke="orange" strokeWidth="6" color="orange" points="150,25 179,111 269,111 197,165  223,251 150,200 77,251 103,165 31,111 121,111"/>
                        </Svg>
                   

                    </TouchableOpacity>
                ))}
            </View>}

            {page === "DEFAULT" &&
            <View style={{width: '100%', display: 'flex', alignItems: 'center'}}>
                <Text style={[userStyles.title, {fontSize: normalize(30), marginBottom: normalize(28)}]}>
                {t('Suggestions.subtitle')}
                </Text>

                <TouchableOpacity onPress={() => setPage("MESSAGE")} style={styles.button}>
                    <Text style={styles.button__label}>{t('Suggestions.btn1')}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setPage("DEFAULT")}
                                  style={[styles.button, {backgroundColor: '#6CAFED'}]}>
                    <Text style={styles.button__label}>{t('Suggestions.btn2')}</Text>
                </TouchableOpacity>
            </View>}

            {page === "MESSAGE" && <MessagesForm openKeyBoard={openKeyBoard} setOpenKeyBoard={setOpenKeyBoard}/>}

        </View>
    );
};

const styles = StyleSheet.create({

    button__label: {
        fontSize: normalize(24),
        color: "#FFFFFF"
    },
    button: {
        width: normalize(315),
        height: normalize(64),
        backgroundColor: "#6DAA90",
        borderRadius: normalize(53),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: normalize(12)
    },
    stars: {
        width: normalize(490),
        height: normalize(74),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: normalize(75),
        marginVertical: normalize(30),
        backgroundColor: "#fafbfb",
        borderRadius: 8,
        borderTopWidth: 0.2,
        borderRightWidth: 0.2,
        borderLeftWidth: 0.2,
        borderBottomWidth: 0.2,
        borderColor: '#3E6F75',
    }
})

export default Suggestions;
