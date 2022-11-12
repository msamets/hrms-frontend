import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Menu } from 'semantic-ui-react'
import SignUpChoiceModal from '../SignUpChoiceModal'

export default function SignedOut() {




    return (
        <div className='menu--item--button'>


            <Menu.Item>
                <Button.Group size='tiny' secondary fluid>
                    <Link to="/login">
                        <Button secondary>Login</Button>
                    </Link>
                    <Link>
                    
                    <SignUpChoiceModal trigger ={<Button secondary style={{ marginLeft: "0.5em" }}>Sign up</Button>} />
                    </Link>
                </Button.Group>
            </Menu.Item>
        </div>
    )
}
