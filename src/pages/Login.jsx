import React from "react";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import hrmsLogo from "../public/logo1.jpg"


export default function LoginPanel() {
    return (
        <Grid textAlign='center' style={{ height: '300vh' }} verticalAlign='middle'>
            <Grid.Column style={{
                maxWidth: 600, position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
                <Header as='h2' color='brown' textAlign='center' >
                    <Image src={hrmsLogo} /> Log-in to your account
                </Header>
                <Form size='large'>
                    <Segment stacked>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                        />

                        <Button color='brown' fluid size='large' >
                            Login
                        </Button>
                    </Segment>
                </Form>
                <Message>
                    New to us? <a href='#'>Sign Up</a>
                </Message>
            </Grid.Column>
        </Grid>
    )
}