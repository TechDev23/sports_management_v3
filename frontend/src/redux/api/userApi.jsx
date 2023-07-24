import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setUser } from '../features/userSlice';

const BASE_URL = 'http://127.0.0.1:8000'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/`,
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getMe: builder.query({
      query(data) {
        return {
          url: `/players/${data.email_id}`,
          // credentials: 'include',
        };
      },
      transformResponse: (result) =>result, // This property allows us to manipulate the data returned by a query or mutation before it hits the cache.
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const {data} = await queryFulfilled;
          dispatch(setUser({user: data}));
        } catch (error) {
          console.log(`Error while getMe ${error}`)
        }
      },
    }),

    checkToken: builder.mutation({
      query(data) {
        console.log("data from checkToken", data)
        return {
          url: `players/document?token=${data.token}`,
          body: data,
          method: 'post'
        };
      },
    }),

    uploadDoc: builder.mutation({
      query(data) {
        console.log("data from upload docs", data)
        return {
          url: `players/document?token=${data.token}`,
          body: data,
          method: 'post'
        };
      },
    }),

  }),
});

export const {
  useUploadDocMutation, 
  useCheckTokenMutation
} = userApi;
