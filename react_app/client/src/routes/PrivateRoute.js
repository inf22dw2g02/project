import { Route, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ element: Element }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Element />;
  } else {
    return <Navigate to="/signin" replace />;
  }
};

export default PrivateRoute;
