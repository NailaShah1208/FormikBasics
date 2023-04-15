import React from 'react';
import {TextField , FormControl } from '@mui/material/';
import { ErrorMessage, Field } from 'formik';
import TextError from './TextError';
function MuiInput(props) {
    const { name, label, ...rest } = props;
    return (
        <Field name={name}>
            {({field, form}) =><FormControl fullWidth sx={{m:1}} >

                {
                /* <InputLabel htmlFor={name}>{label}</InputLabel>
                <Input variant="outlined" id={name} {...rest} {...field}  /> */}
<TextField label={label} variant="outlined" id={name} {...rest} {...field}/>
<ErrorMessage name={name} component={TextError}>{form.errors[name]}</ErrorMessage>
            </FormControl>
            }
            

        </Field>
    )
}

export default MuiInput
