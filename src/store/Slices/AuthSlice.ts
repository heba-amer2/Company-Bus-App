import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginResponse } from '../../types/LoginResponse';

interface AuthState {
  accessToken: string | null;
  tokenType: 'Bearer';
  expiresInSeconds: number | null;
  user: LoginResponse['user'] | null;
}

const initialState: AuthState = {
  accessToken: null,
  tokenType: 'Bearer',
  expiresInSeconds: null,
  user: null,
};


const AuthSlice = createSlice({
   name: 'Auth',
  initialState,
   reducers: {
    setCredentials : (state ,action: PayloadAction<LoginResponse>)=>{
        state.accessToken=action.payload.accessToken;
        state.tokenType=action.payload.tokenType;
        state.expiresInSeconds=action.payload.expiresInSeconds;
        state.user=action.payload.user;
    }
   },
});

export default AuthSlice.reducer;
export const {setCredentials}=AuthSlice.actions;