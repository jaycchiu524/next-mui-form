import { JobPost } from '@/pages/api/interfaces/job'
import { useStore } from '@/store'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useForm, Controller, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { CompanySchema, JobSchema } from '@/yup/schemas'
import { Stack, Paper, Button, Slider } from '@mui/material'
import JobPostForm from '@/components/JobPostForm'
import { Container } from '@/components/commons'
import { Company } from '@/pages/api/interfaces/company'
import CompanyForm from '@/components/CompanyForm'
import Header from '@/components/Header'

type Props = {}

const EditCompany = (props: Props) => {
  const { query, push } = useRouter()
  const { id } = query

  const companies = useStore((state) =>
    state.companies.find((company) => company.id === id),
  )

  const append = useStore((state) => state.appendCompany)
  const remove = useStore((state) => state.removeCompany)

  const methods = useForm<Company>({
    defaultValues: companies,
    resolver: yupResolver(CompanySchema),
    mode: 'onChange',
  })

  const { handleSubmit, setValue } = methods

  const handleEditCompany = handleSubmit(async (values) => {
    remove(values.id)
    append(values)
    alert(JSON.stringify(values, null, 2))
    push('/company')
  })

  return (
    <Container>
      <Header />

      <Stack
        sx={{ margin: 2 }}
        direction="row"
        justifyContent="flex-start"
        spacing={2}>
        <Button
          variant="contained"
          onClick={(e) => {
            e.preventDefault()
            push('/company')
          }}>
          Back
        </Button>
      </Stack>

      <FormProvider {...methods}>
        {companies && <CompanyForm />}
        <Stack
          sx={{ margin: 2 }}
          direction="row"
          justifyContent="flex-end"
          spacing={2}>
          <Button
            color="success"
            variant="contained"
            type="submit"
            onClick={handleEditCompany}>
            Confirm Editing
          </Button>
        </Stack>
      </FormProvider>
    </Container>
  )
}

export default EditCompany
