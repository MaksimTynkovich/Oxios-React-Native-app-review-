import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from "react-native";

function HomeScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Text>Home Screen</Text>
            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.3}
                onPress={() => navigation.navigate("ChangeLanguage")}>
                <Text style={styles.button__label}>2. go to Lang</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.3}
                onPress={() => navigation.navigate("Login")}>
                <Text style={styles.button__label}>3. go to Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.3}
                onPress={() => navigation.navigate("Subscribe")}>
                <Text style={styles.button__label}>
                    4. go to Subscribe
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.3}
                onPress={() => navigation.navigate("SubscribeDetail")}>
                <Text style={styles.button__label}>
                    5. go to SubscribeDetail
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.3}
                onPress={() => navigation.navigate("MainScreen")}>
                <Text style={styles.button__label}>6. go to Main Menu</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.3}
                onPress={() => navigation.navigate("SelectCategory")}>
                <Text style={styles.button__label}>7. go to Select Category</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.3}
                onPress={() => navigation.navigate("CourseList")}>
                <Text style={styles.button__label}>7.1. go to Course List</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.3}
                onPress={() => navigation.navigate("SoundList")}>
                <Text style={styles.button__label}>7.1. go to Sound List</Text>
            </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.3}
            onPress={() => navigation.navigate("AdvancedPlayer")}>
            <Text style={styles.button__label}>8. go to Advanced Player</Text>
          </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.3}
                onPress={() => navigation.navigate("UserScreen")}>
                <Text style={styles.button__label}>9. go to User Screen</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        marginTop: 5,
        backgroundColor: '#1791a5',
        padding: 5,
        zIndex: 100
    },
    button__label: {
        color: 'white',
        fontSize: 15
    }
});

export default HomeScreen;
