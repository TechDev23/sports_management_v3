import Players from "../Layouts/Players";
import ErrorPage from "../error-page";
import { Login, Register, PlayerProfile, RequireAuth } from '../Pages/Player/index'
import UploadDocs from "../Components/Player/UploadDocs";

export const PlayerRoutes =  {
    path: "player/",
    element:<Players />,
    errorElement: <ErrorPage/>,
    children:[
        {
            path: "login",
            element: <Login />, 
        },
        {
            path: "register",
            element: <Register />,
        },
        {
            element:<RequireAuth allowedRoles={['player']}/>,
            children:[
                {
                    path:'me',
                    element:<PlayerProfile/>
                },
                {
                    path:'docs',
                    element:<UploadDocs/>
                }
            ]
        }
    ]
}