import { SIGN_OUT, SIGN_IN, SIGN_UP } from '../actionTypes';
import axios from '../../utils/axios';

export const signOutAction = () => ({
  type: SIGN_OUT
});

export const signInAction = (payload) => ({
  type: SIGN_IN,
  payload,
});

export const signUpAction = (payload) => async (dispatch, getState) => {
  console.log(getState());
  try {
    const { data } = await axios.post('/auth/local', payload);
    const userData = {
      token: data.jwt,
      user: data.user
    }
    console.log(data)
    dispatch({ type: SIGN_UP, payload: userData });
  } catch (error) {
    console.log(error)
    return error.response.data;
  }
}