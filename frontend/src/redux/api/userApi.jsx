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
    uploadDoc: builder.mutation({
      query(data) {
        console.log("data from upload docs", data)
        return {
          url: `users/document?token=${data.token}`,
          body: data,
          method: 'post'
        };
      },
    }),

  }),
});

export const {
  useUploadDocMutation, 
} = userApi;

