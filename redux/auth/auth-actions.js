import {SET_LOGIN_ERROR, SET_IS_REGISTER_ERROR, SET_TOKEN, SET_USER} from "./auth-types";

export const setToken = (token) => ({type: SET_TOKEN, token})
export const setUser = (user) => ({type: SET_USER, user})
export const setIsRegisterError = (isRegisterError) => ({type: SET_IS_REGISTER_ERROR, isRegisterError})
export const setLoginError = (loginError) => ({type: SET_LOGIN_ERROR, loginError})
