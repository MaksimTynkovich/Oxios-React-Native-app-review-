import React, {useEffect, useState} from 'react';
import {Text, View, Pressable, Modal, Alert, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import Background from "../components/Background";
import styled from "styled-components/native";
import BackButton from "../components/BackButton/BackButton";
import NextButton from "../components/NextButton/NextButton";
import Logo from "../components/Logo/Logo";
import {normalize} from "../styles/mainStyles";
import {Ionicons} from "@expo/vector-icons";
import {BoxShadow} from 'react-native-shadow';
import i18n from '../MultiLanguages/i18n';
import { useTranslation } from 'react-i18next';
import {connect} from "react-redux";
import {getCupons} from "../redux/subscribtion/subscription-thunks";
import {setSelectedCupon} from "../redux/subscribtion/subscription-actions";
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Svg, {Path} from "react-native-svg";

const shadowHowButton = {
  width: 290,
  height: 80,
  color: "#6fcdc7",
  border: 15,
  radius: 40,
  opacity: 0.35,
  x: 0,
  y:0
}



const SubscribeScreen = ({navigation, ...props}) => {
  const items = [
    'Beauty&Health Pack',
    'Salon Pack',
    'Advanced Pack',
    'Beauty&Health Pack',
    'Salon Pack',
    'Advanced Pack',
  ]
  useEffect(() => {
    props.getCupons()
  }, [])
  console.log(props.cupons)
  const [modalVisible, setModalVisible] = useState(false);

  const {t, i18n}=useTranslation();

  const scrollRef = React.useRef(null);
  const goToLastIndex = () => {
    scrollRef.current.goToLastIndex();
  };
  const goToFirstIndex = () => {
    scrollRef.current.goToFirstIndex();
  };
  
  return (
    <Background>
      <ScrollView>
        <Container>
          <Header>
            <Logo size=''/>
            <HeaderTitle>
              {t('SubscribeScreen.sub_title')}
            </HeaderTitle>
            <BoxShadow setting={shadowHowButton}>
              <HowButton
                style={{
                  shadowColor: "#6AB1A0",
                  shadowOffset: {
                    width: 5,
                    height: 5,
                  },
                  shadowRadius: 6,

                  elevation: 100
                }}
                onPress={() => setModalVisible(true)}
              >
                <HowButtonText>
                  {t('SubscribeScreen.sub_howbutton')}
                </HowButtonText>
              </HowButton>
            </BoxShadow>
          </Header>
          <Content>
          <TouchableOpacity style={styles.button}
            onPress={() => goToFirstIndex()}
            forContainer
            activeOpacity={0.3}>
            <Svg width='45' height='45' viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path
                    d="M21.0938 39.375L4.21875 22.5L21.0938 5.625L21.0938 14.0625L36.5625 14.0625C36.9355 14.0625 37.2931 14.2107 37.5569 14.4744C37.8206 14.7381 37.9688 15.0958 37.9688 15.4688L37.9688 29.5312C37.9688 29.9042 37.8206 30.2619 37.5569 30.5256C37.2931 30.7893 36.9355 30.9375 36.5625 30.9375L21.0938 30.9375L21.0938 39.375Z"
                    stroke="#E3FFF8" stroke-width="4.41964" stroke-linecap="round" stroke-linejoin="round"/>
            </Svg>
        </TouchableOpacity>
            <SwiperFlatList ref={scrollRef} >
             <View style={styles.child}>
            <CardsContainer >
              {props.cupons.map((item, index) => (
                <CardItem
                  style={styles}
                  key={index}
                  onPress={() => {
                    props.setSelectedCupon(item)
                    navigation.navigate('SubscribeDetail')
                  }}
                >
                  <CardText>
                    {item.Name}
                  </CardText>

                </CardItem>

              ))}
            </CardsContainer>
            </View>
             <View style={styles.child}>
            <CardsContainer >
              {props.cupons.map((item, index) => (
                <CardItem

                  style={styles}
                  key={index}
                  onPress={() => {
                    props.setSelectedCupon(item)
                    navigation.navigate('SubscribeDetail')
                  }}
                >
                  <CardText>
                    {item.Name}
                  </CardText>

                </CardItem>

              ))}
            </CardsContainer>
            </View>
            </SwiperFlatList>
            <TouchableOpacity activeOpacity={0.3} style={styles.button} onPress={() => {goToLastIndex()}}>
            <Svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M19.9062 2.625L36.7812 19.5L19.9062 36.375V27.9375H4.4375C4.06454 27.9375 3.70685 27.7893 3.44313 27.5256C3.17941 27.2619 3.03125 26.9042 3.03125 26.5312V12.4688C3.03125 12.0958 3.17941 11.7381 3.44313 11.4744C3.70685 11.2107 4.06454 11.0625 4.4375 11.0625H19.9062V2.625Z" stroke="#E3FFF8" stroke-width="4.41964" stroke-linecap="round" stroke-linejoin="round"/>
            </Svg>
        </TouchableOpacity>
          </Content>


          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modal__title}>{t('SubscribeScreen.modal_title')}</Text>
                  <Text style={styles.modal__text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                  </Text>

                  <View style={styles.blocks}>
                    <View style={styles.block}>
                    </View>
                    <View style={styles.block}>
                    </View>
                    <View style={styles.block}>
                    </View>
                  </View>

                  <Text style={styles.modal__text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                  </Text>

                  <TouchableOpacity
                    onPress={() => setModalVisible(false)}
                    style={{position: 'absolute', right: normalize(20), top: normalize(28)}}
                  >
                    <Ionicons name="close-circle-outline" size={60} color="#8BCCBD"/>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
        </Container>
      </ScrollView>
    </Background>
  );
};


const styles = StyleSheet.create({
  button: {
    width: 88,
    height: 87,
    backgroundColor: '#6DAA90',
    shadowColor: "#000",
    shadowOffset: {
        width: 12,
        height: 15,
    },
    shadowOpacity: 0.95,
    shadowRadius: 7.84,
    elevation: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    zIndex: 100,
  },
  child: {width: 950},
  blocks: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: normalize(44)
  },
  block: {
    width: normalize(277),
    height: normalize(175),
    backgroundColor: "#D9E7E6",
    borderRadius: normalize(21),
  },

  modal__title: {
    color: "#25847E",
    fontWeight: "bold",
    fontSize: normalize(40),
    lineHeight: normalize(47),
    marginBottom: normalize(32)
  },
  modal__text: {
    color: "#000",
    textAlign: "center",
    fontSize: normalize(20),
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: normalize(80),
    paddingVertical: normalize(40),
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,

    width: normalize(1026),
    height: normalize(630)
  },
});


const Content = styled.View`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin-top: 12%;
`

const CardText = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 27px;
  color: #A7EEDD;
  text-align: center;
`

const CardItem = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  background: #25847E;
  width: 30%;
  border-radius: 20px;
  margin: 15px 0;
  height: 165px;
`

const CardsContainer = styled.View`
  padding-horizontal: 30px;
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
  flex-wrap: wrap;
  flex: 1;
 

`

const HowButtonText = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 29px;
  color: #FFFFFF;
`

const HowButton = styled.TouchableOpacity`
  width: 290px;
  height: 81px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #25847E;
  border-radius: 61px;
`

const HeaderTitle = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  color: #FFFFFF;
`

const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

const Container = styled.View`
  padding: 15px 28px;
  margin-bottom: 60px;
`

const mapStateToProps = (state) => ({
  cupons: state.subscriptionReducer.cupons
})

export default connect(mapStateToProps, {getCupons, setSelectedCupon})(SubscribeScreen)
