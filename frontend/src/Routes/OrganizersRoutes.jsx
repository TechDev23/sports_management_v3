import Organizers from "../Layouts/Organizers";
import ErrorPage from "../error-page";

import { Dashboard } from "../Components/Organizer";

import { 
  TournamentTracking, 
  Tournaments 
} from "../Pages/Organizer/tournament-tracking";

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
              path: "tournaments",
              element: <Tournaments/>
            },
            {
              path: "new-tournament",
              element: <TournamentTracking/>
            }

          // ],
        // },
  ],
};
