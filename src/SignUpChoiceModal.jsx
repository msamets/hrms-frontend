import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Header, Modal } from 'semantic-ui-react'

export default function SignUpChoiceModal(props) {
    const [open, setOpen] = useState(false)




    return (
        <Modal
            closeIcon
            open={open}
            trigger={props.trigger}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
        >
            <Header icon='signup' content='Sign up' />
            <Modal.Content>
                <p>
                    Are you job seeker or employer?
                </p>
            </Modal.Content>
            <Modal.Actions>
                <Button.Group size='tiny'  >
                    <Link to="/signup/jobSeeker" >
                        <Button color='brown' size='tiny' onClick={() => setOpen(false)}>
                             I am job seeker
                        </Button>
                    </Link>

                    <Link to="/signup/employer" >
                        <Button color='brown' size='tiny'  onClick={() => setOpen(false)}
                        style={{marginLeft: "0.5em"}}>
                             I am employer
                        </Button>
                    </Link>
                </Button.Group>
            </Modal.Actions>
        </Modal>
    )
}
