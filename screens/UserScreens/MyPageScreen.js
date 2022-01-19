import React from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView} from "react-native";
import {normalize} from "../../styles/mainStyles";
import {userStyles} from "../../styles/userStyles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import i18n from '../../MultiLanguages/i18n';
import { useTranslation } from 'react-i18next';


const MyPageScreen = () => {
    const {t, i18n}=useTranslation();
    return (
<KeyboardAwareScrollView>
        <View style={[userStyles.container, {paddingHorizontal: normalize(100)}]}>
            <Text style={[userStyles.title, {marginBottom: normalize(10)}]}>{t('MyPageScreen.title')}</Text>

            <View style={styles.inputs}>
                <View style={styles.input}>
                    <Text style={styles.input__label}>
                        {t('MyPageScreen.name')}
                    </Text>
                    <TextInput
                        style={styles.input__form}
                    />
                </View>
                <View style={styles.input}>
                    <Text style={styles.input__label}>
                    {t('MyPageScreen.date')}
                    </Text>
                    <TextInput
                        style={styles.input__form}
                    />
                </View>
                <View style={styles.input}>
                    <Text style={styles.input__label}>
                    {t('MyPageScreen.mail')}
                    </Text>
                    <TextInput
                        style={styles.input__form}
                    />
                    
                </View>
                <View style={styles.input}>
                    <Text style={styles.input__label}>
                    {t('MyPageScreen.phone')}
                    </Text>
                    <TextInput
                        style={styles.input__form}
                    />
                </View>
                
                <View style={styles.input}>
                    <Text style={styles.input__label}>
                    {t('MyPageScreen.address')}
                    </Text>
                    <TextInput
                        style={styles.input__form}
                    />
                </View>
                <View style={styles.input}>
                    <Text style={styles.input__label}>
                    {t('MyPageScreen.blood')}
                    </Text>
                    <TextInput
                        style={styles.input__form}
                    />
                </View>
            </View>


            <TouchableOpacity style={styles.button}>
                <Text style={styles.button__label}>{t('MyPageScreen.save')}</Text>
            </TouchableOpacity>
            
        </View>
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    button__label: {
        textAlign: 'center',
        fontSize: normalize(28),
        lineHeight: normalize(64),
        color: '#fff',
    },
    button: {
        width: normalize(234),
        height: normalize(64),
        backgroundColor: '#6DAA90',
        borderRadius: normalize(45),
        marginTop: normalize(26),
    },
    input__form: {
        width: '100%',
        height: normalize(57),
        borderWidth: 2,
        borderRadius: normalize(13),
        borderColor: 'rgba(189, 212, 211, 0.48)',
        backgroundColor: '#fff',
        paddingHorizontal: normalize(20),

        color: '#000',
        fontSize: normalize(22),
        fontWeight: "500"
    },
    input__label: {
        color: '#25847E',
        fontSize: normalize(20),
    },
    input: {
        marginTop: normalize(6),
    },
    inputs: {
        width: '100%',
    }
})

export default MyPageScreen;