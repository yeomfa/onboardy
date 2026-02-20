import {
  Alert,
  Button,
  Checkbox,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  ListBox,
  Select,
  Spinner,
  TextField,
} from '@heroui/react';
import { useContext, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../shared/auth/AuthContext';
import { notify } from '../shared/helpers/notify';
import { useState } from 'react';

const identificationTypes = [
  { id: 'cc', name: 'Cédula de Ciudadanía (CC)' },
  { id: 'nit', name: 'Número de Identificación Tributaria (NIT)' },
];

export function DetailsForm() {
  const [isLoadingMember, setIsLoadingMember] = useState(true);
  const { token, updateIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { isSubmitting },
  } = useForm();

  const selectedIdentificationType = watch('identificationType');

  useEffect(() => {
    const fetchMemberData = async () => {
      try {
        const res = await fetch('/api/api/v1/members/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error('Could not fetch member data');

        const result = await res.json();
        reset(result.data.member);
      } catch {
        notify.error(
          'Error',
          'Session expired or invalid. Please login again.',
        );
        updateIsAuthenticated(null);
        navigate('/registration');
      } finally {
        setIsLoadingMember(false);
      }
    };

    if (token) fetchMemberData();
  }, [token, reset, navigate, updateIsAuthenticated]);

  const onSubmit = async (data) => {
    try {
      const res = await fetch('/api/api/v1/members/me', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Update failed');

      notify.success(
        'Updated!',
        'Your information has been saved in the system.',
      );
    } catch (error) {
      notify.error('Update failed', error.message);
    }
  };

  if (isLoadingMember) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <div className="bg-gray-500/3 p-8 rounded-4xl">
      <h1 className="text-2xl font-medium text-gray-800">Details Form</h1>

      <Alert status="accent" className="items-center mt-6">
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Description>
            The company is registered with the Medellin Chamber of Commerce for
            Antioquia. To access the Virtual Procedures service, the data
            reported in the registry will be used. Fields marked with an
            asterisk (<span className="text-accent">*</span>) are mandatory.
          </Alert.Description>
        </Alert.Content>
      </Alert>

      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 flex flex-col gap-6"
      >
        <div className="grid grid-cols-2 gap-4">
          <Controller
            name="identificationType"
            control={control}
            render={({ field }) => (
              <Select
                isRequired
                className="w-full"
                placeholder="Select an option"
                value={field.value || null}
                onChange={field.onChange}
              >
                <Label>Identification Type</Label>
                <Select.Trigger>
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    {identificationTypes.map((type) => (
                      <ListBox.Item
                        key={type.id}
                        id={type.id}
                        textValue={type.name}
                      >
                        {type.name}
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    ))}
                  </ListBox>
                </Select.Popover>
              </Select>
            )}
          />

          <Controller
            name="identificationNumber"
            control={control}
            render={({ field }) => (
              <TextField isRequired minLength={5}>
                <Label>Identification Number</Label>
                <Input
                  {...field}
                  value={field.value || ''}
                  placeholder="Enter the identification number"
                  type="number"
                />
                <FieldError />
              </TextField>
            )}
          />
        </div>

        {selectedIdentificationType === 'nit' && (
          <Controller
            name="companyName"
            control={control}
            render={({ field }) => (
              <TextField isRequired>
                <Label>Company Name</Label>
                <Input
                  {...field}
                  value={field.value || ''}
                  placeholder="Enter the company name"
                  type="text"
                />
              </TextField>
            )}
          />
        )}

        {selectedIdentificationType === 'cc' && (
          <>
            <div className="grid grid-cols-2 gap-4">
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <TextField isRequired>
                    <Label>First Name</Label>
                    <Input
                      {...field}
                      value={field.value || ''}
                      placeholder="Enter the first name"
                      type="text"
                    />
                  </TextField>
                )}
              />
              <Controller
                name="secondName"
                control={control}
                render={({ field }) => (
                  <TextField>
                    <Label>Second Name</Label>
                    <Input
                      {...field}
                      value={field.value || ''}
                      placeholder="Enter the second name"
                      type="text"
                    />
                  </TextField>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Controller
                name="firstLastName"
                control={control}
                render={({ field }) => (
                  <TextField isRequired>
                    <Label>First Last Name</Label>
                    <Input
                      {...field}
                      value={field.value || ''}
                      placeholder="Enter the first last name"
                      type="text"
                    />
                  </TextField>
                )}
              />
              <Controller
                name="secondLastName"
                control={control}
                render={({ field }) => (
                  <TextField>
                    <Label>Second Last Name</Label>
                    <Input
                      {...field}
                      value={field.value || ''}
                      placeholder="Enter the second last name"
                      type="text"
                    />
                  </TextField>
                )}
              />
            </div>
          </>
        )}

        <div className="grid grid-cols-2 gap-4">
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField isRequired>
                <Label>Email</Label>
                <Input
                  {...field}
                  value={field.value || ''}
                  placeholder="Enter the email"
                  type="email"
                />
              </TextField>
            )}
          />
          <Controller
            name="cellphone"
            control={control}
            render={({ field }) => (
              <TextField isRequired>
                <Label>Cell Phone</Label>
                <Input
                  {...field}
                  value={field.value || ''}
                  placeholder="Enter the cell phone number"
                  type="number"
                />
              </TextField>
            )}
          />
        </div>

        <Controller
          name="authorizeSms"
          control={control}
          render={({ field }) => (
            <div className="flex gap-3">
              <Checkbox isSelected={!!field.value} onChange={field.onChange}>
                <Checkbox.Control>
                  <Checkbox.Indicator />
                </Checkbox.Control>
              </Checkbox>
              <div className="flex flex-col gap-1">
                <Description className="text-sm">
                  I authorize the sending of messages to the cell phone provided
                </Description>
              </div>
            </div>
          )}
        />

        <Controller
          name="authorizeEmail"
          control={control}
          render={({ field }) => (
            <div className="flex gap-3">
              <Checkbox isSelected={!!field.value} onChange={field.onChange}>
                <Checkbox.Control>
                  <Checkbox.Indicator />
                </Checkbox.Control>
              </Checkbox>
              <div className="flex flex-col gap-1">
                <Description className="text-sm">
                  I authorize messages to be sent to the following e-mail
                  address
                </Description>
              </div>
            </div>
          )}
        />

        <div className="flex justify-end items-center gap-4 mt-6">
          <Link to={'/'}>Go to Home</Link>
          <Button
            type="submit"
            isPending={isSubmitting}
            spinner={<Spinner size="sm" />}
          >
            {({ isPending }) => (
              <>
                {isPending && <Spinner color="current" size="sm" />}
                Continue
              </>
            )}
          </Button>
        </div>
      </Form>
    </div>
  );
}
