import React from 'react'
import { Stack, Paper, Button, Slider } from '@mui/material'
import { useForm, Controller, FormProvider } from 'react-hook-form'
import { TextInput } from '@/components/TextInput'
import styled from '@emotion/styled'
import { yupResolver } from '@hookform/resolvers/yup'
import { CompanySchema, JobSchema } from '@/yup/schemas'
import { Container } from '@/components/commons'
import { JobPost } from '../api/interfaces/job'
import { nanoid } from 'nanoid'
import { useStore } from '@/store'
import { useRouter } from 'next/router'
import JobPostForm from '@/components/JobPostForm'
import Header from '@/components/Header'

type Props = {}

const ErrorMsg = styled('p')`
  color: red;
`

const AddJobPost = (props: Props) => {
  const router = useRouter()
  const methods = useForm<JobPost>({
    defaultValues: {
      title: '',
      industry: 'IT',
      payrate: [40000, 50000],
      startdate: new Date(),
      type: 'full-time',
      company: '',
      category: '',
    },
    resolver: yupResolver(JobSchema),
    mode: 'onChange',
  })

  const { handleSubmit, reset } = methods

  const append = useStore((state) => state.appendJobPost)

  const handleCreateJobPost = handleSubmit(async (values) => {
    const id = nanoid()
    const jobPost = { ...values, id }
    append(jobPost)
    reset()
    alert(JSON.stringify(jobPost, null, 2))
    router.push('/job-post')
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
          onClick={(e) => {
            e.preventDefault()
            router.push('/job-post')
          }}>
          Back
        </Button>
      </Stack>

      <FormProvider {...methods}>
        <JobPostForm />
        <Stack
          sx={{ margin: 2 }}
          direction="row"
          justifyContent="flex-end"
          spacing={2}>
          <Button
            color="success"
            variant="contained"
            type="submit"
            onClick={handleCreateJobPost}>
            Add Job Post
          </Button>
        </Stack>
      </FormProvider>
    </Container>
  )
}

export default AddJobPost
