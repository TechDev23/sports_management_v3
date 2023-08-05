import Discover from "../Layouts/Homepage";
import ErrorPage from "../error-page";
import { Login, Reg, Register } from "../Pages/auth"
// import { Login, Register } from "../Pages/Player";
import MainScreen from "../Components/User/MainScreen.jsx";
// import UploadDocs from "../Pages/User/VerificationProcess/UploadDocs";

import { UploadDocs, UploadImage, Profile } from "../Pages/User";


import { PlayerRoutes } from "./PlayersRoutes"
import { OrganizerRoutes } from "./OrganizersRoutes";
import VProgress from "../Pages/User/VerificationProcess/VProgress";

// import RequireAuth from "../Pages/Organizer/index";

export const UserRoutes = {
    
    path: "/user",
    element: <Discover/>,
    errorElement: <ErrorPage/>,
    children: [
        {
            path: "login",
            element: <Login/>,
        },
        {
            path: "register",
            element: <Reg/>
        },
        {
            // element: <RequireAuth allowedRoles={['user']}/>,
            children: [
                {
                    path: 'upload',
                    element: <UploadDocs/>
                },
                {
                    path: 'verify-photo',
                    element: <UploadImage/>
                },
                {
                    path: "v-progress",
                    element: <VProgress/>
                },
                {
                    path: 'main',
                    element: <MainScreen/>
                },
                
            ],
            
        }
    ]
    
}