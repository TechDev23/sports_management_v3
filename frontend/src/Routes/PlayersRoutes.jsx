import Players from "../Layouts/Players";
import ErrorPage from "../error-page";
import UploadDocs from "../Pages/User/VerificationProcess/UploadDocs";

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
                }
            ]
        }
    ]
}