// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";

const BASE_URL = "http://127.0.0.1:8000";

const cookie = new Cookies();
const token = cookie.get("jwt_auth_token");

export const orgApi = createApi({
  reducerPath: "orgApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/` }),
  tagTypes: ["Posts"],
  endpoints: (build) => ({
    createTournament: build.mutation({
      query(body) {
        return {
          url: `organizer/tournament?token=${token}`,
          method: "post",
          body,
        };
      },
    }),

    updateTournament: build.mutation({
      query(data) {
        return {
          url: `organizer/tournament?token=${data.token}`,
          method: "patch",
          body: data,
        };
      },
    }),

    addGamesTnmt: build.mutation({
      query(data) {
        return {
          url: `organizer/tournament/${data.tour_id}/games?token=${data.token}`,
          method: "post",
          body: data,
        };
      },
    }),

    updateTnmtGame: build.mutation({
      query(data) {
        return {
          url: `organizer/tournament/${data.tournament_id}/games?game_id=${data.game_id}&token=${data.token}`,
          method: "patch",
          body: data.req_body,
        };
      },
    }),

    addGrndUmpire: build.mutation({
      query(data) {
        return {
          url: `organizer/tournament/${data.tournament_id}/games/${data.game_id}?token=${data.token}`,
          method: "post",
          body: data.req_body,
        };
      },
    }),

    getRgstrdTeams: build.mutation({
      query(data) {
        return {
          url: `organizer/tournament/${data.tournament_id}/games/${data.game_id}/teams?token=${data.token}`,
          method: "get",
          body: data.req_body,
        };
      },
    }),

    teamsApproval: build.mutation({
      query(data) {
        return {
          url: `organizer/tournament/${data.tournament_id}/games/${data.game_id}/teams/verification?team_id=${data.team_id}&approve=${data.is_approve}&token=${data.token}`,
          method: "post",
        };
      },
    }),
  }),
});

export const { useCreateTournamentMutation } = orgApi;
