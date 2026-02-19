import { InfoIcon } from '@phosphor-icons/react';

export function DetailForm() {
  return (
    <div className="">
      <div className="flex gap-3 items-center bg-blue-500/20 text-blue-900 p-3 rounded-xl text-left">
        <InfoIcon className="w-5 h-5 mx-auto" />
        <p className="text-sm">
          Enter the NIT of the individual or legal entity for whom you are
          completing the procedure, without including the verification number.
          Then select Continue to complete your application.
        </p>
      </div>
      <h1 className="text-2xl font-medium text-gray-800">Detail Form</h1>
    </div>
  );
}
