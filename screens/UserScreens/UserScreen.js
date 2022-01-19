import React, {useState} from 'react';
import {StyleSheet, View} from "react-native";
import UserMenu from "../../components/UserMenu/UserMenu";
import Coupons from "./Coupons/Coupons";
import MyPageScreen from "./MyPageScreen";
import PurchaseHistory from "./PurchaseHistory";
import Suggestions from "./Suggestions/Suggestions";


const UserScreen = () => {
    const [activeItem, setActiveItem] = useState("MY_PAGE")

    return (
        <View style={{display: 'flex', flexDirection: 'row'}}>
            <View style={styles.menu__container}>
                <UserMenu setActiveItem={setActiveItem} activeItem={activeItem} />
            </View>

            <View style={styles.main__container}>
                {activeItem === "MY_PAGE" && <MyPageScreen />}
                {activeItem === "COUPONS" && <Coupons />}
                {activeItem === "HISTORY" && <PurchaseHistory />}
                {activeItem === "SUGGESTIONS" && <Suggestions />}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main__container: {
        height: '100%',
        width: '67%',
    },
    menu__container: {
        width: '33%'
    }
})


export default UserScreen;