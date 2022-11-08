import React from "react";
import { Form, Checkbox, Button, Placeholder, TextArea, FormField, Dropdown } from "semantic-ui-react";
import "./JobAdvStyle.css";

const workingTypes = [
    {key:"Remote", text:"Remote", value:"Remote"},
    {key:"Hybrid", text:"Hybrid", value:"Hybrid"}
]
const workingTimes = [
    {key:"Full Time", text:"Full Time", value:"Full Time"},
    {key:"Part Time", text:"Part Time", value:"Part Time"}
]

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

                    <Form.Group>
                        
                        <Form.Dropdown 
                        label ="Select Working Type"
                        placeholder="Working Types"
                        selection
                        options = {workingTypes}
                        />
                        <Form.Dropdown 
                        label = "Select Working Time"
                        placeholder="Working Times"
                        selection
                        options = {workingTimes}
                        />
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

                    <Form.Field className="signup--checkbox">
                        <Checkbox 
                        label='Active' />
                    </Form.Field>
                    <Button type='submit'>Create Job Advertisement</Button>
                </Form>
            </div>
            <Placeholder />
        </div>
    )
}