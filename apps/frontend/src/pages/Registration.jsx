import { InfoIcon } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

export function Registration() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-180px)] gap-12 px-4">
      <div className="w-full max-w-md bg-white border border-gray-200 border-l-brand border-b-brand border-l-4 border-b-4 rounded-2xl p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Service registration
          </h1>
          <img src="/onboardy.svg" alt="Onboardy Logo" className="w-10 h-10" />
        </div>
        <form className="flex flex-col gap-4">
          <label htmlFor="companyId" className="text-gray-700 font-medium">
            Identification number
          </label>
          <input
            type="number"
            name="identificationNumber"
            placeholder="Enter the identification number"
            className="border border-gray-300 rounded-md text-gray-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
          />

          <span className="text-brand text-right hover:underline hover:cursor-pointer">
            Forgot identification number?
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
              Continue
            </button>
          </div>
        </form>
      </div>
      {/* Information */}
      <div className="flex gap-3 items-center bg-blue-500/20 text-blue-900 p-3 rounded-xl max-w-2xl">
        <InfoIcon className="w-10 h-10 mx-auto" />
        <p className="text-sm text-left">
          Enter the NIT of the individual or legal entity for whom you are
          completing the procedure, without including the verification number.
          Then select Continue to complete your application.
        </p>
      </div>
    </div>
  );
}
