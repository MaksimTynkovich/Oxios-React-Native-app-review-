import React, {useEffect} from 'react'
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {
  LoginScreen,
  ChangeLanguageScreen,
  HomeScreen,
  SubscribeScreen,
  SelectCategory,
  SubscribeDetailScreen,
  CourseList,
  SoundList,
  MainScreen,
  UserScreen
} from "./screens";
import AdvancedPlayer from "./screens/AdvancedPlayer/AdvancedPlayer";
import {connect, Provider} from "react-redux";
import store from "./redux/store";
import {loadUserData} from "./redux/auth/auth-thunks";
import AppLoading from "expo-app-loading";

const Stack = createStackNavigator();

let App = (props) => {
  useEffect(() => {
    props.loadUserData()
  }, [])
  return (
    <>
      {props.token !== '' ? <NavigationContainer>
        <Stack.Navigator>
          {/*<Stack.Screen*/}
          {/*  options={{headerShown: false}}*/}
          {/*  name="Home"*/}
          {/*  component={HomeScreen}*/}
          {/*/>*/}
          <Stack.Screen
            options={{headerShown: false}}
            name="ChangeLanguage"
            component={ChangeLanguageScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="SelectCategory"
            component={SelectCategory}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Subscribe"
            component={SubscribeScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="SubscribeDetail"
            component={SubscribeDetailScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="CourseList"
            component={CourseList}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="SoundList"
            component={SoundList}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="MainScreen"
            component={MainScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="UserScreen"
            component={UserScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="AdvancedPlayer"
            component={AdvancedPlayer}
          />
        </Stack.Navigator>
      </NavigationContainer> : <AppLoading />}
    </>
  );
}

const mapStateToProps = (state) => ({
  token: state.authReducer.token
})

App = connect(mapStateToProps, {loadUserData})(App)

const AppWrapper = () => {
  return <Provider store={store}>
    <App/>
  </Provider>
}

export default AppWrapper
