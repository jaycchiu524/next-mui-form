import React from 'react'
import { Stack, Paper, Button, Slider } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { TextInput } from '@/components/TextInput'

type Props = {}

const JobPostForm = (props: Props) => {
  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors },
  } = useFormContext()

  return (
    <Paper sx={{ p: 4 }} component="form">
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
                {value &&
                  (typeof value !== 'number'
                    ? `${value[0]} - ${value[1]} / year`
                    : value)}
              </p>
            </>
          )}
        />
      </Stack>
    </Paper>
  )
}

export default JobPostForm
