import React from "react";
import { Button, Form } from "semantic-ui-react";
import "./Style.css";


export default function SystemEmployeeAccount(){
    return(
        <div className="Account">
            <div className="Account--Form">
                {/* burda form içine kullanıcının bilgileri otomatik girmeli */}

                <Form className="Account--FormInside">
                    <Form.Group widths="equal">
                        <Form.Input label="First name" placeholder ="First name" />
                        <Form.Input label="Last name" placeholder ="Last name" />
                    </Form.Group>

                    <Form.Field>
                    <Form.Input label="Email" placeholder="example1@gmail.com" />
                    </Form.Field>

                    <Form.Field>
                    <Form.Input label="Password" type="password" />
                    </Form.Field>

                    <Form.Group>
                        <Button content="Photos" circular fluid />
                        <Button circular icon ="trash"/>
                        <Button circular icon = "pencil"/>
                        <Button circular icon = "plus"/>
                    </Form.Group>

                    <Form.Group>
                        <Button content="Save" circular fluid />
                        <Button content="Clear" circular fluid/>
                    </Form.Group>

                </Form>
            </div>
        </div>
    )
}