import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

const BASE_URL = 'http://127.0.0.1:8000'

export const orgTournaments = createApi({
    reducerPath:'orgTournaments',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/`
    }),
    tagTypes:['Player'],
    endpoints: (builder) => ({
        createTournament: builder.mutation({
            query(data) {
                return {
                    url: `organizer/tournament?token=${data.token}`,
                    method: 'post'
                }
            }
        }),

        updateTournament: builder.mutation({
            query(data) {
                return {
                    url: `organizer/tournament?token=${data.token}`,
                    method: 'patch',
                    body: data
                }
            }
        }),

        addGamesTnmt: builder.mutation({
            query(data) {
                return {
                    url: `organizer/tournament/${data.tour_id}/games?token=${data.token}`, 
                    method: 'post',
                    body: data
                }
            }
        }),

        updateTnmtGame: builder.mutation({
            query(data) {
                return {
                    url: `organizer/tournament/${data.tournament_id}/games?game_id=${data.game_id}&token=${data.token}`, 
                    method: 'patch',
                    body: data.req_body
                }
            }
        }),

        addGrndUmpire: builder.mutation({
            query(data) {
                return {
                    url: `organizer/tournament/${data.tournament_id}/games/${data.game_id}?token=${data.token}`,
                    method: 'post',
                    body: data.req_body
                }
            }
        }),

        getRgstrdTeams: builder.mutation({
            query(data) {
                return {
                    url: `organizer/tournament/${data.tournament_id}/games/${data.game_id}/teams?token=${data.token}`,
                    method: 'get',
                    body: data.req_body
                }
            }
        }),

        teamsApproval: builder.mutation({
            query(data) {
                return {
                    url: `organizer/tournament/${data.tournament_id}/games/${data.game_id}/teams/verification?team_id=${data.team_id}&approve=${data.is_approve}&token=${data.token}`,
                    method: 'post'
                }
            }
        }),

    })

})