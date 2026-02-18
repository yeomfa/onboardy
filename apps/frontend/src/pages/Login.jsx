import { Link } from 'react-router-dom';

export function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md bg-white border border-gray-200 border-l-brand border-l-4 rounded-2xl p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Login</h1>
          <img src="/onboardy.svg" alt="Onboardy Logo" className="w-10 h-10" />
        </div>
        <form className="flex flex-col gap-4">
          <label htmlFor="companyId" className="text-gray-700 font-medium">
            Company ID
          </label>
          <input
            type="number"
            name="companyId"
            placeholder="Enter your company ID"
            className="border border-gray-300 rounded-md text-gray-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
          />

          <span className="text-brand text-right hover:underline hover:cursor-pointer">
            Forgot Company ID?
          </span>

          <div className="flex justify-end gap-4 mt-6">
            <Link
              to={'/'}
              className="text-gray-700 px-4 py-2 rounded-md transition duration-300"
            >
              Go back
            </Link>
            <button
              type="submit"
              className="bg-brand text-white px-4 py-2 rounded-md transition duration-300"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
