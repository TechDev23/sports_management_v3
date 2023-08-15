import Organizers from "../Layouts/Organizers";
import ErrorPage from "../error-page";


import { 
  InProgress,
  TournamentTracking, 
  Tournaments 
} from "../Pages/Organizer/tournament-tracking";
import { 
  Dashboard, 
  Calendar, 
  Teams,
  Messages
} from "../Pages/Organizer";

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
              path: "calendar",
              element: <Calendar/>
            },
            {
              path: "tournaments",
              element: <Tournaments/>
            },
            {
              path: "new-tournament",
              element: <TournamentTracking/>
            },
            {
              path: "current",
              element: <InProgress/>
            },
            {
              path: "teams",
              element: <Teams/>
            },
            {
              path: "messages",
              element: <Messages/>
            }

          // ],
        // },
  ],
};
