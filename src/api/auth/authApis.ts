import apiClient from '../apiClient';
import {LOGIN_ENDPOINT, SIGNUP_ENDPOINT} from '../endpoints';

export const fetchSignUp = async (payload: any) => {
  try {
    const response = await apiClient.post(SIGNUP_ENDPOINT, payload);
    return response.data;
  } catch (error: any) {
    console.error('Error  signup:', error.response);
    throw error?.response?.data?.message;
  }
};

export const fetchLogin = async (payload: any) => {
  try {
    const response = await apiClient.post(LOGIN_ENDPOINT, payload);
    return response.data;
  } catch (error: any) {
    console.log('Error login:', error?.response?.data?.message);
    throw error?.response?.data?.message;
  }
};
