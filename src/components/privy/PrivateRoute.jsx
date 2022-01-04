import { Routes, Route, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function PrivateRoute({ children, ...rest }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  console.log('USER:',user, 'REST PARAMS:',rest, 'CHILDREN', children);
  return (
    <>
    <Routes>
      <Route
      {...user ? {...rest} : navigate('/')}
      // {...rest}
      // render={user ? (rest) : (
      //     navigate('/')
      // )}
      />
    </Routes>        
    </>
  );
}

export default PrivateRoute;