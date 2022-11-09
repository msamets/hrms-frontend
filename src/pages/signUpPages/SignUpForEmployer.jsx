import React, { useEffect } from "react";
import { Button, Checkbox, Form, Icon, Modal } from 'semantic-ui-react';
import { Formik, useField, useFormik } from "formik";
import * as Yup from "yup";
import "./SignUpPageStyle.css";
import EmployerService from "../../services/employerService";
import useAlert from "../../core/utilities/alert/useAlert";


const employerService = new EmployerService();

const websiteRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
const phoneNumberRegex = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/






export default function SignUpForEmployer() {
    

    const {setAlert} = useAlert();

    const onSubmit = (values, { resetForm }) => {

        console.log(values);
        employerService.add(values).then(response => {
            //console.log(response);
            //console.log(response.data.message);

            
            if (response.data.success) {
                setTimeout(() => {
                    setAlert("Başarıyla üye olundu, anasayfaya yönderiliyor.","success");
                    resetForm();
                }, 100);
            }
            else{
                setAlert(response.data.message, "error");
            }
        }).catch((error) => {
            //window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            
            //setAlert(error.response, "error");
            //buraya modal ekle hatayı modal şeklinde ekrana pop-up yapsın.
            console.log(error);
            console.log(error.response);
        });




    };



    //const { setAlert } = useAlert();


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
            companyName: '',
            companyWebsite: '',
            companyPhoneNumber: '',
            acceptedTerms: false //added checkbox,
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email address").required("Required"),
            password: Yup.string().matches(passwordRegex,
                { message: "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number" }).required("Required"),
            confirmPassword: Yup.string().oneOf([Yup.ref("password"), null],
                "Passwords must match").required("Required"),
            companyName: Yup.string().max(30, "Must be 30 charachters or less")
                .required("Required"),
            companyWebsite: Yup.string().matches(websiteRegex, "Invalid Website").required("Required"),
            companyPhoneNumber: Yup.string().matches(phoneNumberRegex,
                "Invalid Phone number").min(10, "to short").max(13, "to long").required("Required"),
            acceptedTerms: Yup.boolean().required("Required").oneOf([true],
                "You must accept the terms and conditions.")
        }),
        onSubmit,



    })

    // console.log(formik.values)
    // console.log(formik.errors)
    return (
        <div>
            <form onSubmit={formik.handleSubmit} >
                <h1>Employer Sign Up</h1>
                <div>
                    <label htmlFor="email" >Email</label>

                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder='Email'
                        {...formik.getFieldProps('email')}
                        className={formik.errors.email && formik.touched.email ? "input-error" : ""}
                    //Bu aşağıdaki 3 satır kodu  tek satır ile aynısını yapıyor
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    // value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? <div className="error"><Icon name="warning circle" />{formik.errors.email}</div> : null}


                </div>
                <div >
                    <label htmlFor="password">Password</label>


                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder='Password'
                        {...formik.getFieldProps('password')}
                        className={formik.errors.password && formik.touched.password ? "input-error" : ""}
                    />
                    {formik.touched.password && formik.errors.password ? <div className="error"><Icon name="warning circle" />{formik.errors.password}</div> : null}


                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>

                    <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                        {...formik.getFieldProps('confirmPassword')}
                        className={formik.errors.confirmPassword && formik.touched.confirmPassword ? "input-error" : ""}
                    />
                    {(formik.touched.confirmPassword && formik.errors.confirmPassword) || (formik.touched.password && formik.errors.password) ? <div className="error"><Icon name="warning circle" />{formik.errors.confirmPassword}</div> : null}

                </div>
                <div>
                    <label htmlFor="companyName">Company name</label>

                    <input
                        id="companyName"
                        name="companyName"
                        type="text"
                        placeholder='Company Name'
                        {...formik.getFieldProps('companyName')}
                        className={formik.errors.companyName && formik.touched.companyName ? "input-error" : ""}
                    //Bu aşağıdaki 3 satır kodu  tek satır ile aynısını yapıyor
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    // value={formik.values.companyName}
                    />
                    {formik.touched.companyName && formik.errors.companyName ? <div className="error"><Icon name="warning circle" />{formik.errors.companyName}</div> : null}

                </div>
                <div>
                    <label htmlFor="companyWebsite">Company website</label>

                    <input
                        id="companyWebsite"
                        name="companyWebsite"
                        type="text"
                        placeholder='Company Website'
                        {...formik.getFieldProps("companyWebsite")}
                        className={formik.errors.companyWebsite && formik.touched.companyWebsite ? "input-error" : ""}
                    />
                    {formik.touched.companyWebsite && formik.errors.companyName ? <div className="error"><Icon name="warning circle" />{formik.errors.companyWebsite}</div> : null}

                </div>
                <div>
                    <label htmlFor="companyPhoneNumber">Company phone number</label>


                    <input
                        id="companyPhoneNumber"
                        name="companyPhoneNumber"
                        type="text"
                        placeholder='(999) 999 99 99'
                        {...formik.getFieldProps("companyPhoneNumber")}
                        className={formik.errors.companyPhoneNumber && formik.touched.companyPhoneNumber ? "input-error" : ""}
                    />
                    {formik.touched.companyPhoneNumber && formik.errors.companyName ? <div className="error"><Icon name="warning circle" />{formik.errors.companyPhoneNumber}</div> : null}


                </div>
                <div className="checkbox">
                    <Checkbox
                        label='I agree to the Terms and Conditions'
                        id="acceptedTerms"
                        name="acceptedTerms"
                        type="checkbox"
                        {...formik.getFieldProps("acceptedTerms")} />

                    {formik.touched.acceptedTerms && formik.errors.acceptedTerms ? <div className="error"><Icon name="warning circle" />{formik.errors.acceptedTerms}</div> : null}
                </div>
                <button type='submit'>Submit</button>


            </form>
        </div>
    )
}