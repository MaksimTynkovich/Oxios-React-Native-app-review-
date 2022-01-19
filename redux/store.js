import {applyMiddleware, combineReducers, createStore} from "redux";

import thunk from "redux-thunk";
import {playerReducer} from "./player/player-reducer";
import {authReducer} from './auth/auth-reducer'
import {subscriptionReducer} from "./subscribtion/subscription-reducer";


let reducers = combineReducers({
  playerReducer,
  authReducer,
  subscriptionReducer
})


let store = createStore(reducers, applyMiddleware(thunk))
export default store
