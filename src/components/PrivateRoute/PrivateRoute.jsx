import { Navigate } from 'react-router-dom';

import { useAuth } from '~/hooks/useAuth';

export const PrivateRoute = ({ component, redirectTo = '/' }) => {
  const { currentUser, isRefreshing } = useAuth();
  const shouldRedirect = !currentUser && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : component;
};
