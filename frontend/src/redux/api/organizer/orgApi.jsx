// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";

const BASE_URL = "http://127.0.0.1:8000";

const cookie = new Cookies();
// const token = cookie.get("jwt_auth_token");
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTI1MzEyODksInN1YiI6Imp1RDNSTm52RUEifQ.BvmkdnfQrxRvMiP0AoTegNRul6C5jDhK9A_F7jWfhMQ"

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

    addGameToTnmt: build.mutation({
      query(data) {
        return {
          url: `organizer/tournament/${data.tournament_id}/games?token=${token}`,
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

    getRgstrdTeams: build.query({
      query(data) {
        return {
          url: `organizer/tournament/${data.tournament_id}/games/${data.tournament_game_id}/teams?token=${data.token}`,
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


    // Fixtures api's starts
    getFixtures: build.query({
      query(data){
        return{
          url:`organizer/tournament/${data.tournament_id}/games/${data.tournament_game_id}/fixtures/?game_id=${data.game_id}&token=${token}`
        }
      }
    }),

    createFixture: build.mutation({
      query(data){
        return{
          url:`organizer/tournament/${data.tournament_id}/games/${data.tournament_game_id}/fixtures/?game_id=${data.game_id}&tournament_type=${data.tournament_type}&token=${token}`,
          method:'post',
        }
      }
    }),
    

    postMatchResult: build.mutation({
      query(data){
        return{
          url:`organizer/tournament/${data.tournament_id}/games/${data.tournament_game_id}/fixtures/${data.fixture_id}/results?token=${token}`,
          method:'post',
          body: data
          // here request body is like below
          // {
          //   "winner_id": "14",
          //   "points": 0,
          //   "nr": 0
          // }
        }
      }
    }),

    updateLosingTeamPoints: build.mutation({
      query(data){
        return{
          url:`organizer/tournament/${data.tournament_id}/games/${data.tournament_game_id}/fixtures/${data.fixture_id}/lost?token=${token}`,
          method:'post',
        }
      }
    }),


    // Fixtures api's ends


  }),
});

export const { useCreateTournamentMutation, 
  useAddGameToTnmtMutation,
  useGetRgstrdTeamsQuery,
  useGetFixturesQuery
} = orgApi;
