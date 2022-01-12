import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function PrivateRoute({ children, ...rest }) {
  const { user } = useAuth();

  // return (user ? children : useHistory.push('/home'))
  return (user ? children : <Navigate to= '/home' />)      
}

export default PrivateRoute;