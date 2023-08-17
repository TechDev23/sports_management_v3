import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";

const cookie = new Cookies();
const token = cookie.get("jwt_auth_token");

const BASE_URL = "http://127.0.0.1:8000";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/`,
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    uploadDoc: builder.mutation({
      query(data) {
        return {
          url: `users/document?token=${data.token}`,
          body: data,
          method: "post",
        };
      },
    }),

    updateUserDetails: builder.mutation({
      query(data) {
        return {
          url: `users/details?token=${token}`,
        };
      },
    }),


  }),
});

export const { useUploadDocMutation, useUpdateUserDetailsMutation } = userApi;
