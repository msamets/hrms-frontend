import React from "react";
import { Button, Form } from "semantic-ui-react";
import "./Style.css";



// Burdaki alanlar modal şeklinde ekrana çıkacak
// ordan işlemler yapılacak
//cv,education info, lanugages,job experiences button şeklinde olsun
//email password ad soyad tcNo birthDate text şeklinde



//Photo Kısmı ekle
export default function JobseekerAccount() {
    return (
        <div className="Account">
            <div className="Account--Form">
                {/* burda form içine kullanıcının bilgileri otomatik girmeli */}
{/* pencil   trash   plus */}
                <Form className="Account--FormInside">
                    <Form.Group widths='equal'>
                        <Form.Input label="First name" placeholder="First name" />
                        <Form.Input label="Last name" placeholder="Last name" />
                    </Form.Group>

                    <Form.Field>
                        <Form.Input label="Identity Number" placeholder="11111111111" />
                    </Form.Field>

                    <Form.Field>
                        <Form.Input label="Birth date" type="Date" />
                    </Form.Field>

                    <Form.Field>
                        <Form.Input label="Email" placeholder="example1@gmail.com" />
                    </Form.Field>

                    <Form.Field>
                        <Form.Input type="password" label="Password" />
                    </Form.Field>

                    <Form.Group>
                        <Button content="Photos" circular fluid />
                        <Button circular icon ="trash"/>
                        <Button circular icon = "pencil"/>
                        <Button circular icon = "plus"/>
                    </Form.Group>

                    <Form.Group>
                        <Button content="Cv List" circular fluid />
                        <Button circular icon ="trash"/>
                        <Button circular icon = "pencil"/>
                        <Button circular icon = "plus"/>
                    </Form.Group>

                    <Form.Group>
                        <Button content="Education Informations" circular fluid />
                        <Button circular icon ="trash"/>
                        <Button circular icon = "pencil"/>
                        <Button circular icon = "plus"/>
                    </Form.Group>

                    <Form.Group>
                        <Button content="Languages" circular fluid />
                        <Button circular icon ="trash"/>
                        <Button circular icon = "pencil"/>
                        <Button circular icon = "plus"/>
                    </Form.Group>

                    <Form.Group>
                        <Button content="Job Experiences" circular fluid />
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