import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { Button } from '@heroui/react';

function Navbar() {
  const { isAuthenticated, updateIsAuthenticated } = useContext(AuthContext);

  const handleLogout = () => {
    updateIsAuthenticated(null);
  };

  return (
    <nav className="bg-white border-b border-gray-200 h-16 flex items-center">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/onboardy-logo.svg" alt="Onboardy Logo" className="h-9" />
        </Link>
        <div>
          <NavLink to="/" className="text-gray-600 hover:text-brand mx-2">
            Home
          </NavLink>

          {!isAuthenticated && (
            <NavLink
              to="/registration"
              className="text-gray-600 hover:text-brand mx-2"
            >
              Registration
            </NavLink>
          )}

          {isAuthenticated && (
            <>
              <NavLink
                to="/details"
                className="text-gray-600 hover:text-brand mx-2"
              >
                Details
              </NavLink>
              <Button
                onPress={handleLogout}
                className="text-accent bg-transparent"
              >
                Logout
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
