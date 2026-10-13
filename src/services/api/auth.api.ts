import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { LoginResponse } from '../../types/LoginResponse';
import { LoginSchemaType } from '../../screens/auth/LoginSchema';

export const authApi = createApi({
  reducerPath: "authApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://18.175.119.106:8080/api/",
  }),

  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse,LoginSchemaType>({
      query: (data) => ({
        url: "auth/login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;