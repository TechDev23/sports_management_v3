import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PlayerRoutes } from "./Routes/PlayersRoutes";
import { OrganizerRoutes } from "./Routes/OrganizersRoutes";
import Discover from "./Layouts/Discover"
import ErrorPage from "./error-page"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Discover/>,
    errorElement: <ErrorPage/>,
  },

  OrganizerRoutes,
  PlayerRoutes
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
