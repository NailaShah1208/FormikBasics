import { ErrorMessage,Field } from 'formik';
import React from 'react'
import DataView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextError from './TextError';
function DatePicker(props) {
    const {label,name,...rest}=props;
  return (
    <div className='formControl'>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {
            ({field,form})=>{
                const {value}=field;
                const {setFieldValue}=form;
                return (<DataView {...rest} {...field} id={name}
                    selected={value} onChange={val=>setFieldValue(name,val)} />)
            }
        }
      </Field>
      <ErrorMessage name={name} component={TextError}/>
    </div>
  )
}

export default DatePicker
