import { Alert, Button, Input, Label, Form } from '@heroui/react';
import { Link } from 'react-router-dom';
import { notify } from '../shared/helpers/notify';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../shared/auth/AuthContext';

export function Registration() {
  const { register, handleSubmit } = useForm();
  const { updateIsAuthenticated } = useContext(AuthContext);

  const onSubmit = async (data) => {
    const { identificationNumber } = data;

    try {
      const res = await fetch('/api/api/v1/members/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ identificationNumber }),
      });

      if (!res.ok) {
        notify.error(
          'Validation failed',
          `Invalid identification number. It's possible that the number is not registered in our system or there was an error with the server.`,
        );
        return;
      }

      const { data } = await res.json();
      const token = data.token.token;

      updateIsAuthenticated(token);
      notify.success(
        'Validation successful',
        'You can now update the information in the details form.',
      );
    } catch (error) {
      notify.error('Validation failed', error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-12 px-4 bg-gray-500/3">
      <div className="w-full max-w-md bg-white border border-gray-200 border-l-accent border-b-accent border-l-2 border-b-2 rounded-2xl p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Service registration
          </h1>
          <img src="/onboardy.svg" alt="Onboardy Logo" className="w-10 h-10" />
        </div>
        <Form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="identificationNumber">Identification number</Label>
          <Input
            {...register('identificationNumber', {
              required: true,
              minLength: 5,
            })}
            id="identificationNumber"
            min={0}
            placeholder="Enter the identification number (min 5 characters)"
            type="number"
          />

          <div className="flex justify-end items-center gap-4 mt-6">
            <Link to={'/'} className="text-gray-700">
              Go back
            </Link>
            <Button type="submit">Continue</Button>
          </div>
        </Form>
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
