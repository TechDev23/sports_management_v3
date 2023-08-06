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
    getDoc: builder.mutation({
      query() {
        return {
          url: `admin/documents`,
          method: 'get'
        };
      },
    }),

    approveDoc: builder.mutation({
      query(data) {
        return {
          url: `admin/documents?document_id=${data.docId}&is_approve=${data.is_approve}&user_id=${data.userId}`,
          method: 'post'
        };
      },
    }),
    
  }),
});

export const {
  useGetDocMutation, 
  useApproveDocMutation,
} = userApi;

