import { Outlet } from 'react-router-dom';
import Navbar from '../ui/Navbar';

export function MainLayout() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
}
