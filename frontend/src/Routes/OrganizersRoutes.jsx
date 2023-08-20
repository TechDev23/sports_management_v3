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

import { AllAddedGames } from "../Components/Organizer";

import { 
  Step1, 
  Step2, 
  Step3, 
  Step4, 
  Step5 
} from "../Components/Organizer/Steps";


import {
  Step1Update,
  Step2Update,
  Step3Update,
  Step4Update,
  Step5Update
} from "../Components/Organizer/InProgress"
import { Certifications, Details, Participants, Rosters, SetOperations } from "../Components/Organizer/InProgress/StepOperations";

export const OrganizerRoutes = {
  path: "o/",
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
              path: "new-tournament/",
              element: <TournamentTracking/>,
              children: [
                {
                  path: "step1",
                  element: <Step1/>
                },
                {
                  path: "step2",
                  element: <Step2/>
                },
                {
                  path: "step3",
                  element: <Step3/>
                },
                {
                  path: "added-games",
                  element: <AllAddedGames/>
                },
                {
                  path: "step4",
                  element: <Step4/>
                },
                {
                  path: "step5",
                  element: <Step5/>
                }
              ],
            },
            {
              path: "current/",
              element: <InProgress/>,
              children: [
                {
                  path: "step1",
                  element: <Step1Update/>
                },
                {
                  path: "step2",
                  element: <Step2Update/>
                },
                {
                  path: "step3",
                  element: <Step3Update/>
                },
                {
                  path: "step4",
                  element: <Step4Update/>
                },
                {
                  path: "step5/",
                  element: <Step5Update/>,
                  children: [
                    {
                      path: "details",
                      element: <Details/>
                    },
                    {
                      path: "rosters",
                      element: <Rosters/>
                    },
                    {
                      path: "participants",
                      element: <Participants/>
                    },
                    {
                      path: "operations",
                      element: <SetOperations/>
                    },
                    {
                      path: "certifications",
                      element: <Certifications/>
                    }
                  ]
                },
              ]
            },
            {
              path: "teams",
              element: <Teams/>
            },
            {
              path: "messages",
              element: <Messages/>
            },

          // ],
        // },
  ],
};
