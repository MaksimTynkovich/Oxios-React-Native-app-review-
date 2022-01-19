import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import {userStyles} from "../../../styles/userStyles";
import {normalize} from "../../../styles/mainStyles";
import {LinearGradient} from "expo-linear-gradient";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import {CheckBox} from "react-native-elements";
import styled from "styled-components/native/dist/styled-components.native.esm";
import i18n from '../../../MultiLanguages/i18n';
import { useTranslation } from 'react-i18next';

const CouponsDetail = ({setActivePage}) => {
    const [checked, setChecked] = useState(false)
    const {t, i18n}=useTranslation();
    return (
        <View style={userStyles.modal}>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{display: 'flex', alignItems: 'center', width: '25%'}}>
                    <TouchableOpacity>
                        <LinearGradient
                            colors={['#0FACCE', '#6CAFED']}
                            style={styles.price}
                        >
                            <Text style={styles.price__label}>
                            {t('CouponsDetail.price')}
                            </Text>
                            <Text style={styles.price__date}>
                            {t('CouponsDetail.days')}
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <SubscribeButton disabled={checked === false} canClick={checked} style={styles.subscribe}>
                        <SubscribeButtonText canClick={checked} style={{...styles.subscribe__text}}>
                        {t('CouponsDetail.btn')}
                        </SubscribeButtonText>
                    </SubscribeButton>
                </View>

                <View style={{width: '67%'}}>
                    <Text style={styles.title}>{t('CouponsDetail.title')}</Text>
                    <Text style={styles.subtitle}>{t('CouponsDetail.subtitle')}</Text>
                    <View style={styles.list}>
                        <Text style={styles.list__item}>
                        {t('CouponsDetail.rules1')}
                        </Text>
                        <Text style={styles.list__item}>
                        {t('CouponsDetail.rules2')}
                        </Text>
                        <Text style={styles.list__item}>
                        {t('CouponsDetail.rules3')}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.checkbox}>
                <CheckBox
                    uncheckedIcon={
                        <MaterialCommunityIcons
                            name="checkbox-blank-outline"
                            size={normalize(47)}
                            color="#77B9E3"
                        />
                    }
                    checkedIcon={
                        <MaterialCommunityIcons
                            name="checkbox-marked"
                            size={normalize(47)}
                            color="#77B9E3"/>
                    }
                    checked={checked}
                    onPress={() => setChecked(prev => !prev)}
                    tintColors={{true: '#F15927', false: 'black'}}
                />
                <Text style={styles.checkbox__label}>
                {t('CouponsDetail.rules_accept')}
                </Text>
            </View>
            <TouchableOpacity
                onPress={() => setActivePage("COUPONS")}
                style={{position: 'absolute', right: 10, top: 10}}
            >
                <Ionicons name="close-circle-outline" size={42} color="#8BCCBD"/>
            </TouchableOpacity>
        </View>
    );
};

const SubscribeButton = styled.TouchableOpacity`
  background-color: ${props => props.canClick ? "#3AD6CC" : "#35948E"};
`

const SubscribeButtonText = styled.Text`
  color: ${props => props.canClick ? "#fff" : "#60C0BA"}
`

const styles = StyleSheet.create({
    subscribe__text: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: normalize(19),
        lineHeight: normalize(53)
    },
    subscribe: {
        width: normalize(174),
        height: normalize(53),
        borderRadius: normalize(61),
        marginTop: normalize(20)
    },
    checkbox__label: {
        color: '#fff',
        fontSize: normalize(24),
        width: normalize(461)
    },
    checkbox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    list__item: {
        fontSize: normalize(21),
        color: '#fff',
        marginVertical: normalize(14),
    },
    subtitle: {
        fontWeight: 'bold',
        fontSize: normalize(23),
        marginVertical: normalize(15),
        color: '#fff',
    },
    title: {
        fontWeight: 'bold',
        fontSize: normalize(31),
        color: '#fff',
    },
    price: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,
        elevation: 23,
        width: normalize(160),
        height: normalize(159),
        borderRadius: 300,
        display: 'flex',
        justifyContent: 'center',
    },
    prices: {
        display: "flex",
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        backgroundColor: '#000',
    },
    price__date: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: normalize(30),
        textAlign: "center",
        color: "#FFFFFF",
        marginTop: normalize(12),
        display: 'flex'
    },
    price__label: {
        fontSize: normalize(33),
        fontWeight: "bold",
        fontFamily: "Roboto",
        color: "#fff",
        textAlign: 'center',
        alignItems: 'center'
    },
})

export default CouponsDetail;