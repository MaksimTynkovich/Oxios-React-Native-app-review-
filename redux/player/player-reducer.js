import {SET_SOUNDS} from "./player-types";

const initialState = {
  sounds: null
}


export const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SOUNDS: return {...state, sounds: action.sounds}
    default: return state
  }
}
