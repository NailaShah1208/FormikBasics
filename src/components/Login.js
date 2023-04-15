import React from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import FormikControl from './FormikControl';
const initialValues = {
    email: '',
    password: ''
}
const onSubmit = (values) => { console.log("values", values) }
const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required")
})
function Login() {
    return (<>
    <h2>Login form</h2>
        <Formik initialValues={initialValues} onSubmit={onSubmit}
            validationSchema={validationSchema} >
            {
                (formik) =><Form>
<FormikControl name="email" control="input" type="email" label="Email"/>
<FormikControl name="password" control="input" type="password" label="Password"/>
<button type="submit">Submit</button>
                         </Form>
            }

        </Formik>
        </>
    )
}

export default Login
