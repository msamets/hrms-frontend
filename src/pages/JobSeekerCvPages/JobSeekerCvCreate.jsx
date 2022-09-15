import React from "react";
import { Button, Form, Input, Dropdown, Modal, Image } from 'semantic-ui-react'

//burayı jobSeeker ın bilgilerinden otomatik çekecek 
const jobSeekerSchools = [
    { key: 'itü', text: 'İstanbul Teknik Üniversitesi', value: 'itü' },
    { key: 'ibü', text: 'İstanbul Bilgi Üniversitesi', value: 'ibü' }
]

const jobSeekerExperiences = [
    { key: 'ex1', text: 'Job Experience 1', value: 'ex1' },
    { key: 'ex2', text: 'Job Experience 2', value: 'ex2' }
]

const jobSeekerLanguages = [
    { key: 'en', text: 'English', value: 'en' },
    { key: 'de', text: 'German', value: 'de' }
]

function ModalExampleTopAligned() {
    const [open, setOpen] = React.useState(false)

    return (
        <Modal
            centered={false}
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            trigger={<Button>Add Info</Button>}
        >
            <Modal.Header>Deneme</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    Bu sadece örnek gerçeği en yakın zamanda yapılacaktır.
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setOpen(false)}>OK</Button>
            </Modal.Actions>
        </Modal>
    )
}


function ModalExampleContentImage() {
    const [open, setOpen] = React.useState(false)

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button>Add Photo</Button>}
        >
            <Modal.Header>Upload image</Modal.Header>
            <Modal.Content image>
                <Image size='small' src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped />
                <Modal.Description>
                    <p>Would you like to upload this image?</p>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button onClick={() => setOpen(false)} positive>
                    Ok
                </Button>
            </Modal.Actions>
        </Modal>
    )
}





export default function JobSeekerCvCreate() {
    return (
        <Form style={{
            position: 'absolute', left: '30%', top: '20%', right: '30%'
        }}>
            <Form.Field>
                <label>Cv name</label>
                <input placeholder='My cv for secretary jobs' />
            </Form.Field>
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png'
                size='small' rounded disabled />
            <ModalExampleContentImage />
            <Form.Field>
                <label>School</label>
                <Dropdown placeholder='School' fluid multiple selection options={jobSeekerSchools} />
                <ModalExampleTopAligned />
            </Form.Field>

            <Form.Field>
                <label>Job Experience</label>
                <Dropdown placeholder='Job Experience' fluid multiple selection options={jobSeekerExperiences} />
                <ModalExampleTopAligned />
            </Form.Field>

            <Form.Field>
                <label>Language</label>
                <Dropdown placeholder='Language' fluid multiple selection options={jobSeekerLanguages} />
                <ModalExampleTopAligned />
            </Form.Field>
            {/* <h1>dropdown for language , add button to here for add to language info
                because maybe language info could wasn't exist</h1> */}
            <Form.Field>
                <label>Cover Letter</label>
                <input placeholder='Cover Letter' />
            </Form.Field>

            <Form.Field>
                <label>Github profile</label>
                <input placeholder='Surname' />
            </Form.Field>
            <Form.Field>
                <label>What is your skills?</label>
                <input placeholder='11111111111' />
            </Form.Field>
            <Form.Field>
                <label>Linkedin profile</label>
                <Input label='www.linkedin.com/in/' placeholder='JohnSmith' />
            </Form.Field>

            <Button type='submit'>Save</Button>
        </Form>
    )
}