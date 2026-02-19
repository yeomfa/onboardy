import { Navigate, Outlet } from 'react-router-dom';

export function ProtectedRoute({ isAllowed, redirectTo = '/registration' }) {
  if (!isAllowed) return <Navigate to={redirectTo} />;

  return <Outlet />;
}
