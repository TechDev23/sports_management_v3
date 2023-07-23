import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { userApi } from './userApi';

const BASE_URL = 'http://127.0.0.1:8000'

export const organizerAuthApi = createApi({
  reducerPath: 'organizerAuthApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/`,
  }),
  endpoints: (builder) => ({
    registerOrganizer:builder.mutation({
      query(data) {
        return {
          url: 'organizer/register',
          method: 'post',
          body: data,
        };
      },
    }),
    loginOrganizer:builder.mutation({
      query(credentials) {
        return {
          url: `organizer/login`,
          method: 'post',
          body: credentials,
          credentials:'include'
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
    logoutOrganizer:builder.mutation({
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
  useLoginOrganizerMutation,
  useRegisterOrganizerMutation,
  useLogoutOrganizerMutation,
  useVerifyEmailMutation,
} = organizerAuthApi;
