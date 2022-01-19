import React, {useState} from 'react';
import Background from "../components/Background";
import styled from 'styled-components/native'
import Logo from "../components/Logo/Logo";
import BackButton from "../components/BackButton/BackButton";
import {LinearGradient} from "expo-linear-gradient";
import {Alert, Modal, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {mainStyles, normalize} from '../styles/mainStyles'
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import {CheckBox} from "react-native-elements";
import { BoxShadow } from 'react-native-shadow';
import i18n from '../MultiLanguages/i18n'
import { useTranslation } from 'react-i18next';
import {connect} from "react-redux";
import {buyCupon} from "../redux/subscribtion/subscription-thunks";

const SubscribeDetailScreen = ({navigation, ...props}) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [checked, setChecked] = useState(false)
  const [pressedPlan, setPressedPlan] = useState(null)
  const [selectedPrice, setSelectedPrice] = useState(null)

  const {t, i18n}=useTranslation();

  const shadowBackButton = {
    width: 360,
    height: 70,
    color: "#6ddaac",
    border: 15,
    radius: 30,
    opacity: 0.5,
    x: 0,
    y: 4,
  }
  console.log('selectedCupon', props.selectedCupon)

  const plans = [
    {
      date: "1 DAY",
      price: `¥${props.selectedCupon.Price.PriceD}`,
      onPress: () => setPressedPlan(1)
    },
    {
      date: "1 MONTH",
      price: `¥${props.selectedCupon.Price.PriceM}`,
      onPress: () => setPressedPlan(30)
    },
    {
      date: "1 YEAR",
      price: `¥${props.selectedCupon.Price.PriceY}`,
      onPress: () => setPressedPlan(365)
    },
    {
      date: "UNLIMITED",
      price: `¥${props.selectedCupon.Price.PriceU}`,
      onPress: () => setPressedPlan('unlimited')
    },
  ]

  return (
    <Background>
      <Container>
        <Header>
          <BackButton forContainer/>
          <Logo size='Middle'/>

          <HeaderTitle>
            {t('SubscribeDetailScreen.sub_title')}
          </HeaderTitle>
          <BoxShadow setting={shadowBackButton}>
            <HowButton
              style={styles.how__button}
            >
              <HowButtonText>
                {t('SubscribeDetailScreen.sub_howbutton')}
              </HowButtonText>
            </HowButton>
          </BoxShadow>
        </Header>
        <Content>
          <View style={[mainStyles.row, {justifyContent: 'center', marginTop: normalize(50)}]}>
            {plans.map((item, index) => (
              <View key={index} style={{width: normalize(224), marginHorizontal: normalize(40)}}>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(true)
                    setSelectedPrice(item)
                  }}
                >
                  <LinearGradient
                    colors={['#0FACCE', '#6CAFED', '#25847E']}
                    style={{
                      width: normalize(225),
                      height: normalize(224),
                      borderRadius: 300,
                      display: 'flex',
                      shadowColor: "rgba(0, 0, 0, 0.95)",
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowRadius: 2.22,
                      elevation: 9,
                    }}
                  >
                    <Text style={styles.price__label}>
                      {item.price}
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
                <Text style={styles.price__date}>
                  {item.date}
                </Text>
              </View>
            ))}
          </View>
        </Content>

        <View style={styles.button__try}>
          <TouchableOpacity
            onPress={() => navigation.navigate('MainScreen')}
            style={styles.button}
          >
            <Text style={styles.button__label}>
              {t('SubscribeDetailScreen.sub_freebtn')}
            </Text>
          </TouchableOpacity>
        </View>


        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
              setSelectedPrice(null)
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: normalize(21)
                }}>
                  <TouchableOpacity>
                    <LinearGradient
                      colors={['#0FACCE', '#6CAFED', '#6CAFED']}
                      style={{
                        width: normalize(225),
                        height: normalize(224),
                        borderRadius: 300,
                        display: 'flex',
                        background: "gray",
                        marginBottom: normalize(26),
                        shadowColor: "rgba(0, 0, 0, 0.95)",
                        shadowOffset: {
                          width: 0,
                          height: 2,
                        },
                        shadowRadius: 2.22,
                        elevation: 9,
                      }}
                    >
                      <Text style={styles.price__label}>
                        {selectedPrice?.price}
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                  <SubscribeButton onPress={() => props.buyCupon(props.selectedCupon._id, pressedPlan, navigation)}
                                   canClick={checked} disabled={checked === false} style={styles.subscribe}>
                    <SubscribeButtonText  canClick={checked} style={{...styles.subscribe__text}}>
                      {t('SubscribeDetailScreen.sub_modal_btn')}
                    </SubscribeButtonText>
                  </SubscribeButton>
                </View>

                <View>
                  <Text style={styles.title}>{props.selectedCupon.Name}</Text>
                  <Text style={styles.subtitle}>{t('SubscribeDetailScreen.sub_modal_rules')}</Text>
                  <View style={styles.list}>
                    <Text style={styles.list__item}>
                      {t('SubscribeDetailScreen.sub_modal_rules1')}
                    </Text>
                    <Text style={styles.list__item}>
                      {t('SubscribeDetailScreen.sub_modal_rules2')}
                    </Text>
                    <Text style={styles.list__item}>
                      {t('SubscribeDetailScreen.sub_modal_rules3')}
                    </Text>
                  </View>
                  <View style={styles.checkbox}>
                    <CheckBox
                      uncheckedIcon={
                        <MaterialCommunityIcons
                          name="checkbox-blank-outline"
                          size={normalize(47)}
                          color="#77B9E3"
                        />
                      }
                      checkedIcon={
                        <MaterialCommunityIcons
                          name="checkbox-marked"
                          size={normalize(47)}
                          color="#77B9E3"/>
                      }
                      checked={checked}
                      onPress={() => setChecked(prev => !prev)}
                      tintColors={{true: '#F15927', false: 'black'}}
                    />
                    <Text style={styles.checkbox__label}>
                      {t('SubscribeDetailScreen.sub_modal_rules_accept')}
                    </Text>

                  </View>
                </View>

                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(false)
                    setSelectedPrice(null)
                  }}
                  style={{position: 'absolute', right: normalize(20), top: normalize(28)}}
                >
                  <Ionicons name="close-circle-outline" size={60} color="#8BCCBD"/>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>


      </Container>
    </Background>
  );
};

