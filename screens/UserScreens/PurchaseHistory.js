import React from 'react';
import {Text, View, StyleSheet, ScrollView} from "react-native";
import {userStyles} from "../../styles/userStyles";
import {normalize} from "../../styles/mainStyles";
import i18n from './../../MultiLanguages/i18n';
import { useTranslation } from 'react-i18next';

const PurchaseHistory = () => {
    const {t, i18n}=useTranslation();
    return (
        <View style={userStyles.container}>
            <Text style={[userStyles.title, {paddingBottom: normalize(20)}]}>{t('PurchaseHistory.header_title')}</Text>
                <View style={styles.table}>
                    <View style={styles.table__element}>
                        <Text style={styles.text__header}>{t('PurchaseHistory.header_date')}</Text>
                        <Text style={styles.text__header}>{t('PurchaseHistory.header_name')}</Text>
                        <Text style={styles.text__header}>{t('PurchaseHistory.header_duration')}</Text>
                        <Text style={styles.text__header}>{t('PurchaseHistory.header_price')}</Text>
                    </View>
                    <ScrollView style={{width: '100%'}}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((item, index) => (
                        <View key={index} style={{
                            ...styles.table__element,
                            backgroundColor: index % 2 == 0 ? "#D9E7E6" : "#FAFFFF"
                        }}>
                            <Text style={[styles.text]}>25/01/2020</Text>
                            <Text style={styles.text}>{t('PurchaseHistory.name')}</Text>
                            <Text style={styles.text}>{t('PurchaseHistory.duration')}</Text>
                            <Text style={styles.text}>{t('PurchaseHistory.price')}</Text>
                        </View>
                    ))}
                    </ScrollView>
                </View>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: normalize(20),
        color: '#000',
        width: '25%',
        textAlign: 'center'
    },
    text__header: {
        fontSize: normalize(20),
        color: '#fff',
        width: '25%',
        textAlign: 'center'
    },
    table__element: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#25847E',
        paddingVertical: normalize(12),
    },
    table: {
        marginTop: normalize(20),
        marginBottom: 50,
        borderRadius: normalize(46),
        overflow: "hidden",
    },
})

export default PurchaseHistory;
