import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PlayerRoutes } from "./Routes/PlayersRoutes";
import { OrganizerRoutes } from "./Routes/OrganizersRoutes";
import Discover from "./Layouts/Discover"
import ErrorPage from "./error-page"
import { Provider } from "react-redux";
import store from "./redux/store";

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
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  );
}

export default App;
