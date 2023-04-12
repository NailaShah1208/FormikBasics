import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';
function FormikContainer() {
    const dropdownOptions = [{key:'select an option',value:''},
        {key: 'option1', value: 'option1' },
    { key: 'option2', value: 'option2' },
    { key: 'option3', value: 'option3' },
    { key: 'option4', value: 'option4' },
]

const radioOptions=[{key:'Option1',value:'roption1'},
{key:'Option2',value:'roption2'},
{key:'Option3',value:'roption3'},
{key:'Option4',value:'roption4'}

]
const CheckBoxOptions=[{key:'Option1',value:'coption1'},
{key:'Option2',value:'coption2'},
{key:'Option3',value:'coption3'},
{key:'Option4',value:'coption4'}

]
    const initialValues = {
        email: "",
        description: '',
        selectOption:'',
        radioOption:'',
        checkboxOption:[]

    };
    const validationSchema = Yup.object({
        email: Yup.string().required("Required"),
        description: Yup.string().required("Required"),
        selectOption:Yup.string().required("Required"),
        radioOption:Yup.string().required("Required"),
        checkboxOption:Yup.array().required("Required"),

    });

    const onSubmit = (values) => { console.log(values) };
    return (
        <Formik initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            {
                (formik) => <Form>
                    {console.log(formik.errors)}
                    <FormikControl control="input" name="email" type="email" label="Email" />
                    <FormikControl control="textarea" name="description" label="description" />
                    <FormikControl control="select" name="selectOption" label="Select Option" options={dropdownOptions}/>
                    <FormikControl control="radio" name="radioOption" label="Radio Topic" options={radioOptions}/>
                   <FormikControl control="checkbox" name="checkboxOption" label="checkbox Topic" options={CheckBoxOptions}/>
                    <button type="submit">Submit</button>
                </Form>

            }
        </Formik>
    )
}

export default FormikContainer
