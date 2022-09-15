import React from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react'




export default function SignUpForEmployer() {
    return (
        <Form style={{
            position: 'absolute', left: '30%', top: '20%', right: '30%'
        }}>
            <Form.Field>
                <label>Email</label>
                <input placeholder='abc123@abc.com' />
            </Form.Field>
            <Form.Field >
                <label>Password</label>
                <input placeholder='Password' 
                fluid
                type='password'/>
            </Form.Field>
            <Form.Field>
                <label>Company name</label>
                <input placeholder='Name' />
            </Form.Field>
            <Form.Field>
                <label>Company website</label>
                <input placeholder='www.example.com' />
            </Form.Field>
            <Form.Field>
                <label>Company phone number</label>
                <input placeholder='+1 (999) 999 99 99' />
            </Form.Field>
            <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
    )
}