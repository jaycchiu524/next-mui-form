import React from 'react'
import { Stack, Paper, Button } from '@mui/material'
import { Company } from '../api/interfaces/company'
import { useForm, FormProvider } from 'react-hook-form'
import { TextInput } from '@/components/TextInput'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import { yupResolver } from '@hookform/resolvers/yup'
import { CompanySchema } from '@/yup/schemas'
import { Container } from '@/components/commons'
import { useRouter } from 'next/router'
import { useStore } from '@/store'
import { nanoid } from 'nanoid'
import CompanyForm from '@/components/CompanyForm'

type Props = {}

const AddCompany = (props: Props) => {
  const router = useRouter()
  const methods = useForm<Company>({
    defaultValues: {
      name: '',
      address: '',
      email: '',
      description: '',
      phone: '',
      city: '',
    },
    resolver: yupResolver(CompanySchema),
    mode: 'onChange',
  })

  const { handleSubmit, reset } = methods
  const append = useStore((state) => state.appendCompany)

  const handleCreateCompany = handleSubmit(async (values) => {
    const id = nanoid()
    const company = { ...values, id }
    append(company)
    reset()
    alert(JSON.stringify(company, null, 2))
  })

  return (
    <Container>
      <Button
        onClick={(e) => {
          e.preventDefault()
          router.push('/company')
        }}>
        Back
      </Button>

      <FormProvider {...methods}>
        <CompanyForm />
        <Button variant="outlined" type="submit" onClick={handleCreateCompany}>
          Add Company
        </Button>
      </FormProvider>
    </Container>
  )
}

export default AddCompany
