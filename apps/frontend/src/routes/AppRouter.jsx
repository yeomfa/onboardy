import { Navigate, Route, Routes } from 'react-router-dom';
import { DetailsForm, Hero, Registration, NotFound } from '../pages';
import { MainLayout } from '../shared/components/layouts/MainLayout';
import { ProtectedRoute } from './ProtectedRoute';
import { useContext } from 'react';
import { AuthContext } from '../shared/auth/AuthContext';

export function AppRouter() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <Routes>
      <Route
        path="/registration"
        element={
          !isAuthenticated ? <Registration /> : <Navigate to="/details" />
        }
      />

      <Route element={<MainLayout />}>
        <Route path="/" element={<Hero />} />

        <Route element={<ProtectedRoute isAllowed={isAuthenticated} />}>
          <Route path="/details" element={<DetailsForm />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
