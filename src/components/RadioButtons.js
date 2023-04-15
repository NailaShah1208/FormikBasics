import React from 'react';
import { Form, ErrorMessage, Field } from 'formik';
import TextError from './TextError';
import FormLabel from '@mui/material/FormLabel';
function RadioButtons(props) {
    const { name, label, options,handleChange, ...rest } = props;
    return (
        <div>
            <FormLabel htmlFor={name}>{label}</FormLabel><br/>
            <Field name={name} onChange={handleChange}>
                {({ field }) => {
                    //console.log("field",field)
                    return (options.map((option) => {
                        return (<React.Fragment key={option.key}>

                                <input type="radio"
                                    value={option.value}
                                    id={option.value}
                                    name={name}
                                    
                                    {...field}
                                    />
                                    

                            <label htmlFor={option.value}>{option.key}</label>
                            </React.Fragment>)
                    }))

                }

                }
            </Field>
            
        </div>
    )
}

export default RadioButtons
