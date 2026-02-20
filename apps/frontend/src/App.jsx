import { Toast } from '@heroui/react';
import './App.css';
import { AppRouter } from './routes/AppRouter';

function App() {
  return (
    <>
      <Toast.Provider placement="top end" />
      <AppRouter />
    </>
  );
}

export default App;
