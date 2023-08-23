import Players from "../Layouts/Players";
import ErrorPage from "../error-page";
import { Dashboard } from "../Pages/Player";
 import { Open } from "../Pages/Player";
 import { Upcoming } from  "../Pages/Player";
 import { Info } from "../Pages/Player";
 import { Application } from "../Pages/Player";

import UploadDocs from "../Pages/User/VerificationProcess/UploadDocs";
import { 
    PDashboard,
    Calendar,
    TournamentTracking,
    Teams, 
    Messages
} from "../Pages/Player";

export const PlayerRoutes =  {
    path: "p/",
    element:<Players />,
    errorElement: <ErrorPage/>,
    children:[
        {
            // element:<RequireAuth allowedRoles={['player']}/>,
            children:[
                {
                    path:'docs',
                    element:<UploadDocs/>
                },
                {
                    path: 'dashboard',
                    element: <PDashboard/>
                },
                {
                    path: 'calendar',
                    element: <Calendar/>
                },
                {
                    path: 'tournaments',
                    element: <TournamentTracking/>
                },
                {
                    path: 'messages',
                    element: <Messages/>
                },
                {
                    path: 'teams',
                    element: <Teams/>
                },
                {
                    path:'games',
                    element:<Dashboard/>
                },
                {
                    path:'open',
                    element:<Open/>
                },
                {
                    path:'upcoming',
                    element:<Upcoming/>
                },
                {
                    path:'info',
                    element:<Info/>
                },
                {
                    path:'apply',
                    element:<Application/>
                },
            ]
        }
    ]
}