import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground, TextInput, ScrollView} from "react-native";
import {mainStyles, normalize, windowWidth} from "../styles/mainStyles";
import HeaderPlayer from "../components/HeaderPlayer/HeaderPlayer";
import Svg, {G, Path} from "react-native-svg";
import i18n from '../MultiLanguages/i18n';
import { useTranslation } from 'react-i18next';
import {connect} from "react-redux";
import {getSoundInfo} from "../redux/subscribtion/subscription-thunks";

const SoundList = ({courseInfo, ...props}) => {
  const {t, i18n}=useTranslation();
  const [pressedItem, setPressedItem] = useState(null)
  const sounds = [
    '350 ELECTRIC BODY',
    '350 ELECTRIC BODY',
    '350 ELECTRIC BODY',
    '350 ELECTRIC BODY',
    '148 AURA DESTORITION BODY',
    '350 ELECTRIC BODY',
    '350 ELECTRIC BODY',
    '350 ELECTRIC BODY',
    '350 ELECTRIC BODY',
    '350 ELECTRIC BODY',
  ]
  return (
    <ImageBackground source={require('../assets/ChangeLanguage/background.png')} style={mainStyles.background__image}>
      <View style={[mainStyles.container, {paddingVertical: 0, alignItems: 'flex-start'}]}>
        <HeaderPlayer/>
        <View style={[mainStyles.row, mainStyles.content]}>
          <View>
            <Text style={mainStyles.underTitle}>{t('SoundList.course')}</Text>
            <TouchableOpacity style={[mainStyles.course, {marginTop: 34}]}>
              <Text style={mainStyles.course__label}>{courseInfo.Name}</Text>
            </TouchableOpacity>
          </View>
          <View>
            <View style={{width: windowWidth / 1.5, flex: 1}}>
              <View style={[mainStyles.row, {justifyContent: 'space-between'}]}>
                <Text style={[mainStyles.underTitle]}>{t('SoundList.title')}</Text>
                <View style={mainStyles.row}>
                  <TextInput placeholder={t('SoundList.placeholder')} placeholderTextColor={'#B3B3B3'}
                             style={styles.searchInput}/>
                  <TouchableOpacity style={styles.searchButton}>
                    <Text style={styles.searchButton__label}>{t('SoundList.search')}</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.sounds}>
                <ScrollView>
                  <View style={{paddingRight: 15}}>
                    {courseInfo.SoundList.map((sound, index) => <SoundRow key={index} index={index} pressedItem={pressedItem}
                                                            setPressedItem={setPressedItem} sound={sound} getSoundInfo={props.getSoundInfo}/>)}
                  </View>
                </ScrollView>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const SoundRow = ({sound, index, pressedItem, setPressedItem, getSoundInfo}) => {
  return <TouchableOpacity style={[styles.item, pressedItem === index && {backgroundColor: '#D9C490'}]}
                           onPress={() => {
                             setPressedItem(index)
                             getSoundInfo(sound.id)
                           }}>
    {pressedItem === index &&
    <Svg style={{marginRight: 7}} width="23" height="26" viewBox="0 0 31 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <G filter="url(#filter0_d)">
        <Path
          d="M26.4544 15.9336L5.71626 4.4124C5.50783 4.29661 5.26923 4.23338 5.025 4.22922C4.78077 4.22507 4.53973 4.28013 4.32668 4.38876C4.11362 4.49738 3.93625 4.65565 3.81279 4.84726C3.68934 5.03888 3.62427 5.25694 3.62427 5.479V28.5214C3.62427 28.7434 3.68934 28.9615 3.81279 29.1531C3.93625 29.3447 4.11362 29.503 4.32668 29.6116C4.53973 29.7202 4.78077 29.7753 5.025 29.7711C5.26923 29.767 5.50783 29.7038 5.71626 29.588L26.4544 18.0668C26.6554 17.9551 26.8214 17.7984 26.9367 17.6116C27.0519 17.4249 27.1124 17.2143 27.1124 17.0002C27.1124 16.786 27.0519 16.5755 26.9367 16.3887C26.8214 16.202 26.6554 16.0452 26.4544 15.9336Z"
          fill="#FBFBFB"/>
        <Path
          d="M26.4544 15.9336L5.71626 4.4124C5.50783 4.29661 5.26923 4.23338 5.025 4.22922C4.78077 4.22507 4.53973 4.28013 4.32668 4.38876C4.11362 4.49738 3.93625 4.65565 3.81279 4.84726C3.68934 5.03888 3.62427 5.25694 3.62427 5.479V28.5214C3.62427 28.7434 3.68934 28.9615 3.81279 29.1531C3.93625 29.3447 4.11362 29.503 4.32668 29.6116C4.53973 29.7202 4.78077 29.7753 5.025 29.7711C5.26923 29.767 5.50783 29.7038 5.71626 29.588L26.4544 18.0668C26.6554 17.9551 26.8214 17.7984 26.9367 17.6116C27.0519 17.4249 27.1124 17.2143 27.1124 17.0002C27.1124 16.786 27.0519 16.5755 26.9367 16.3887C26.8214 16.202 26.6554 16.0452 26.4544 15.9336Z"
          stroke="#6F94D1" stroke-width="2.71546" stroke-linecap="round" stroke-linejoin="round"/>
        <Path
          d="M26.4544 15.9336L5.71626 4.4124C5.50783 4.29661 5.26923 4.23338 5.025 4.22922C4.78077 4.22507 4.53973 4.28013 4.32668 4.38876C4.11362 4.49738 3.93625 4.65565 3.81279 4.84726C3.68934 5.03888 3.62427 5.25694 3.62427 5.479V28.5214C3.62427 28.7434 3.68934 28.9615 3.81279 29.1531C3.93625 29.3447 4.11362 29.503 4.32668 29.6116C4.53973 29.7202 4.78077 29.7753 5.025 29.7711C5.26923 29.767 5.50783 29.7038 5.71626 29.588L26.4544 18.0668C26.6554 17.9551 26.8214 17.7984 26.9367 17.6116C27.0519 17.4249 27.1124 17.2143 27.1124 17.0002C27.1124 16.786 27.0519 16.5755 26.9367 16.3887C26.8214 16.202 26.6554 16.0452 26.4544 15.9336Z"
          stroke="white" stroke-width="2.71546" stroke-linecap="round" stroke-linejoin="round"/>
      </G>
    </Svg>
    }
    <Text style={[styles.item__number, pressedItem === index && {color: 'white'}]}>{index + 1}</Text>
    <Text style={[styles.item__name, pressedItem === index && {fontWeight: '700'}]}>{sound.name}</Text>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  searchInput: {
    backgroundColor: 'white',
    borderRadius: 12,
    paddingVertical: 11,
    paddingHorizontal: 6,
    fontFamily: 'Roboto',
    fontSize: normalize(21),
    color: 'black',
    marginRight: 11,
    height: 47
  },
  searchButton: {
    backgroundColor: '#D9C490',
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2.22,
    elevation: 9,
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 20,
    height: 47
  },
  searchButton__label: {
    color: 'white',
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: normalize(24)
  },
  sounds: {
    flex: 1,
    marginTop: 20,
    paddingBottom: 10
  },
  item: {
    backgroundColor: 'rgba(255, 255, 255, 0.16)',
    borderRadius: 13,
    paddingVertical: 10,
    paddingHorizontal: 22,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(255, 255, 255, 0.5)'
  },
  item__number: {
    color: '#A4C6FF',
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: normalize(26),
    marginRight: 10
  },
  item__name: {
    fontSize: normalize(22),
    fontFamily: 'Roboto',
    color: 'white'
  }
})

const mapStateToProps = (state) => ({
  courseInfo: state.subscriptionReducer.courseInfo
})

export default connect(mapStateToProps, {getSoundInfo})(SoundList)
