import React from 'react'
import {
  Stack,
  Paper,
  RadioGroup,
  Radio,
  FormControlLabel,
  Slider,
  Autocomplete,
} from '@mui/material'
import { Controller, useFormContext, useController } from 'react-hook-form'
import { TextInput } from '@/components/TextInput'
import DatePicker from './DatePicker'
import IndustryPicker from './IndustryPicker'
import { useStore } from '@/store'
import { Company } from '@/pages/api/interfaces/company'

type Props = {}

const JobPostForm = (props: Props) => {
  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors },
  } = useFormContext()

  const {
    field: { onChange, value },
  } = useController({ control, name: 'company' })

  const companies = useStore((state) => state.companies)

  return (
    <Paper sx={{ p: 4 }} component="form">
      <Stack spacing={2}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={
            value
              ? [value, ...companies.filter((s) => s.id !== value.id)]
              : companies
          }
          value={value}
          onChange={(e, value) => {
            onChange(value || null)
          }}
          getOptionLabel={(option: Company) => option.name || ''}
          sx={{ width: 300 }}
          filterOptions={(x) => x}
          renderInput={(params) => (
            <TextInput {...params} key={params.id} label="Company" />
          )}
        />
        <TextInput
          {...register('title')}
          label="Job Title"
          placeholder="Software Engineer"
          error={!!errors.title}
          // helperText="Required"
        />

        <TextInput
          {...register('description')}
          label="Description"
          placeholder="Write a description"
          error={!!errors.description}
          // helperText="Required"
        />
        <TextInput
          {...register('category')}
          label="Category"
          placeholder="What category does this job fall under?"
          error={!!errors.category}
          // helperText="Required"
        />
        <IndustryPicker />

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
              value={value}
              row={true}>
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
              <FormControlLabel
                value="internship"
                control={<Radio />}
                label="Internship"
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
