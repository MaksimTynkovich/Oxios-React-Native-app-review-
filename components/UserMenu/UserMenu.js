import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {normalize} from "../../styles/mainStyles";
import {userStyles} from "../../styles/userStyles";
import {BackButtonUser} from "../../components/BackButtonUserScreen/BackButtonUser";
import {useNavigation} from "@react-navigation/native";
import {HistoryIcon, InfoIcon, PencilIcon, TicketIcon} from '../Icons/Icons'
import {Ionicons} from "@expo/vector-icons";
import i18n from '../../MultiLanguages/i18n';
import { useTranslation } from 'react-i18next';


const UserScreen = ({activeItem, setActiveItem}) => {
    const [pressedItem, setPressedItem] = useState(0)
    const {t, i18n}=useTranslation();
    const navigation = useNavigation()
    const menuItems = [
        {
            icon: <InfoIcon />,
            itemName: "MY_PAGE",
            text: t('UserMenu.info')
        },
        {
            icon: <TicketIcon />,
            itemName: "COUPONS",
            text: t('UserMenu.coupons')
        },
        {
            icon: <HistoryIcon />,
            itemName: "HISTORY",
            text: t('UserMenu.history')
        },
        {
            icon: <PencilIcon />,
            itemName: "SUGGESTIONS",
            text: t('UserMenu.suggestion')
        }
    ]


    return (
        <View style={styles.menu}>
            <View style={styles.menu__header}>
                <BackButtonUser/>
                <Text style={{...userStyles.title, color: '#fff'}}>{t('UserMenu.menu')}</Text>
            </View>

            <View style={styles.menu__items}>
                {menuItems.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[styles.menu__item, index === pressedItem ? {} : {}]}
                        onPress={() => setActiveItem(item.itemName)}
                    >
                        {item.icon}
                        <Text
                            style={[styles.menu__item__text, activeItem === item.itemName ? {color: "#BAFFFB"} : {color: "#64C8C2"}]}
                        >
                            {item.text}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.menu__exit}>
                <TouchableOpacity style={styles.menu__item} onPress={() => navigation.navigate('Home')}>
                    <Ionicons name="exit-outline" size={42} color="#64C8C2"/>
                    <Text style={styles.menu__item__text}>{t('UserMenu.exit')}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    menu__exit: {
        marginTop: normalize(100)
    },
    menu__item__text: {
        color: "#64C8C2",
        fontSize: normalize(33),
        fontWeight: "bold",
        marginLeft: normalize(20)
    },
    menu__item__icon: {
        width: normalize(50),
        display: "flex",
        textAlign: "center"
    },
    menu__item: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: normalize(29),
    },
    menu__items: {
        marginTop: normalize(36),
    },
    menu__header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: normalize(186)
    },
    menu: {
        width: '100%',
        height: '100%',
        backgroundColor: "#25847E",

        paddingTop: normalize(48),
        paddingLeft: normalize(58),

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 10.30,
        elevation: 20,
    }
})


export default UserScreen;