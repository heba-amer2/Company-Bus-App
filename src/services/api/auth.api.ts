import { api } from '../../../redux/api';

export const authApis = api.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: body => ({
        url: 'auth/login',
        method: 'POST',
        body: JSON.stringify(body),
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: 'auth/logout',
        method: 'POST',
      }),
    }),
    me: builder.query({
      query: () => ({
        url: 'auth/me',
        method: 'GET',
      }),
    }),
  }),
});
export const { useLoginMutation, useLogoutMutation, useMeQuery } = authApis;
