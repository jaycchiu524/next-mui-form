import React from 'react'
import {
  Stack,
  Paper,
  RadioGroup,
  Radio,
  FormControlLabel,
  Slider,
} from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { TextInput } from '@/components/TextInput'
import DatePicker from './DatePicker'
import IndustryPicker from './IndustryPicker'

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
        <IndustryPicker />
        <TextInput
          {...register('category')}
          label="Category"
          placeholder="Name"
          error={!!errors.category}
          // helperText="Required"
        />
        <DatePicker />

        <Controller
          name="type"
          control={control}
          render={({ field: { onChange, value } }) => (
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              onChange={onChange}
              value={value}>
              <FormControlLabel
                value="full-time"
                control={<Radio />}
                label="Full-time"
              />
              <FormControlLabel
                value="part-time"
                control={<Radio />}
                label="Part-time"
              />
              <FormControlLabel
                value="contract"
                control={<Radio />}
                label="Contract"
              />
            </RadioGroup>
          )}
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
                    ? `${value[0]} - ${value[1]} /year`
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
