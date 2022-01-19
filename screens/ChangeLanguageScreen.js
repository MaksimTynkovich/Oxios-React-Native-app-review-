import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Platform,
  PixelRatio,
  TouchableOpacity,
  Image,
  ImageBackground, ScrollView
} from "react-native";
import Background from "../components/Background";
import styled from 'styled-components/native'
import {Ionicons} from '@expo/vector-icons';
import {normalize} from "../styles/mainStyles";
import i18n from '../MultiLanguages/i18n'
import {useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ChangeLanguageScreen = ({navigation}) => {

  // const updateDeviceLanguage = async (language) => {
  //     try {
  //       AsyncStorage.setItem('language', language);
  //     } catch (e) {

  //     }
  //   }

  const {t, i18n} = useTranslation();
  const language = [
    {
      src: require('../assets/ChangeLanguage/Japan.jpg'),
      name: '日本語',
      type: 'jp'
    },
    {
      src: require('../assets/ChangeLanguage/canada.png'),
      name: 'English',
      type: 'en'
    },
    {
      src: require('../assets/ChangeLanguage/germany.png'),
      name: 'Deutsche',
      type: 'de'
    },
    {
      src: require('../assets/ChangeLanguage/Norway.png'),
      name: 'English',
      type: 'en'
    },
    {
      src: require('../assets/ChangeLanguage/polsha.png'),
      name: 'Polskie',
      type: 'pl'
    },
    {
      src: require('../assets/ChangeLanguage/Ukraine.png'),
      name: 'Український',
      type: 'ua'
    },
  ]

  const changeLanguageBtn = (type) => {
    navigation.navigate('Login');
    i18n.changeLanguage(type)
  }

  return (
    <Background>

        <View style={styles.container}>
          <Text style={styles.title}>
            {t('ChangeLanguageScreen.ChooseLang')}
          </Text>
          <ScrollView >
          <Selects style={styles.buttons}>
            {language.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button}
                onPress={() => changeLanguageBtn(item.type)}
              >
                <Image
                  style={styles.image}
                  source={item.src}
                />
                <Text style={{textAlign: "center", color: "#fff", fontWeight: "bold", marginTop: 10, marginRight: 25}}>{item.name}</Text>
              </TouchableOpacity>

            ))}
          </Selects>
          </ScrollView>
          <View style={styles.button__close}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
            >
              <Ionicons name="close-circle-outline" size={60} color="#8BCCBD"/>
            </TouchableOpacity>
          </View>
        </View>

    </Background>
  );


};


const Selects = styled.View`

`


const {width: windowWidth, height: windowHeight} = Dimensions.get("window")

const getPixel = (size) => {
  return PixelRatio.getPixelSizeForLayoutSize(size)
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth,
    height: windowHeight,
    marginBottom: 200
  },
  title: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: "600",
    color: '#FFF',
    fontSize: normalize(50)
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: getPixel(400),
    marginTop: 50,
  },
  button: {
    marginHorizontal: getPixel(5),
    marginVertical: getPixel(20),
    width: getPixel(115),
    height: getPixel(115),
    borderRadius: 500,
  },
  image: {
    width: getPixel(100),
    height: getPixel(100),
    flex: 1,
    borderRadius: 100,
    resizeMode: 'cover',
  },
  button__close: {
    height: 90,
    width: 90,
    position: "absolute",
    top: 20,
    right: 0,
  },
});

export default ChangeLanguageScreen;
