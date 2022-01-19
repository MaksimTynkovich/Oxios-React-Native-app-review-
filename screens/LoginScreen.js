import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View, ScrollView, Image, StyleSheet, Modal, Text} from "react-native";
import styled from 'styled-components/native'
import Background from "../components/Background";
import {FontAwesome5, Feather, Entypo, Ionicons} from '@expo/vector-icons';
import Svg, {Circle, Path} from "react-native-svg";
import {normalize} from "../styles/mainStyles";
import i18n from '../MultiLanguages/i18n'
import {useTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import {register, login} from '../redux/auth/auth-thunks';
import {Formik} from 'formik';
import { PASSWORD_MISMATCH } from '../redux/auth/auth-types';
import { setLoginError } from '../redux/auth/auth-actions';

const LoginScreen = ({navigation, register, login, isRegisterError, loginError, token, setLoginError}) => {

  const [visiblePassword, setVisiblePassword] = useState(true)
  const [error, setError] = useState(false)
  const [loginData, setLoginData] = useState(null)
  useEffect(() => {
    if (isRegisterError) {
      login(loginData.email, loginData.password)
    }
  }, [isRegisterError])
  useEffect(() => {
    if(loginError) setError(true)
  }, [loginError])
  useEffect(() => {
    if(token) navigation.reset({
      index: 0,
      routes: [{
        name: 'Subscribe'
      }]
  })}, [token])

  const {t, i18n} = useTranslation();

  const changeVisiblePassword = () => {
    setVisiblePassword(prev => {
      return !prev
    })
  }


  const color = error ? "#DA8181" : "#B5D0D0"

  return (
    <Background>
      {!token && <ScrollView>
        <Container>

          <Title>
            {t('LoginScreen.auth_title')}
          </Title>

          <Formik
            initialValues={{
              email: '',
              password: ''
            }}
            onSubmit={(values) => {
              setError(false)
              console.log(values)
              register(values.email, values.password)
              setLoginData(values)
            }}
          >
            {({handleChange, handleSubmit, values}) => {
              return <>
                <View>
                  <Input style={{marginTop: 76}}>
                    <InputLabel>
                      {t('LoginScreen.auth_log')}
                    </InputLabel>
                    <InputForm
                      error={error}
                    >
                      <FontAwesome5
                        name="user-circle"
                        size={35}
                        color={color}
                      />
                      <InputFiled
                        id={'email'}
                        value={values.email}
                        onChangeText={handleChange('email')}
                        error={error}
                      />
                    </InputForm>
                  </Input>
                  <Input>
                    <InputLabel style={{marginTop: 21}}>
                      {t('LoginScreen.auth_pass')}
                    </InputLabel>
                    <InputForm
                      error={error}
                    >
                      <Feather
                        name="lock"
                        size={35}
                        color={color}
                      />
                      <InputFiled
                        password
                        secureTextEntry={visiblePassword}
                        error={error}
                        id={'password'}
                        value={values.password}
                        onChangeText={handleChange('password')}
                      />
                      <TouchableOpacity
                        onPress={() => changeVisiblePassword()}
                      >
                        {visiblePassword ?
                          <Svg xmlns="http://www.w3.org/2000/svg" style={{marginTop: 3}} width="48" height="32"
                               viewBox="0 0 48 32" fill="none">
                            <Path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M7.29607 7.8318C11.3565 4.46616 17.262 0.833252 23.9994 0.833252C30.7368 0.833252 36.6423 4.46616 40.7027 7.8318C42.7637 9.5401 44.4261 11.2434 45.5742 12.5196C46.1495 13.1591 46.5989 13.695 46.9079 14.0756C47.0625 14.266 47.1822 14.4178 47.2652 14.5247C47.3067 14.5781 47.3391 14.6203 47.362 14.6505L47.3894 14.6866L47.3978 14.6978L47.4006 14.7016C47.4011 14.7022 47.4026 14.7042 45.6661 15.9999C47.4026 17.2957 47.4022 17.2962 47.4017 17.2968L47.3978 17.3021L47.3894 17.3132L47.362 17.3494C47.3391 17.3795 47.3067 17.4217 47.2652 17.4752C47.1822 17.582 47.0625 17.7338 46.9079 17.9242C46.5989 18.3048 46.1495 18.8408 45.5742 19.4802C44.4261 20.7564 42.7637 22.4597 40.7027 24.168C36.6423 27.5337 30.7368 31.1666 23.9994 31.1666C17.262 31.1666 11.3565 27.5337 7.29607 24.168C5.23513 22.4597 3.57267 20.7564 2.42463 19.4802C1.84935 18.8408 1.39993 18.3048 1.09089 17.9242C0.93629 17.7338 0.816586 17.582 0.733591 17.4752C0.692086 17.4217 0.65974 17.3795 0.636778 17.3494L0.609393 17.3132L0.601026 17.3021L0.598184 17.2983C0.597735 17.2977 0.596238 17.2957 2.33274 15.9999C0.596238 14.7042 0.59665 14.7036 0.597099 14.703L0.601026 14.6978L0.609393 14.6866L0.636778 14.6505C0.65974 14.6203 0.692086 14.5781 0.733591 14.5247C0.816586 14.4178 0.93629 14.266 1.09089 14.0756C1.39993 13.695 1.84935 13.1591 2.42463 12.5196C3.57267 11.2434 5.23513 9.5401 7.29607 7.8318ZM2.33274 15.9999L0.597099 14.703C0.0235464 15.4716 0.0226858 16.527 0.596238 17.2957L2.33274 15.9999ZM5.1325 15.9999C5.28797 16.1797 5.45943 16.3745 5.6462 16.5821C6.69094 17.7434 8.20149 19.2901 10.0614 20.8318C13.8428 23.9662 18.7706 26.8333 23.9994 26.8333C29.2282 26.8333 34.156 23.9662 37.9374 20.8318C39.7973 19.2901 41.3079 17.7434 42.3526 16.5821C42.5394 16.3745 42.7108 16.1797 42.8663 15.9999C42.7108 15.8202 42.5394 15.6254 42.3526 15.4177C41.3079 14.2564 39.7973 12.7097 37.9374 11.168C34.156 8.03368 29.2282 5.16659 23.9994 5.16659C18.7706 5.16659 13.8428 8.03368 10.0614 11.168C8.20149 12.7097 6.69094 14.2564 5.6462 15.4177C5.45943 15.6254 5.28797 15.8202 5.1325 15.9999ZM45.6661 15.9999L47.4017 17.2968C47.9753 16.5282 47.9761 15.4728 47.4026 14.7042L45.6661 15.9999ZM16.4161 15.9999C16.4161 11.8118 19.8113 8.41659 23.9994 8.41659C28.1875 8.41659 31.5827 11.8118 31.5827 15.9999C31.5827 20.1881 28.1875 23.5833 23.9994 23.5833C19.8113 23.5833 16.4161 20.1881 16.4161 15.9999ZM23.9994 12.7499C22.2045 12.7499 20.7494 14.205 20.7494 15.9999C20.7494 17.7948 22.2045 19.2499 23.9994 19.2499C25.7943 19.2499 27.2494 17.7948 27.2494 15.9999C27.2494 14.205 25.7943 12.7499 23.9994 12.7499Z"
                                  fill="#B5D0D0"/>
                          </Svg>

                          :
                          <Svg xmlns="http://www.w3.org/2000/svg" style={{marginTop: 6}} width="48" height="30"
                               viewBox="0 0 63 30" fill="none">
                            <Path
                              d="M59.4905 1.04285C60.9398 1.79725 61.503 3.58366 60.7486 5.03291C59.6248 7.19181 57.9529 9.17377 55.8244 10.9182L55.2313 11.3817L61.7109 17.8613C62.8662 19.0166 62.8663 20.8897 61.711 22.045C60.6445 23.1115 58.9665 23.1935 57.806 22.2911L57.5273 22.045L50.0281 14.5485C47.6937 15.6636 45.1196 16.56 42.382 17.2117L44.7825 26.1647C45.2054 27.7429 44.2688 29.3651 42.6907 29.7879C41.2252 30.1806 39.7218 29.4011 39.176 28.0242L39.0675 27.6961L36.523 18.2012C34.8792 18.3713 33.2002 18.4586 31.4995 18.4586C29.7867 18.4586 28.0958 18.37 26.4406 18.1975L23.8958 27.6961C23.4729 29.2743 21.8508 30.2108 20.2726 29.7879C18.8072 29.3953 17.8949 27.9685 18.1107 26.5031L18.1808 26.1647L20.5819 17.2033C17.8608 16.5531 15.3019 15.6611 12.9798 14.5527L5.4872 22.045C4.3319 23.2003 2.45878 23.2003 1.30348 22.045C0.237054 20.9786 0.155024 19.3005 1.05739 18.14L1.30349 17.8613L7.77381 11.3938C7.57059 11.2376 7.37086 11.079 7.17469 10.9183C5.04616 9.17384 3.37432 7.19189 2.25046 5.03295C1.49604 3.58371 2.05931 1.79729 3.50855 1.04287C4.95779 0.288453 6.7442 0.851717 7.49862 2.30096C8.2343 3.7142 9.38926 5.0834 10.9251 6.34209C15.5939 10.1685 23.1842 12.542 31.4995 12.542C39.8149 12.542 47.4052 10.1685 52.074 6.34204C53.6099 5.08333 54.7649 3.71412 55.5004 2.30099C56.2548 0.851742 58.0413 0.288453 59.4905 1.04285Z"
                              fill="#B5D0D0"/>
                          </Svg>
                        }
                      </TouchableOpacity>
                    </InputForm>
                  </Input>
                </View>

                <ButtonLogin
                  onPress={() => handleSubmit()}
                >
                  <ButtonText>
                    {t('LoginScreen.btn_enter')}
                  </ButtonText>
                </ButtonLogin>

                <View style={{marginTop: 37}}>
                  <TextInfo>
                    {t('LoginScreen.Copyright')}
                  </TextInfo>
                  <TextInfo>
                    https://website.com
                  </TextInfo>
                </View>
              </>
            }}
          </Formik>
            {/* <Modal
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
                  <Text style={styles.modal__text}>
                  Такой адрес почты\телефон не найден. {"\n"}
                  Попробуйте еще раз
                  </Text>
                  <ButtonLogin style={{marginTop: 50}} onPress={() => setModalVisible(false)}><ButtonText>Agree</ButtonText></ButtonLogin>
                </View>
              </View>
            </Modal> */}

           {loginError === PASSWORD_MISMATCH &&  <Modal
              animationType="slide"
              transparent={true}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modal__text}>
                  {t('LoginScreen.modal_error1')} {"\n"} {t('LoginScreen.modal_error2')}
                  </Text>
                  <ButtonLogin style={{marginTop: 40}} onPress={() => setLoginError(null)}><ButtonText>Agree</ButtonText></ButtonLogin>
                </View>
              </View>
            </Modal>}


            {/* <Modal
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
                  <Text style={styles.modal__text}>
                  Слишком много неверных попыток авторизации. {"\n"}
                  Обратитесь за помощью к {"\n"}
                   вашему агенту
                  </Text>
                  <ButtonLogin style={{marginTop: 30}} onPress={() => setModalVisible(false)}><ButtonText>Agree</ButtonText></ButtonLogin>
                </View>
              </View>
            </Modal>  */}
        </Container>
      </ScrollView>}
    </Background>
  );
};


