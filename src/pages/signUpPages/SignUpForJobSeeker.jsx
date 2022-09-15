import React from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react'
// buraya datepicker gelecek doğum tarihi elle girmek yerine onu ayarlarım ilerde
// şuan sadece tasarım olarak tasarlayın deniyordu daha öğrenecek çok şey var 
//gerçeğe yakın yapmak için 


export default function SignUpForJobSeeker() {
    return (
        <Form style={{
            position: 'absolute', left: '30%', top: '20%',right : '30%'
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
                <label>Name</label>
                <input placeholder='Name' />
            </Form.Field>
            <Form.Field>
                <label>Surname</label>
                <input placeholder='Surname' />
            </Form.Field>
            <Form.Field>
                <label>National ID</label>
                <input placeholder='11111111111' />
            </Form.Field>
            <Form.Field>
                <label>Date of birth</label>
                <input placeholder='25/03/1999' />
            </Form.Field>
            <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
    )
}