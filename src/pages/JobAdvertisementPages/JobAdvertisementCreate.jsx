import React from "react";
import { Form, Checkbox, Button, Placeholder, TextArea, FormField } from "semantic-ui-react";


export default function JobAdvertisementCreate() {
    return (
        <div className="create--main">
            <div className="create--inside">
                <Form>
                    <Form.Field>
                        <label>Job Position</label>
                        <input placeholder='Software Engineering etc.' />
                    </Form.Field>

                    <FormField>
                        <label>Job Detail</label>
                        <TextArea placeholder='Job Detail' />
                    </FormField>

                    <Form.Group widths='10'>
                        <Form.Input fluid label='Min. Salary' placeholder='Min. Salary' />
                        <Form.Input fluid label='Max. Salary' placeholder='Max. Salary' />
                    </Form.Group>

                    <FormField>
                        <label>Application Deadline</label>
                        <input placeholder='dd/mm/yyyy' />
                    </FormField>

                    <FormField>
                        <label>Location</label>
                        <input placeholder='City' />
                    </FormField>

                    <FormField>
                        <label>Open Position</label>
                        <input placeholder="Number of open position " />
                    </FormField>

                    <Form.Field>
                        <Checkbox label='Active' />
                    </Form.Field>
                    <Button type='submit'>Create Job Advertisement</Button>
                </Form>
            </div>
            <Placeholder />
        </div>
    )
}