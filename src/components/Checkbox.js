import React from 'react';
import TextError from './TextError';
import {ErrorMessage, Field } from 'formik';
function Checkbox(props) {
  
    const { name, label, options, ...rest } = props;
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <br/>
            <Field name={name}>
                {({ field }) => {
                    //console.log("field",field)
                    return (options.map(option=> {
                        return (
                            <React.Fragment key={option.key}>

                                <input type="checkbox"
                                    value={option.value}
                                    id={option.value}
                                    {...field}
                                    
                                    checked={field.value.includes(option.value)}/>

                            <label htmlFor={option.value}>{option.key}</label>
                            </React.Fragment>)
                    }))

        }}
            </Field>
        <ErrorMessage name={name} component={TextError}/>
        </div>
    )
    
  
}

export default Checkbox
