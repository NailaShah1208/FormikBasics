import React from 'react';
import {Field,ErrorMessage} from 'formik';
import TextError from './TextError';
import '../App.css';

function Select(props) {
    const {name,label,options,...rest}=props;
  return (
    <div className='formControl'>
      <label name={name}>{label}</label>
      <Field as="select" name={name} id={name} {...rest}>
        {
            options.map((option)=>{return(
            <option key={option.value}
            value={option.value}>{option.key}</option>
            )})
        }
        </Field>
      <ErrorMessage name={name} component={TextError}/>
    </div>
  )
}

export default Select
