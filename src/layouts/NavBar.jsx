import React from "react";
import hrmsLogo from "../public/logo1.jpg"
import "./NavBarStyle.css";
import { Menu } from 'semantic-ui-react'
import { Link, useNavigate } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { useState } from "react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";



//Security yapıldıktan sonra buraya tekrar düzel

export default function NavBar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  function handleSignout(params){
    setIsAuthenticated(false)
    navigate("/")
  }

  function handleSignIn(params){
    setIsAuthenticated(true)
  }



  return (
    <div className="nav">
      <Menu secondary className="menu">

        <Link to={"/"} className="menu--item">
          <img src={hrmsLogo} alt="" className="nav--logo" />
        </Link>

        <Link to={"/"} className="menu--item">
          <Menu.Item name='Home' icon="home" position="left" link />
        </Link>
      
        <Link to="/jobAdvertisement/list" className="menu--item">
          <Menu.Item name='Job Advertisements' link position="left" icon={<MdWork />} />
        </Link>

        <Link to={"/jobSeekerList"} className="menu--item">
          <Menu.Item name='Job Seekers' position="left" link icon="user" />
        </Link>

        <Link to="/employerList" className="menu--item">
          <Menu.Item name='Employers' link position="left" icon={<FaUserTie />} />
        </Link>

        <Menu.Menu position='right' className="menu--right">
          {isAuthenticated? <SignedIn signOut={handleSignout} /> 
          : <SignedOut signIn={handleSignIn} />}
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