// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";

const BASE_URL = "http://127.0.0.1:8000";

const cookie = new Cookies();
const token = cookie.get("jwt_auth_token");

export const tournamentApi = createApi({
  reducerPath: "tournamentApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/` }),
  tagTypes: ["Posts"],
  endpoints: (build) => ({

    getTournamentGames: build.query({
      query(body) {
        return {
          url: `tournaments/${body.tournament_id}/games?token=${token}`,
          method: "post",
          body,
        };
      },
    }),

  }),
});

export const { useGetTournamentGamesQuery } = tournamentApi;
