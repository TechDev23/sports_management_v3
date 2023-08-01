import Organizers from "../Layouts/Organizers";
import ErrorPage from "../error-page";

import { Dashboard } from "../Components/Organizer";

import TournamentTracking from "../Pages/Organizer/tournament-tracking/TournamentTracking";

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
            {
              path: "tournament-tracking",
              element: <TournamentTracking/>
            }

          // ],
        // },
  ],
};
