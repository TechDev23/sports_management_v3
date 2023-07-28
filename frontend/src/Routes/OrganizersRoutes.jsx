import Organizers from "../Layouts/Organizers";
import Discover from "../Layouts/Discover";
import ErrorPage from "../error-page";
import {
  OrganizerProfile,
  Login,
  Register,
  RequireAuth,
} from "../Pages/Organizer/index";
import { Dashboard } from "../Components/Organizer";

export const OrganizerRoutes = {
  path: "organizer/",
  element: <Discover />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      element: <Organizers />,
      children: [
        // {
          // element: <RequireAuth allowedRoles={["organizer"]} />,
          // children: [
            {
              path: "me",
              element: <OrganizerProfile />,
            },
            {
              path: "dashboard",
              element: <Dashboard />,
            },
          // ],
        // },
      ],
    },
  ],
};
