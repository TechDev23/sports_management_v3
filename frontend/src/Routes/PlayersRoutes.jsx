import Dashboard from "../Components/Organizer/Dashboard";
import Players from "../Layouts/Players";
import ErrorPage from "../error-page";


export const PlayerRoutes =  {
    path: "player/",
    element: <Players />,
    errorElement: <ErrorPage/>,
    children:[
        {
            path: "dashboard",
            element: <Dashboard />,
        },
    ]
}