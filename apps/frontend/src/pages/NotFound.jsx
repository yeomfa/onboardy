import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <img src="/onboardy.svg" alt="Onboardy Logo" className="w-20 h-20" />
      <h1 className="text-4xl font-bold text-gray-800">
        Oops! Page not found.
      </h1>
      <Link to="/" className="text-brand hover:underline ml-2">
        Go back home
      </Link>
    </div>
  );
}
