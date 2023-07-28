import Discover from "../Layouts/Discover";
import ErrorPage from "../error-page";
import {Login, Register} from "../Pages/Organizer/index";
import MainScreen from "../Components/User/MainScreen.jsx";
import UploadDocs from "../Components/Player/UploadDocs";
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
            element: <Register/>
        },
        {
            // element: <RequireAuth allowedRoles={['user']}/>,
            children: [
                {
                    path: 'upload',
                    element: <UploadDocs/>
                },
                {
                    path: 'main',
                    element: <MainScreen/>
                }
            ]
        }
    ]
    
}