import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut(props) {
    return (
        <div className='menu--item--button'>
            <Menu.Item>
                <Button.Group size='tiny' secondary fluid>
                <Button  secondary onClick={props.signIn}>Giriş yap</Button>
                <Button  secondary style={{ marginLeft: "0.5em" }}>Kayıt ol</Button>
                </Button.Group>
            </Menu.Item>
        </div>
    )
}
