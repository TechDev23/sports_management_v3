import Dashboard from "../Components/Organizer/Dashboard";
import Organizers from "../Layouts/Organizers";
import ErrorPage from "../error-page";

export const OrganizerRoutes =  {
    path: "organizer/",
    element: <Organizers />,
    errorElement: <ErrorPage/>,
    children:[
        {
            path: "dashboard",
            element: <Dashboard />,
        },
    ]
}