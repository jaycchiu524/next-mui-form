import React from 'react'
import { InputLabel, MenuItem, Select, FormControl } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { jobIndustries } from '@/pages/api/interfaces/job'

const IndustryPicker = () => {
  const { handleSubmit, control, register } = useFormContext()

  return (
    <Controller
      name="industry"
      control={control}
      render={({ field: { onChange, value } }) => (
        <FormControl fullWidth>
          <InputLabel id="industry-label">Industry</InputLabel>
          <Select value={value} label="Industry" onChange={onChange}>
            {jobIndustries.map((industry) => (
              <MenuItem key={industry} value={industry}>
                {industry}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  )
}

export default IndustryPicker
