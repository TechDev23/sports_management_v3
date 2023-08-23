import Players from "../Layouts/Players";
import ErrorPage from "../error-page";

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
                }
            ]
        }
    ]
}