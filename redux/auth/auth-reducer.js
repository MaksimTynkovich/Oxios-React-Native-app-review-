import {SET_TOKEN, SET_USER, SET_IS_REGISTER_ERROR, SET_LOGIN_ERROR} from "./auth-types"

const initialState = {
    token: '',
    user: null,
    isRegisterError: false,
    loginError: null
}

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_TOKEN: return {...state, token: action.token}
        case SET_USER: return {...state, user: action.user}
        case SET_IS_REGISTER_ERROR: return {...state, isRegisterError: action.isRegisterError}
        case SET_LOGIN_ERROR: return {...state, loginError: action.loginError}
        default: return state
    }
}
