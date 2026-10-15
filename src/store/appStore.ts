
import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../services/api/auth.api';
import reducer from './Slices/AuthSlice';

export const store = configureStore({

   reducer: {
    auth: reducer ,
    [authApi.reducerPath]: authApi.reducer,
  },
  

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

