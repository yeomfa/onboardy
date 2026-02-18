import { Navigate, Route, Routes } from 'react-router-dom';
import { DetailForm, Hero, Login, NotFound } from '../pages';
import { MainLayout } from '../shared/components/layouts/MainLayout';
import { ProtectedRoute } from './ProtectedRoute';

export function AppRouter() {
  // TODO: Replace with real authentication logic
  const isAuthenticated = true;

  return (
    <Routes>
      <Route
        path="/login"
        element={!isAuthenticated ? <Login /> : <Navigate to="/" />}
      />

      <Route element={<MainLayout />}>
        <Route path="/" element={<Hero />} />

        <Route element={<ProtectedRoute isAllowed={isAuthenticated} />}>
          <Route path="/details" element={<DetailForm />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
