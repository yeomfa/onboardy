import { Alert, Button, Input, Label } from '@heroui/react';
import { InfoIcon } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

export function Registration() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-12 px-4 bg-gray-50">
      <div className="w-full max-w-md bg-white border border-gray-200 border-l-accent border-b-accent border-l-2 border-b-2 rounded-2xl p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Service registration
          </h1>
          <img src="/onboardy.svg" alt="Onboardy Logo" className="w-10 h-10" />
        </div>
        <form className="flex flex-col gap-4">
          <Label htmlFor="identification-number">Identification number</Label>
          <Input
            id="identification-number"
            min={0}
            placeholder="Enter the identification number"
            type="number"
          />

          <div className="flex justify-end items-center gap-4 mt-6">
            <Link to={'/'} className="text-gray-700">
              Go back
            </Link>
            <Button>Continue</Button>
          </div>
        </form>
      </div>
      {/* Information */}
      <div className="w-full max-w-xl">
        <Alert status="accent">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>Important Information</Alert.Title>
            <Alert.Description>
              Enter the NIT of the individual or legal entity for whom you are
              completing the procedure, without including the verification
              number. Then select <b>"Continue"</b> to complete your
              application.
            </Alert.Description>
          </Alert.Content>
        </Alert>
      </div>
    </div>
  );
}
