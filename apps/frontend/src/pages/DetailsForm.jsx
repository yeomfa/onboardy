import {
  Alert,
  Button,
  Checkbox,
  Description,
  Form,
  Input,
  Label,
  ListBox,
  Select,
  TextField,
} from '@heroui/react';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const identificationTypes = [
  { id: 'cc', name: 'Cédula de Ciudadanía (CC)' },
  { id: 'nit', name: 'Número de Identificación Tributaria (NIT)' },
];

export function DetailsForm() {
  const { register, control, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="">
      <Alert status="accent" className="items-center">
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
      <h1 className="text-2xl font-medium text-gray-800 mt-6">Details Form</h1>

      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 flex flex-col gap-6"
      >
        <div className="grid grid-cols-2 gap-4">
          <Controller
            name="entityType"
            control={control}
            render={({ field }) => (
              <Select
                isRequired
                className="w-full"
                placeholder="Select an option"
                value={field.value}
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
          <TextField isRequired name="identificationNumber">
            <Label>Identification Number</Label>
            <Input
              {...register('identificationNumber')}
              placeholder="Enter the identification number"
              type="number"
            />
          </TextField>
        </div>

        <TextField isRequired name="companyName">
          <Label>Company Name</Label>
          <Input
            {...register('companyName')}
            placeholder="Enter the company name"
            type="text"
          />
        </TextField>

        <div className="grid grid-cols-2 gap-4">
          <TextField isRequired name="firstName">
            <Label>First Name</Label>
            <Input
              {...register('firstName')}
              placeholder="Enter the first name"
              type="text"
            />
          </TextField>
          <TextField name="secondName">
            <Label>Second Name</Label>
            <Input
              {...register('secondName')}
              placeholder="Enter the second name"
              type="text"
            />
          </TextField>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <TextField isRequired name="firstLastName">
            <Label>First Last Name</Label>
            <Input
              {...register('firstLastName')}
              placeholder="Enter the first last name"
              type="text"
            />
          </TextField>
          <TextField name="secondLastName">
            <Label>Second Last Name</Label>
            <Input
              {...register('secondLastName')}
              placeholder="Enter the second last name"
              type="text"
            />
          </TextField>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <TextField isRequired name="email">
            <Label>Email</Label>
            <Input
              {...register('email')}
              placeholder="Enter the email"
              type="email"
            />
          </TextField>
          <TextField isRequired name="cellphone">
            <Label>Cell Phone</Label>
            <Input
              {...register('cellphone')}
              placeholder="Enter the cell phone number"
              type="tel"
            />
          </TextField>
        </div>
        <Controller
          name="authorizeSms"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <div className="flex gap-3">
              <Checkbox isSelected={field.value} onChange={field.onChange}>
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
          defaultValue={false}
          render={({ field }) => (
            <div className="flex gap-3">
              <Checkbox isSelected={field.value} onChange={field.onChange}>
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
          <Button type="submit">Continue</Button>
        </div>
      </Form>
    </div>
  );
}
