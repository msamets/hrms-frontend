import React from "react";
import { Form, Button } from "semantic-ui-react";
import "./Style.css";



export default function EmployerAccount() {
    return (
        <div className="Account">
            <div className="Account--Form">
                {/* burda form içine kullanıcının bilgileri otomatik girmeli */}
{/* pencil   trash   plus */}

                    <Form className="Account--FromInside">
                        <Form.Group widths="equal">
                            <Form.Input label = "Company Name" placeholder = "Company Name"/>
                            <Form.Input label = "Company Website" placeholder = "Company Website"/>
                        </Form.Group>

                        <Form.Field>
                            <Form.Input label ="Email" placeholder="example1@gmail.com"/>
                        </Form.Field>

                        <Form.Field>
                            <Form.Input label ="Password" type="password"/>
                        </Form.Field>

                        <Form.Field>
                            <Form.Input label ="Phone number" placeholder="+00 (555) 555 55 55"/>
                        </Form.Field>

                        <Form.Group>
                        <Button content="My Job Advertisements" circular fluid />
                        <Button circular icon ="trash"/>
                        <Button circular icon = "pencil"/>
                        <Button circular icon = "plus"/>
                    </Form.Group>

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