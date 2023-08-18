// store.js
// import { configureStore } from '@reduxjs/toolkit';
// import sidebarReducer from './SidebarSlice';
// import { apiSlice } from './api/apiSlice';
// import userSlice from './features/userSlice';
// import { authApi } from './api/authApi';


// const store = configureStore({
//   reducer: {
//     userSlice: userSlice,
//     [authApi.reducerPath]: authApi.reducer,
//     sidebar: sidebarReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware().concat(apiSlice.middleware),
//   devTools: true
// });

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './api/authApi';
import { userApi } from './api/userApi';
import { orgApi } from './api/organizer/orgApi';
import { tournamentApi } from './api/organizer/tournamentApi';
import userReducer from './features/userSlice';
import orgReducer from './features/orgSlice';
import sidebarReducer from './features/SidebarSlice';
import tournamentReducer from './features/tournamentSlice';
import { useDispatch, useSelector } from 'react-redux';


export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [orgApi.reducerPath]: orgApi.reducer,
    [tournamentApi.reducerPath]: tournamentApi.reducer,
    userState: userReducer,
    orgState: orgReducer,
    sidebar: sidebarReducer,
    tournament: tournamentReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([tournamentApi.middleware, authApi.middleware, userApi.middleware, orgApi.middleware]),
});


export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;


