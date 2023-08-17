// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";

const BASE_URL = "http://127.0.0.1:8000";

const cookie = new Cookies();
// const token = cookie.get("jwt_auth_token") || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTIyNDg2OTMsInN1YiI6Ild2Y3hlaEM0VTQifQ.a0tK3yUlrfRZwLMonHjNTyD9aJoL0g_Y1Sukd1mAhuA";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTIyNzI5MDUsInN1YiI6Ild2Y3hlaEM0VTQifQ.DPoYgdlSKjkZb5ZqUZXa4imGSDEcrubCIegu8udclLY";

export const tournamentApi = createApi({
  reducerPath: "tournamentApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/` }),
  tagTypes: ["Posts"],
  endpoints: (build) => ({

    getAllTrnmts: build.query({
      query: ()=>({
        url: `tournaments/?page=0&limit=5&token=${token}`
      })
    }),

    getTournamentGames: build.query({
      query(tournament_id) {
        return {
          url: `tournaments/${tournament_id}/games?token=${token}`,
        };
      },
    }),

  }),
});

export const { useGetTournamentGamesQuery, useGetAllTrnmtsQuery } = tournamentApi;
