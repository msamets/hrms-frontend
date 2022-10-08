import React from "react";
import { Button, Checkbox, Form, Icon } from 'semantic-ui-react';
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";



export default function SignUpForEmployer() {
    const [companyName, setCompanyName] = useState("")

    const formik = useFormik({
        initialValues: {
            companyName: "",
            email: ""
        },
        validationSchema: Yup.object({
            companyName: Yup.string().max(30, "Must be 30 character or less")
                .required("Required"),
            email: Yup.string().email("Invalid email address").required("Required")
        }),
        onSubmit: (values) => {
            console.log(values)
            //alert(JSON.stringify(values,null,2))
        }
    })
    console.log(formik.values)
    console.log(formik.errors)
    return (
        <Form style={{
            position: 'absolute', left: '30%', top: '20%', right: '30%'
        }}
            onSubmit={formik.handleSubmit}>
            <Form.Field>
                <label >Email</label>
                <Form>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder='Email'
                        {...formik.getFieldProps('email')}
                        //Bu aşağıdaki 3 satır kodu  tek satır ile aynısını yapıyor
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        // value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? <div><Icon name="warning circle" />{formik.errors.email}</div> : null}
                </Form>
            </Form.Field>
            <Form.Field >
                <label>Password</label>
                <Form>
                    <div>
                        <input placeholder='Password' type='password' />
                    </div>
                </Form>
            </Form.Field>
            <Form.Field>
                <label >Company name</label>
                <Form>
                    <input
                        id="companyName"
                        name="companyName"
                        type="text"
                        placeholder='Company Name'
                        {...formik.getFieldProps('companyName')}
                        //Bu aşağıdaki 3 satır kodu  tek satır ile aynısını yapıyor
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        // value={formik.values.companyName}
                    />
                    {formik.touched.companyName && formik.errors.companyName ? <div><Icon name="warning circle" />{formik.errors.companyName}</div> : null}
                </Form>
            </Form.Field>
            <Form.Field>
                <label>Company website</label>
                <Form>
                    <input placeholder='www.example.com' />
                </Form>
            </Form.Field>
            <Form.Field>
                <label>Company phone number</label>
                <Form>
                    <input placeholder='+1 (999) 999 99 99' />
                </Form>
            </Form.Field>
            <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
    )
}