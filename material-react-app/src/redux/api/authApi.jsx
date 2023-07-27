import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { userApi } from './userApi';

const BASE_URL = 'http://127.0.0.1:8000'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/`,
  }),
  endpoints: (builder) => ({
    registerUser:builder.mutation({
      query(data) {
        return {
          url: 'players/register',
          method: 'POST',
          body: data,
        };
      },
    }),
    loginUser:builder.mutation({
      query(credentials) {
        return {
          url: `players/login`,
          method: 'post',
          body: credentials,
          // credentials:'include'
        };
      },
      // once user logged in automatically fetch user profile getMe endpoint
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(userApi.endpoints.getMe.initiate(args));
        } catch (error) {
          console.log(`Error while getMe ${error}`)
        }
      },
    }),
    verifyEmail:builder.mutation({
      query({ verificationCode }) {
        return {
          url: `verifyemail/${verificationCode}`,
          method: 'GET',
        };
      },
    }),
    logoutUser:builder.mutation({
      query() {
        return {
          url: 'logout',
          // credentials: 'include',
        };
      },
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogoutUserMutation,
  useVerifyEmailMutation,
} = authApi;
