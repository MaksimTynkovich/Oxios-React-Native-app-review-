import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {userStyles} from "../../../styles/userStyles";
import {normalize} from "../../../styles/mainStyles";
import {LinearGradient} from "expo-linear-gradient";
import i18n from '../../../MultiLanguages/i18n';
import { useTranslation } from 'react-i18next';


const CouponsPrice = ({setActivePage}) => {
    const {t, i18n}=useTranslation();
    return (
        <View style={[userStyles.modal, {paddingHorizontal: normalize(60)}]}>
            <View style={styles.prices}>
                {[1, 2, 3, 4].map((item, index) => (
                    <View key={index} style={{width: normalize(160), marginBottom: normalize(10), marginHorizontal: normalize(40)}}>
                        <TouchableOpacity
                            onPress={() => setActivePage("COUPONS_PRICE_DETAIL")}
                        >
                            <LinearGradient
                                colors={['#0FACCE', '#6CAFED']}
                                style={styles.price}
                            >
                                <Text style={styles.price__label}>
                                    {t('CouponsPrice.price')}
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <Text style={styles.price__date}>
                        {t('CouponsPrice.days')}
                        </Text>
                    </View>
                ))}
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

const styles = StyleSheet.create({
    price: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 15,
        width: normalize(160),
        height: normalize(159),
        borderRadius: 300,
        display: 'flex'
    },
    prices: {
        display: "flex",
        width: '95%',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    price__date: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: normalize(30),
        textAlign: "center",
        color: "#FFFFFF",
        marginTop: normalize(12)
    },
    price__label: {
        fontSize: normalize(33),
        lineHeight: normalize(160),
        fontWeight: "bold",
        fontFamily: "Roboto",
        color: "#fff",
        textAlign: 'center',
        alignItems: 'center'
    },
})

export default CouponsPrice;