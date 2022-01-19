import instance, { API_BASE_URL } from "../instance"
import {setToken, setUser, setIsRegisterError, setLoginError} from "./auth-actions"
import {AsyncStorage} from "react-native";
import { ERROR } from "./auth-types";

const setTokenInHeaders = (token) => {
  Object.assign(instance.defaults, {headers: {Authorization: token}});
}

export const register = (email, password) => async (dispatch) => {
  dispatch(setLoginError(null))
  try {
    const response = await instance.post(`/register`, {email, password})
    console.log(response.data)
    if(!response.data.token) {
      dispatch(setIsRegisterError(true))
    } else {
      setTokenInHeaders(response.data.token)
      dispatch(setToken(response.data.token))
      dispatch(setUser({email: response.data.email}))
      AsyncStorage.setItem('token', response.data.token)
      AsyncStorage.setItem('user', JSON.stringify({email: response.data.email}))
    }
  } catch (e) {
    dispatch(setIsRegisterError(true))
  }
}

export const login = (email, password) => async (dispatch) => {
  dispatch(setIsRegisterError(null))
  try {
    const response = await instance.post('/auth', {email, password})
    console.log(response.data)
    if(!response.data.token) {
      dispatch(setLoginError(response.data.status))
    } else {
      setTokenInHeaders(response.data.token)
      dispatch(setToken(response.data.token))
      dispatch(setUser({email: response.data.email}))
      AsyncStorage.setItem('token', response.data.token)
      AsyncStorage.setItem('user', JSON.stringify({email: response.data.email}))
    }
  } catch (e) {
    dispatch(setLoginError(ERROR))
  }
}

export const loadUserData = () => async (dispatch) => {
  const token = await AsyncStorage.getItem('token')
  if(token) {
    setTokenInHeaders(token)
    dispatch(setToken(token))
  } else dispatch(setToken(null))
  const user = await AsyncStorage.getItem('user')
  if(user) dispatch(setUser(user))
  else dispatch(setUser(null))
}
