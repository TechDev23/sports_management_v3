import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PlayerRoutes } from "./Routes/PlayersRoutes";
import { OrganizerRoutes } from "./Routes/OrganizersRoutes";
import Discover from "./Layouts/Discover"
import ErrorPage from "./error-page"
import Login from "./Pages/Player/auth/Login";
import RequireAuth from "./Pages/Player/auth/RequireAuth";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PlayerProfile } from "./Pages/Player";
import { useEffect } from "react";

const router = createBrowserRouter([
  // global routes
  {
    path: "/",
    element: <Discover/>,
    errorElement: <ErrorPage/>,
  },
  {
    path:'/login',
    element: <Login/>,
    errorElement: <ErrorPage/>
  },
  OrganizerRoutes,
  PlayerRoutes
]);

function App() {
  
  return (
    <>
  
    <RouterProvider router={router}/>
    <ToastContainer />
    </>
  );
}

export default App;
