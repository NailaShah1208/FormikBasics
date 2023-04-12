import React from 'react'
import {Field,ErrorMessage} from 'formik'
import TextError from './TextError';
import '../App.css'
function Input(props) 
{ const {name,label,...rest}=props;
  return (
    <div className='formControl'>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} type={name} {...rest}/>
      <ErrorMessage name={name} component={TextError}/>
    </div>
  )
}

export default Input
