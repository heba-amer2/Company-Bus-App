import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { SprigError } from '../src/types/SpringError';
import { logout } from './slices/auth';

export type BackEndSpringError = Omit<FetchBaseQueryError, 'data'> & {
  data?: SprigError;
};

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://18.175.119.106:8080/api/',
});

export const baseQueryWithInterceptor: BaseQueryFn<
  string | FetchArgs,
  unknown,
  BackEndSpringError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error?.status === 401) {
    api.dispatch(logout());
  }
  if (result.error) {
    return {
      ...result,
      error: {
        ...result.error,
        data: result.error.data as SprigError,
      },
    };
  }

  return result;
};
