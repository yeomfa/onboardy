import { useState } from 'react';
import { AuthContext } from './AuthContext';

export const AuthProvider = function ({ children }) {
  const [token, setToken] = useState(localStorage.getItem('auth_token'));

  const updateIsAuthenticated = (newToken) => {
    if (newToken) {
      localStorage.setItem('auth_token', newToken);
      setToken(newToken);
    } else {
      localStorage.removeItem('auth_token');
      setToken(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated: !!token,
        updateIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