const styles = StyleSheet.create({

  modal__text: {
    marginTop: 35,
    lineHeight: 41,
    color: "#AA4E42",
    textAlign: "center",
    fontWeight: "500",
    fontSize: normalize(35),
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,

    width: normalize(595),
    height: normalize(292)
  }
});


const TextInfo = styled.Text`
  font-size: 24px;
  color: #A0BCB5;
  text-align: center;
`

const ButtonText = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  color: #fff;
`

const ButtonLogin = styled.TouchableOpacity`
  background: #6DAA90;
  width: 250px;
  height: 70px;
  display: flex;
  justify-content: center;
  margin-top: 78px;
  align-items: center;
  border-radius: 50px;
`

const InputForm = styled.View`
  border-width: ${props => props.error ? '2px' : "0"};
  border-color: #DA8181;
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 18px;
  border-radius: 16px;
`

const InputLabel = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 33px;
  color: #fff;
`


const InputFiled = styled.TextInput`
  width: ${props => props.password ? "80%" : "89%"};
  color: ${props => props.error ? '#DA8181' : "#28302E"};;
  height: 100%;
  font-size: 20px;
`

const Input = styled.View`
  display: flex;
  width: 500px;
  height: 90px;
  margin-bottom: 15px;
`

const Title = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 59px;
  color: #fff;
  margin-top: 25px;
`

const Container = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto 0;
  padding: 15px 0;
`

const mapStateToProps = (state) => ({
  token: state.authReducer.token,
  isRegisterError: state.authReducer.isRegisterError,
  loginError: state.authReducer.loginError
})

export default connect(mapStateToProps, {register, login, setLoginError})(LoginScreen)
