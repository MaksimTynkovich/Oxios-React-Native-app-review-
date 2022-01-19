import {SET_CATEGORY_INFO, SET_COURSE_INFO, SET_CUPONS, SET_SELECTED_CUPON, SET_SOUND_INFO} from "./subscription-types";

export const setCupons = (cupons) => ({type: SET_CUPONS, cupons})
export const setMyCupons = (myCupons) => ({type: SET_CUPONS, myCupons})
export const setCategoryInfo = (categoryInfo) => ({type: SET_CATEGORY_INFO, categoryInfo})
export const setSelectedCupon = (selectedCupon) => ({type: SET_SELECTED_CUPON, selectedCupon})
export const setCourseInfo = (courseInfo) => ({type: SET_COURSE_INFO, courseInfo})
export const setSoundInfo = (soundInfo) => ({type: SET_SOUND_INFO, soundInfo})
