import { Button } from '@heroui/react';
import {
  LayoutIcon,
  ShieldCheckIcon,
  SpeedometerIcon,
} from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

export function Hero() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-180px)] text-center px-4">
      <img
        src="/onboardy-logo.svg"
        alt="Onboardy Logo"
        className="mx-auto mb-4"
      />
      <p className="text-lg text-gray-700 mb-8">
        Your all-in-one solution to handle your company information.
      </p>

      <Button onPress={() => navigate('/registration')} size="lg">
        Get Started
      </Button>

      <ul className="flex mt-20 justify-center items-center gap-8">
        <li className="flex items-center justify-center bg-gray-50 rounded-xl px-4 py-2">
          <SpeedometerIcon className="w-6 h-6 mr-2" />
          <span>Real-time updates</span>
        </li>
        <li className="flex items-center justify-center bg-gray-50 rounded-xl px-4 py-2">
          <LayoutIcon className="w-6 h-6 mr-2" />
          <span>Easy to use interface</span>
        </li>
        <li className="flex items-center justify-center bg-gray-50 rounded-xl px-4 py-2">
          <ShieldCheckIcon className="w-6 h-6 mr-2" />
          <span>Secure and reliable</span>
        </li>
      </ul>
    </div>
  );
}
