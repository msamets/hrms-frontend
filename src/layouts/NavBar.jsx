import React from "react";
import hrmsLogo from "../public/logo1.jpg"
import "../layouts/LayoutStyle.css"
import { Menu } from 'semantic-ui-react'



export default function NavBar() {
  return (
    <div className="nav">
    <Menu secondary className="menu">

      <img src={hrmsLogo} alt="" className="nav--logo" />
      <Menu.Item className="menu--item"
        name='Home'
      />

      <Menu.Item className="menu--item"
        name='Job Seekers'

      />
      <Menu.Item className="menu--item"
        name='Job Advertisement'

      />
      <Menu.Item className="menu--item"
        name='Employers'

      />
      <Menu.Menu position='right' className="menu--right">


        <Menu.Item className="menu--item"
          name='Login'

        />
        <Menu.Item className="menu--item"
          name='logout'

        />
      </Menu.Menu>
    </Menu>
    </div>


  )
}

/*

<nav >
        <img src={hrmsLogo} alt="" className="nav--logo" />
        <h1> HRMS</h1>
        
        
        <h4 >Home</h4>
        <h4>Job Seekers</h4>
        <h4>Job Advetisements</h4>
        <h4>Employers</h4>

        <h2 >Login</h2>
        <h2 >Logout</h2>
      </nav>


*/