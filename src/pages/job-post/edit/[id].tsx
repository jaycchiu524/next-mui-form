import { JobPost } from '@/pages/api/interfaces/job'
import { useStore } from '@/store'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useForm, Controller, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { JobSchema } from '@/yup/schemas'
import { Stack, Paper, Button, Slider } from '@mui/material'
import JobPostForm from '@/components/JobPostForm'
import { Container } from '@/components/commons'

type Props = {}

const EditJobPost = (props: Props) => {
  const { query, push } = useRouter()
  const { id } = query

  const jobpost = useStore((state) =>
    state.jobPosts.find((job) => job.id === id),
  )

  const append = useStore((state) => state.appendJobPost)
  const remove = useStore((state) => state.removeJobPost)

  const methods = useForm<JobPost>({
    defaultValues: jobpost,
    resolver: yupResolver(JobSchema),
    mode: 'onChange',
  })

  const { handleSubmit } = methods

  const handleCreateJobPost = handleSubmit(async (values) => {
    remove(values.id)
    append(values)
    alert(JSON.stringify(values, null, 2))
    push('/job-post')
  })

  return (
    <Container>
      {JSON.stringify(jobpost, null, 2)}

      <Button
        onClick={(e) => {
          e.preventDefault()
          push('/job-post')
        }}>
        Back
      </Button>

      <FormProvider {...methods}>
        {jobpost && <JobPostForm />}
        <Button variant="outlined" type="submit" onClick={handleCreateJobPost}>
          Confirm Editing
        </Button>
      </FormProvider>
    </Container>
  )
}

export default EditJobPost
