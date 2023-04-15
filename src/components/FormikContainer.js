import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';
import { Typography,Box } from '@mui/material';
import {Button} from '@mui/material'
function FormikContainer() {
    const dropdownOptions = [{ key: 'select an option', value: '' },
    { key: 'option1', value: 'option1' },
    { key: 'option2', value: 'option2' },
    { key: 'option3', value: 'option3' },
    { key: 'option4', value: 'option4' },
    ]

    const radioOptions = [{ key: 'Option1', value: 'roption1' },
    { key: 'Option2', value: 'roption2' },
    { key: 'Option3', value: 'roption3' },
    { key: 'Option4', value: 'roption4' }

    ]
    const CheckBoxOptions = [{ key: 'Option1', value: 'coption1' },
    { key: 'Option2', value: 'coption2' },
    { key: 'Option3', value: 'coption3' },
    { key: 'Option4', value: 'coption4' }

    ]
    const initialValues = {
        email: "",
        description: '',
        selectOption: '',
        radioOption: '',
        checkboxOption: [],
        birthDate: null,

    };
    const validationSchema = Yup.object({
        email: Yup.string().required("Required"),
        description: Yup.string().required("Required"),
        selectOption: Yup.string().required("Required"),
        radioOption: Yup.string().required("Required"),
        checkboxOption: Yup.array().required("Required"),
        birthDate: Yup.date().required('Required').nullable()
    });

    const onSubmit = (values) => console.log("ON SUBMIT VALUES ARE:", values);
    return (
<Box sx={{width:600,mt:5}}>
    <Typography  variant="h4" component="h1" m={2}>Formik & MUI Form</Typography>
        <Formik initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            {
                (formik) => <Form style={{margin:'10px'}}>

                    {console.log("formik errors=", formik.errors)}
                    {/*<FormikControl control="input" name="email" type="email" label="Email" />*/}
                    
                    <FormikControl control="MuiInput" name="email" type="email" label="Email" />
                    
                    <FormikControl control="MuiTextarea" name="description" label="description" />
                    
                    <FormikControl control="MuiSelect" name="selectOption" label="Select Option" options={dropdownOptions} handleChange={formik.handleChange} />
                    <FormikControl control="RadioButtons" name="radioOption" label="Radio Topic" options={radioOptions} handleChange={formik.handleChange} />
                    {/*<FormikControl control="checkbox" name="checkboxOption" label="checkbox Topic" options={CheckBoxOptions} />*/}
                    <FormikControl control="date" name="birthDate" label="pick a date"/> 
                   
                   <Box>
                    <Button type="submit" variant="contained">Submit</Button>
                    </Box>
                </Form>

            }
        </Formik>
        </Box>
    )
}

export default FormikContainer


