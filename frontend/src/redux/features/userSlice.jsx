// import { createSlice } from "@reduxjs/toolkit";

// const userSlice = createSlice({
//     name:'userSlice',
//     initialState:{ user: null, token: null }, // token = access token
//     reducers: {
//         setCredentials: (state, action)=>{
//             const { user, access_token } = action.payload
//             state.user = user
//             state.token = access_token
//         },
//         logOut: (state, action) =>{
//             state.user = null
//             state.token = null
//         }
//     },
// })


// export const { setCredentials, logOut } = userSlice.actions

// export default userSlice.reducer


import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  user: null,
  token: null
};

export const userSlice = createSlice({
  initialState,
  name: 'userSlice',
  reducers: {
    logout: () => initialState,
    
    setUser: (state, action) => {
      const { user, token } = action.payload
      state.user = user
      state.token = token
    },
  },
});

export const { logout, setUser } = userSlice.actions;

export const selectCurrentUser = (state) =>state.userSlice.user
export default userSlice.reducer;