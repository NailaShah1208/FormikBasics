import React from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import FormikControl from './FormikControl';
const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    modeOfContact: '',
    phone: ''
}
const contactOptions=[{key:'Email',value:'email'},
{key:'Telephone',value:'Telephone'}]
const onSubmit=(values)=>console.log("submitting",values);
const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email').required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required("Required"),
    modeOfContact: Yup.string().required("Required"),
    phone:Yup.number().when('modeOfContact',{is:'Telephone',then:Yup.number().required("Required")})

})


function Registeration() {

    return (
        <Formik initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
{
    formik=>
<Form>
<FormikControl name="email" control="input" type="email" label="Email"/>
<FormikControl name="password" control="input" type="password" label="Password"/>
<FormikControl name="confirmPassword" control="input" type="password" label="Confirm Password"/>
<FormikControl name="modeOfContact" control="radio" label="Mode Of Contact" options={contactOptions}/>
<FormikControl name="phone" control="input" type="text" label="Phone"/>
<button type="submit">Submit</button>
</Form>
}
</Formik>
)
}

export default Registeration
