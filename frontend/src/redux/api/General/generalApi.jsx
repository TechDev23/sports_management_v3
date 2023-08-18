import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://127.0.0.1:8000";

export const generalApi = createApi({
  reducerPath: "generalApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/general/`,
  }),
  endpoints: (builder) => ({

    getGames: builder.query({
      query() {
        return {
          url: "get_all_games",
        };
      },
    }),


  }),
});

export const {
    useGetGamesQuery
} = generalApi;
