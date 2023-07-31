import Organizers from "../Layouts/Organizers";
import Discover from "../Layouts/Homepage";
import ErrorPage from "../error-page";

import { Dashboard } from "../Components/Organizer";

export const OrganizerRoutes = {
  path: "o/",
  // element: <Discover />,
  element: <Organizers />,
  errorElement: <ErrorPage />,
  children: [
        // {
          // element: <RequireAuth allowedRoles={["organizer"]} />,
          // children: [
            {
              path: "dashboard",
              element: <Dashboard />,
            },
          // ],
        // },
  ],
};
