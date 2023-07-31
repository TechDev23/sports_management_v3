import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

const BASE_URL = 'http://127.0.0.1:8000'

export const playerApi = createApi({
    reducerPath:'playerApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/`
    }),
    tagTypes:['Player'],
    endpoints: (builder) => ({
        fetchAllPlayers: builder.mutation({
            query(data) {
                return {
                    url: `players/`,
                    method: 'get'
                }
            }
        }),

        addPlays: builder.mutation({
            query(data) {
                return {
                    url: `players/plays?game=${data.game_id}&user_id=${data.user_id}`,
                    method: 'post'
                }
            }
        })
    })

})