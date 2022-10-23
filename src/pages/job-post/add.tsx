import React from 'react'
import { Stack, Paper, Button, Slider } from '@mui/material'
import { useForm, Controller, useFieldArray } from 'react-hook-form'
import { TextInput } from '@/components/TextInput'
import styled from '@emotion/styled'
import { yupResolver } from '@hookform/resolvers/yup'
import { CompanySchema, JobSchema } from '@/yup/schemas'
import { Container } from '@/components/commons'
import { JobPost } from '../api/interfaces/job'
import { nanoid } from 'nanoid'
import { useStore } from '@/store'

type Props = {}

const ErrorMsg = styled('p')`
  color: red;
`

const AddJobPost = (props: Props) => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm<JobPost>({
    defaultValues: {
      title: '',
      industry: 'IT',
      payrate: [40000, 50000],
      startdate: new Date(),
      type: 'full-time',
      company: '',
      category: 'software',
    },
    resolver: yupResolver(JobSchema),
    mode: 'onChange',
  })

  const setJobPosts = useStore((state) => state.setJobPosts)
  const globaljobs = useStore((state) => state.jobPosts)

  const handleCreateJobPost = handleSubmit(async (values) => {
    const id = nanoid()
    const jobPost = { ...values, id }

    setJobPosts([jobPost])

    console.log(globaljobs)
  })

  return (
    <Container>
      <Paper sx={{ p: 4 }} component="form" onSubmit={handleCreateJobPost}>
        <Stack spacing={2}>
          <TextInput
            {...register('title')}
            label="Job Title"
            placeholder="Title"
            error={!!errors.title}
            // helperText="Required"
          />
          <TextInput
            {...register('company')}
            label="Company"
            placeholder="Company"
            error={!!errors.company}
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
            {...register('industry')}
            label="Industry"
            placeholder="Name"
            error={!!errors.industry}
            // helperText="Required"
          />
          <TextInput
            {...register('category')}
            label="Category"
            placeholder="Name"
            error={!!errors.category}
            // helperText="Required"
          />
          <TextInput
            {...register('startdate')}
            label="Start Date"
            placeholder="Now"
            error={!!errors.startdate}
            // helperText="Required"
          />
          <TextInput
            {...register('type')}
            label="Type"
            placeholder="full-time"
            error={!!errors.type}
            // helperText="Required"
          />

          <Controller
            name="payrate"
            control={control}
            // defaultValue={[0, 10]}
            render={({ field: { onChange, value } }) => (
              <>
                <Slider
                  {...props}
                  onChange={onChange}
                  value={value}
                  valueLabelDisplay="auto"
                  min={0}
                  max={200000}
                  step={1000}
                />
                <p>
                  {typeof value !== 'number'
                    ? `${value[0]} - ${value[1]} / year`
                    : value}
                </p>
              </>
            )}
          />

          <Button
            variant="outlined"
            type="submit"
            onClick={handleCreateJobPost}>
            Create Job Post
          </Button>

          <Button
            variant="outlined"
            // type="submit"
            onClick={() => {
              console.log(globaljobs)
            }}>
            Show Job Post
          </Button>
        </Stack>
      </Paper>
    </Container>
  )
}

export default AddJobPost
