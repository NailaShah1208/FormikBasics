import React from 'react';
import { Form, ErrorMessage, Field } from 'formik';
import TextError from './TextError';

function RadioButtons(props) {
    const { name, label, options, ...rest } = props;
    return (
        <div>
            <label htmlFor={name}>{label}</label><br/>
            <Field name={name}>
                {({ field }) => {
                    console.log("field",field)
                    return (options.map((option) => {
                        return (
                            <React.Fragment key={option.key}>

                                <input type="radio"
                                    value={option.value}
                                    id={option.value}
                                    {...field}
                                    {...rest}
                                    checked={option.value === field.value}/>

                            <label htmlFor={option.value}>{option.key}</label>
                            </React.Fragment>)
                    }))

                }

                }
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    )
}

export default RadioButtons