const SubscribeButton = styled.TouchableOpacity`
  background-color: ${props => props.canClick ? "#3AD6CC" : "#35948E"};
`

const SubscribeButtonText = styled.Text`
  color: ${props => props.canClick ? "#fff" : "#60C0BA"}
`



const styles = StyleSheet.create({
  how__button: {
    shadowColor: "#6AB1A0",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowRadius: 6,

    elevation: 100
  },
  button__try: {
    width: '100%',
    alignItems: 'center',
    marginTop: normalize(64)
  },
  subscribe__text: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: normalize(30),
    lineHeight: normalize(81)
  },
  subscribe: {
    width: normalize(265),
    height: normalize(81),
    borderRadius: normalize(61)
  },
  checkbox__label: {
    color: '#fff',
    fontSize: normalize(24),
    width: normalize(461)
  },
  checkbox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  list__item: {
    fontSize: normalize(28),
    color: '#fff',
    width: normalize(668),
    marginVertical: normalize(14)
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: normalize(36),
    marginVertical: normalize(15),
    color: '#fff',
  },
  title: {
    fontWeight: 'bold',
    fontSize: normalize(40),
    color: '#fff',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: normalize(1070),
    height: normalize(530),
    margin: 20,
    backgroundColor: "#25847E",
    borderRadius: 20,
    padding: 35,
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-between',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttons: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },


  prices: {
    display: "flex",
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price__date: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: normalize(42),
    textAlign: "center",
    color: "#FFFFFF",
    marginTop: normalize(22)
  },
  price__label: {
    fontSize: normalize(42),
    lineHeight: normalize(224),
    fontWeight: "bold",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: 'center',
    alignItems: 'center'
  },
  button: {
    width: normalize(407),
    height: normalize(97),
    backgroundColor: '#25847E',
    borderRadius: normalize(80),
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2.22,
    elevation: 9,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button__label: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: "700",
    lineHeight: normalize(97),
    color: "#fff",
    fontSize: normalize(45),
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

const Content = styled.View`

`

const HowButtonText = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 29px;

  color: #FFFFFF;
`

const HowButton = styled.TouchableOpacity`
  width: 361px;
  height: 81px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #25847E;
  border-radius: 61px;
},
`

const HeaderTitle = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 55px;
  color: #FFFFFF;
`

const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Container = styled.View`
  display: flex;
  width: 100%;
  padding: 20px 20px;
`

const mapStateToProps = (state) => ({
  selectedCupon: state.subscriptionReducer.selectedCupon
})

export default connect(mapStateToProps, {buyCupon})(SubscribeDetailScreen)
