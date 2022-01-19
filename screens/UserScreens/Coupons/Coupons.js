import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { userStyles } from "../../../styles/userStyles";
import { normalize } from '../../../styles/mainStyles'
import CouponsPrice from "./CouponsPrice";
import CouponsDetail from "./CouponsDetail";
import i18n from '../../../MultiLanguages/i18n';
import { useTranslation } from 'react-i18next';


const Coupons = () => {

    const {t, i18n}=useTranslation();

    const Cards = [
        "Beauty&Health Pack", "Salon Pack", "Advanced Pack",
        "Beauty&Health Pack", "Salon Pack", "Advanced Pack",
        "Beauty&Health Pack", "Salon Pack", "Advanced Pack",
        "Beauty&Health Pack", "Salon Pack", "Advanced Pack",
        "Beauty&Health Pack", "Salon Pack", "Advanced Pack",
    ]

    const [activePage, setActivePage] = useState("COUPONS")

    return (
        <ScrollView style={{ width: '100%' }}>
        <View style={[userStyles.container]}>
            <Text style={[userStyles.title, { paddingBottom: normalize(23) }]}>{t('Coupons.title')}</Text>

            {activePage === "COUPONS" && (
                
                    <View style={styles.cards}>
                        {Cards.map((card, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[styles.card]}
                                onPress={() => setActivePage("COUPONS_PRICE")}
                            >
                                <Text style={styles.card__text}>
                                    {card}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
           
            )}

            {activePage === "COUPONS_PRICE" && <CouponsPrice setActivePage={setActivePage} />}
            {activePage === "COUPONS_PRICE_DETAIL" && <CouponsDetail setActivePage={setActivePage} />}
        </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    card__text: {
        fontSize: normalize(25),
        color: '#A7EEDD',
        textAlign: 'center',
        paddingHorizontal: normalize(35)
    },
    card: { 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: normalize(220),
        height: normalize(133),
        borderRadius: normalize(13),
        backgroundColor: "#25847E",
        paddingHorizontal: normalize(5),
        marginVertical: normalize(10),
    },
    cards: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
        paddingBottom: 50,
    }
})

export default Coupons;