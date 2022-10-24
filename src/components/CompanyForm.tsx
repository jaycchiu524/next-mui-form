import React from 'react'
import { Stack, Paper, Button } from '@mui/material'
import { useForm, Controller, useFormContext } from 'react-hook-form'
import { TextInput } from '@/components/TextInput'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import styled from '@emotion/styled'

type Props = {}

const ErrorMsg = styled('p')`
  color: red;
`

const CompanyForm = (props: Props) => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <Paper sx={{ p: 4 }} component="form">
      <Stack spacing={2}>
        <TextInput
          {...register('name')}
          label="Company Name"
          placeholder="Name"
          error={!!errors.name}
          // helperText="Required"
        />
        <TextInput
          {...register('address')}
          label="Address"
          placeholder="Name"
          error={!!errors.address}
          // helperText="Required"
        />
        <TextInput
          {...register('email')}
          label="Email"
          placeholder="Name"
          error={!!errors.email}
          // helperText="Required"
        />
        <TextInput
          {...register('description')}
          label="Description"
          placeholder="Name"
          error={!!errors.description}
          // helperText="Required"
        />
        <TextInput
          {...register('city')}
          label="City"
          placeholder="Toronto"
          error={!!errors.city}
        />

        <Controller
          name="phone"
          control={control}
          rules={{
            validate: (value) => isValidPhoneNumber(value),
          }}
          render={({ field: { onChange, value } }) => (
            <PhoneInput
              value={value}
              onChange={onChange}
              defaultCountry="CA"
              id="phone"
              inputComponent={TextInput}
            />
          )}
        />
        {errors['phone'] && <ErrorMsg>Invalid Phone Number</ErrorMsg>}
      </Stack>
    </Paper>
  )
}

export default CompanyForm
