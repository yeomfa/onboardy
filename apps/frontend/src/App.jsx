import { Toast } from '@heroui/react';
import { AuthProvider } from './shared/auth/AuthProvider';
import './App.css';
import { AppRouter } from './routes/AppRouter';

function App() {
  return (
    <>
      <AuthProvider>
        <Toast.Provider placement="top end" />
        <AppRouter />
      </AuthProvider>
    </>
  );
}

export default App;
