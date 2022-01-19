import instance from '../instance'
import {setSounds} from "./player-actions";

export const getSounds = () => async (dispatch) => {
  const response = await instance.post(`/test`)
  dispatch(setSounds(response.data.sound))
}
