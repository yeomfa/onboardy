import {
  LayoutIcon,
  ShieldCheckIcon,
  SpeedometerIcon,
} from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

export function Hero() {
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
      <Link
        to="/details"
        className="inline-block bg-brand text-white px-6 py-3 rounded-xl transition duration-300"
      >
        Get Started
      </Link>

      <ul className="flex mt-20 justify-center items-center gap-8">
        <li className="flex items-center justify-center">
          <SpeedometerIcon className="w-6 h-6 mr-2" />
          <span>Real-time updates</span>
        </li>
        <li className="flex items-center justify-center">
          <LayoutIcon className="w-6 h-6 mr-2" />
          <span>Easy to use interface</span>
        </li>
        <li className="flex items-center justify-center">
          <ShieldCheckIcon className="w-6 h-6 mr-2" />
          <span>Secure and reliable</span>
        </li>
      </ul>
    </div>
  );
}
