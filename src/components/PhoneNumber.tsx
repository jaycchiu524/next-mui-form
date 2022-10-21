import { forwardRef } from 'react'
import TextField from '@mui/material/TextField'
import { makeStyles } from '@mui/material/styles'

// const useStyles = makeStyles(theme => ({
//   input: {
//     backgroundColor: '#fff'
//   }
// }))

const CustomPhoneInput = (props: any, ref: any) => {
  // const classes = useStyles()

  return (
    <TextField
      {...props}
      // InputProps={{
      //   className: classes.input
      // }}
      inputRef={ref}
      fullWidth
      size="small"
      label="Phone Number"
      variant="outlined"
      name="phone"
    />
  )
}

export default forwardRef(CustomPhoneInput)
