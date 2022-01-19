import {
  SET_CATEGORY_INFO,
  SET_COURSE_INFO,
  SET_CUPONS,
  SET_MY_CUPONS,
  SET_SELECTED_CUPON,
  SET_SOUND_INFO
} from "./subscription-types";

const initialState = {
  cupons: [],
  myCupons: [],
  selectedCupon: null,
  categoryInfo: null,
  courseInfo: null,
  soundInfo: null,
}

export const subscriptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CUPONS: return {...state, cupons: action.cupons}
    case SET_MY_CUPONS: return {...state, myCupons: action.myCupons}
    case SET_CATEGORY_INFO: return {...state, categoryInfo: action.categoryInfo}
    case SET_SELECTED_CUPON: return {...state, selectedCupon: action.selectedCupon}
    case SET_COURSE_INFO: return {...state, courseInfo: action.courseInfo}
    case SET_SOUND_INFO: return {...state, soundInfo: action.soundInfo}
    default: return state
  }
}
