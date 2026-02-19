import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  // TODO: Replace with real authentication logic
  const isAuthenticated = true;

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
              <span
                to="/details"
                className="text-gray-600 hover:text-brand mx-2"
              >
                Logout
              </span>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
