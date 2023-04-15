import React from 'react';
import {Form,Formik} from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';
const initialValues={
bio:'',
course:'',
courseDate:null

}
const validationSchema=Yup.object({
    bio:Yup.string().required("Required"),
    course:Yup.string().required("Required"),
    courseDate:Yup.date().required("Required").nullable()

})
const courseOptions=[
{key:'select course',value:''},
{key:'React',value:'React'},
{key:'Javascript',value:'Javascript'},
{key:'C',value:'C'},
{key:'python',value:'python'}]

const onSubmit=(value)=>console.log("values=",value)
function CourseEnrollment() {
  return (
    <Formik initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}>
      {
        formik=><Form>
            <FormikControl control="textarea" name="bio" label="Bio" />
            <FormikControl control="select" name="course" label="course" options={courseOptions}  />
            <FormikControl control="date" name="courseDate" label="date" />
            <button type="submit">Submit</button>
            </Form>
        }
      
    </Formik>
  )
}

export default CourseEnrollment
