import {createSlice} from '@reduxjs/toolkit';

export interface authState {
  signUp: {};
  login: {token?: string; user?: any};
  logOut: boolean;
}

const initialState: authState = {
  signUp: {},
  login: {},
  logOut: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSignup: (state, action) => {
      state.signUp = action.payload;
    },
    setLogin: (state, action) => {
      state.login = action.payload;
    },
    setLogout: state => {
      state.signUp = {};
      state.login = {};
      state.logOut = true;
    },
  },
});

export const {setSignup, setLogin, setLogout} = authSlice.actions;

export default authSlice.reducer;
