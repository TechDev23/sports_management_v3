import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userApi } from "./userApi";
import { setUser } from "../features/userSlice";

const BASE_URL = "http://127.0.0.1:8000";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/`,
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query(data) {
        return {
          url: "users/register",
          method: "POST",
          body: data,
        };
      },
    }),
    loginUser: builder.mutation({
      query(data) {
        return {
          url: `users/login`,
          method: "post",
          body: data
        };
      },
      transformResponse: (result) => result, // This property allows us to manipulate the data returned by a query or mutation before it hits the cache.
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser({ user: data, token: data.access_token }));
          // Save user data to localStorage
          localStorage.setItem('userData', JSON.stringify(data));
        } catch (error) {
          console.log(`Error while getMe ${error}`);
        }
      },
    }),

    verifyEmail: builder.mutation({
      query({ verificationCode }) {
        return {
          url: `verifyemail/${verificationCode}`,
          method: "GET",
        };
      },
    }),
    logoutUser: builder.mutation({
      query() {
        return {
          url: "logout",
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
