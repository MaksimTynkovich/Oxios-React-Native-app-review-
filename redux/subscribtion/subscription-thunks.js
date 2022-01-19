import instance from '../instance'
import {setCategoryInfo, setCourseInfo, setCupons, setMyCupons, setSoundInfo} from "./subscription-actions";

export const getCupons = () => async (dispatch) => {
  const response = await instance.post('/user/getCupons')
  dispatch(setCupons([...response.data.AllCupon, ...response.data.Personal]))
}

export const getMyCupons = () => async (dispatch) => {
  const response = await instance.post('/user/getCupons')
  dispatch(setMyCupons(response.data.Personal))
}

export const buyCupon = (CuponId, exp, navigation) => async (dispatch) => {
  const response = await instance.post('/user/buyCupon', {CuponId, exp})
  if(response.data === 'sucess') {
    navigation.navigate('MainScreen')
  }
}

export const getCategoryInfo = (id, navigation) => async (dispatch) => {
  const response = await instance.post('/user/getCategoryInfo', {id})
  console.log('categoryInfo', response.data)
  dispatch(setCategoryInfo(response.data.info))
  navigation.navigate('CourseList')
}

export const getCourseInfo = (id, navigation) => async (dispatch) => {
  const response = await instance.post('/user/getCourseInfo', {id})
  console.log('courseInfo', response.data.info)
  dispatch(setCourseInfo(response.data.info))
  navigation.navigate('SoundList')
}



export const getSoundInfo = (id) => async (dispatch) => {
  const response = await instance.post('/user/getMusic', {id})
  console.log('courseInfo', response.data.info)
  dispatch(setSoundInfo(response.data.info))
}
