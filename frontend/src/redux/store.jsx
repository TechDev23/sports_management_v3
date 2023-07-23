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
import userReducer from './features/userSlice';
import orgReducer from './features/orgSlice';
import sidebarReducer from './SidebarSlice';
import { useDispatch, useSelector } from 'react-redux';
import { organizerAuthApi } from './api/organizerAuthApi';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [organizerAuthApi.reducerPath]: organizerAuthApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    userState: userReducer,
    orgState: orgReducer,
    sidebar: sidebarReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([authApi.middleware, userApi.middleware]),
});


export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;


