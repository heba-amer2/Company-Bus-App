import { createSlice } from '@reduxjs/toolkit';
type intialState = {
  token: string | null;
  userName: string | null;
  category: string | null;
};
const initialState: intialState = {
  token: null,
  userName: null,
  category: null,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    SetUserSlice: (state, action) => {
      state.token = action.payload.token;
      state.userName = action.payload.userName;
      state.category = action.payload.category;
    },
    logout: state => {
      state.token = null;
      state.userName = null;
      state.category = null;
    },
  },
});
export const { SetUserSlice, logout } = authSlice.actions;
export default authSlice.reducer;
