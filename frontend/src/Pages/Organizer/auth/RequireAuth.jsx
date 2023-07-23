import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Cookies from 'universal-cookie'

const RequireAuth = ({ allowedRoles })=> {
  const location = useLocation();
  const cookie = new Cookies()

  const token = cookie.get('jwt_auth_token')

  return (allowedRoles.includes('organizer') && true
  ) ? 
    <Outlet />
   : 
    <Navigate to='/organizer/login' state={{ from: location }} replace />
  ;
};

export default RequireAuth;

