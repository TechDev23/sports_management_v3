// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";

const BASE_URL = "http://127.0.0.1:8000";

const cookie = new Cookies();
const token = cookie.get("jwt_auth_token");
// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTIyNzI5MDUsInN1YiI6Ild2Y3hlaEM0VTQifQ.DPoYgdlSKjkZb5ZqUZXa4imGSDEcrubCIegu8udclLY";

export const fixturesApi = createApi({
  reducerPath: "fixturesApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/fixtures/` }),
  tagTypes: ["Fixtures"],
  endpoints: (build) => ({

    getFixtureById: build.query({
      query: (fixtureId)=>({
        url: `id/${fixtureId}?token=${token}`
      })
    }),

    addScoreVtb: build.mutation({
      query(data) {
        return {
          url: `id/${data.fixtureId}/VTB/score?token=${token}`,
          method: 'post',
          body: data,
        };
      },
    }),

  }),
});

export const { useGetTournamentGamesQuery, useGetAllTrnmtsQuery } = fixturesApi;
