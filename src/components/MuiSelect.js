import React from 'react'
import { FormControl,MenuItem,TextField } from '@mui/material';
import { ErrorMessage, Field } from 'formik';
import TextError from './TextError';
import Select from '@mui/material/Select';
function MuiSelect(props) {
    const {name,label, options,handleChange,...rest}=props
  return (
    <Field name={name}>
        {(field,form)=><FormControl fullWidth sx={{m:1}}>
         
        <TextField select name={name} {...rest} {...field} label={label} onChange={handleChange}>      
        { 
            options.map((op)=><MenuItem value={op.value}>{op.key}</MenuItem>)
        }  
         {/* <ErrorMessage name={name} component={TextError}>{form.errors[name]}</ErrorMessage> */}
      </TextField>
      
        </FormControl>
        }

    </Field>
   
    
  )
}

export default MuiSelect;
