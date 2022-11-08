import React from "react";
import { Icon, Checkbox } from 'semantic-ui-react'
import "./SignUpPageStyle.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import JobSeekerService from "../../services/jobSeekerService";

const jobSeekerService = new JobSeekerService;

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
const nationalIdNumberRegexForTurkey = /^([1-9]{1})([0-9]{10})$/

const onSubmit = (values, {resetForm}) => {
    console.log(values);
    jobSeekerService.add(values).then(response => {
        console.log(response);
        console.log(response.data.message);
        //buraya modal ekle başarıyla eklendiyse tamam deyip anasayfaya yönlendirsin
        if(response.data.success){
            setTimeout(() => {
                resetForm();
            }, 100);
        }
    }).catch((error) =>{
        //buraya modal ekle hatayı modal şeklinde ekrana pop-up yapsın.
        console.log(error);
        console.log(error.response);
        //console.log(exception.response.data.message);
    })
    
    
};

export default function SignUpForJobSeeker() {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirmPassword: "",
            name: "",
            surname: "",
            nationalIdNumber: "",
            dateOfBirth: "",
            acceptedTerms: false
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email address").required("Required"),
            password: Yup.string().matches(passwordRegex,
                { message: "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number" })
                .required("Required"),
            confirmPassword: Yup.string().oneOf([Yup.ref("password"), null],
                "Passwords must match").required("Required"),
            name: Yup.string().min(2, "Name must be 2 character or more").max(20, "Name must be 20 character or less").required("Required"),
            surname: Yup.string().min(2, "Surname must be 2 character or more").max(20, "Surname must be 20 character or less").required("Required"),
            nationalIdNumber: Yup.string().matches(nationalIdNumberRegexForTurkey,
                { message: "National id must be 11 character" }).required("Required"),
            dateOfBirth: Yup.date().min(new Date(1950, 1, 1, 1, 1, 1, 1), "Birth of date must be greater than 1950").max(new Date(), "Invalid Birth of date").required("Required"),
            acceptedTerms: Yup.boolean().required("Required").oneOf([true],
                "You must accept the terms and conditions")
        }),
        onSubmit,
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <h1>Job Seeker Sign Up</h1>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder='Email'
                    {...formik.getFieldProps("email")}
                    className={formik.errors.email && formik.touched.email ? "input-error" : ""}
                />
                {formik.errors.email && formik.touched.email ? <div className="error"><Icon name="warning circle" />{formik.errors.email}</div> : null}
            </div>
            <div >
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type='password'
                    placeholder='Password'
                    {...formik.getFieldProps("password")}
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
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder='Name'
                    {...formik.getFieldProps("name")}
                    className={formik.errors.name && formik.touched.name ? "input-error" : ""}
                />
                {formik.touched.name && formik.errors.name ? <div className="error"><Icon name="warning circle" />{formik.errors.name}</div> : null}

            </div>
            <div>
                <label htmlFor="surname">Surname</label>
                <input
                    id="surname"
                    name="surname"
                    type="text"
                    placeholder='Surname'
                    {...formik.getFieldProps("surname")}
                    className={formik.errors.surname && formik.touched.surname ? "input-error" : ""}
                />
                {formik.touched.surname && formik.errors.surname ? <div className="error"><Icon name="warning circle" />{formik.errors.surname}</div> : null}

            </div>
            <div>
                <label htmlFor="nationalIdNumber">National ID Number</label>
                <input
                    id="nationalIdNumber"
                    name="nationalIdNumber"
                    type="text"
                    placeholder='National ID Number'
                    {...formik.getFieldProps("nationalIdNumber")}
                    className={formik.errors.nationalIdNumber && formik.touched.nationalIdNumber ? "input-error" : ""}
                />
                {formik.touched.nationalIdNumber && formik.errors.nationalIdNumber ? <div className="error"><Icon name="warning circle" />{formik.errors.nationalIdNumber}</div> : null}

            </div>
            <div>
                <label htmlFor="dateOfBirth">Date of birth</label>
                <input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    {...formik.getFieldProps("dateOfBirth")}
                    className={formik.errors.dateOfBirth && formik.touched.dateOfBirth ? "input-error" : ""}
                />
                {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? <div className="error"><Icon name="warning circle" />{formik.errors.dateOfBirth}</div> : null}

            </div>
            <div className="checkbox">
                <Checkbox
                    label='I agree to the Terms and Conditions'
                    id="acceptedTerms"
                    name="acceptedTerms"
                    type="checkbox"
                    {...formik.getFieldProps("acceptedTerms")}
                />
                {formik.touched.acceptedTerms && formik.errors.acceptedTerms ? <div className="error"><Icon name="warning circle" />{formik.errors.acceptedTerms}</div> : null}

            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}