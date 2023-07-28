import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PlayerRoutes } from "./Routes/PlayersRoutes";
import { OrganizerRoutes } from "./Routes/OrganizersRoutes";
import { UserRoutes } from "./Routes/UserRoutes";
import RequireAuth from "./Pages/Player/auth/RequireAuth";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PlayerProfile, Register } from "./Pages/Player";
import { useEffect } from "react";
import Discover from "./Layouts/Discover";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  // global routes
  {
    path: "/",
    element: <Discover/>,
    errorElement: <ErrorPage/>
  },

  // protected routes
  UserRoutes,
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
