import React from 'react'
import { Stack, Paper, Button } from '@mui/material'
import { Company } from '../api/interfaces/company'
import { useForm, Controller } from 'react-hook-form'
import { TextInput } from '@/components/TextInput'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import styled from '@emotion/styled'
import { yupResolver } from '@hookform/resolvers/yup'
import { CompanySchema } from '@/yup/schemas'

type Props = {}

const ErrorMsg = styled('p')`
  color: red;
`

const AddCompany = (props: Props) => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm<Company>({
    defaultValues: {
      name: '',
      address: '',
      email: '',
      description: '',
      phone: '',
      city: '',
    },
    resolver: yupResolver(CompanySchema),
  })

  const handleCreateArticle = handleSubmit(async (values) => {
    console.log(values)
  })

  return (
    <Paper sx={{ p: 4 }} component="form" onSubmit={handleCreateArticle}>
      <Stack spacing={2}>
        <TextInput
          {...register('name')}
          label="Company Name"
          placeholder="Name"
          error={!!errors.name}
          helperText="Required"
        />
        <TextInput
          {...register('address')}
          label="Address"
          placeholder="Name"
          error={!!errors.address}
          helperText="Required"
        />
        <TextInput
          {...register('email')}
          label="Email"
          placeholder="Name"
          error={!!errors.email}
          helperText="Required"
        />
        <TextInput
          {...register('description')}
          label="Description"
          placeholder="Name"
          error={!!errors.description}
          helperText="Required"
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

        <Button variant="contained" type="submit" onClick={handleCreateArticle}>
          Create article
        </Button>
      </Stack>
    </Paper>
  )
}

export default AddCompany
