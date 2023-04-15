import React from 'react'
import { TextField ,FormControl} from '@mui/material'
import { Field } from 'formik'
function MuiTextarea(props) {
    const {label,name,...rest}=props
  return (
    <Field name={name}>{
      ({field,form})=>{
         
        return(<FormControl fullWidth sx={{m:1}}>
        <TextField label={label} {...rest} {...field} multiline maxRows={6}
        onChange={form.handleChange}/>
      </FormControl>)}}
    </Field>
  )
}

export default MuiTextarea
