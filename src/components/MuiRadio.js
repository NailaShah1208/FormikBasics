import React from 'react'
import {
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel
} from '@mui/material'
import { Field } from 'formik';
function MuiRadio(props) {
    const { label, name, options,handleChange, ...rest } = props;
    return (
    <Field name={name}>
    {(field)=> {return(
    <FormControl>
            
            <FormLabel>{label}</FormLabel>
            <RadioGroup row name={name} onChange={handleChange}>
                {
                    options.map((op)=>{return(<FormControlLabel control={<Radio />}
                                label={op.key}
                                value={op.value} 
                                {...field}
                                {...rest}
                                checked={op.value === field.value}
                                />)}
                            
                            )
                    }
                    
                
            </RadioGroup>
        </FormControl>)
    }}
    </Field>
    )
}

export default MuiRadio;
