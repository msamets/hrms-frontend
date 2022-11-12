import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SignedIn(props) {
    return (
        <div className='menu--item'>
            <Menu.Item >
                <Image avatar spaced="right" src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000" />
                <Dropdown pointing="top left" text='Samet'>
                    <Dropdown.Menu>
                        <Dropdown.Item text="My info" icon="info" />
                        <Dropdown.Item onClick={props.signOut} text="Log out" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
