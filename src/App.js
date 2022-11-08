import React from 'react';
import './App.css';
import NavBar from '../src/layouts/NavBar';
import 'semantic-ui-css/semantic.min.css';
import JobAdvertisementList from './pages/JobAdvertisementPages/JobAdvertisementList';
import JobSeekerCvCreate from './pages/JobSeekerCvPages/JobSeekerCvCreate';
import JobSeekerCvList from './pages/JobSeekerCvPages/JobSeekerCvList';
import JobSeekerCvProps from './pages/JobSeekerCvPages/JobSeekerCvProp';
import JobAdvertisementDetail from './pages/JobAdvertisementPages/JobAdvertisement';
import JobAdvertisementCreate from './pages/JobAdvertisementPages/JobAdvertisementCreate';
import SystemEmployeePermission from './pages/SystemEmployeePermission';
import HomeForEmployer from './pages/homePages/HomeForEmployer';
import HomeForJobSeeker from './pages/homePages/HomeForJobSeeker';
import HomeForSystemEmployee from './pages/homePages/HomeForSystemEmployee';
import JobseekerAccount from './pages/accountPages/JobSeekerAccount';
import EmployerAccount from './pages/accountPages/EmployerAccount';
import SystemEmployeeAccount from './pages/accountPages/SystemEmployeeAccount';
import WhoAppliedToJobAdv from './pages/WhoAppliedToJobAdv';
import SignUpForEmployer from './pages/signUpPages/SignUpForEmployer';
import SignUpForJobSeeker from './pages/signUpPages/SignUpForJobSeeker';
import { Container, Grid } from 'semantic-ui-react';
import JobAdvertisementListForJobSeekerHome from './pages/homePages/JobSeekerHomeComponents/JobAdvertisementListForJobSeekerHome';


function App() {
  return (
    <div>
      <NavBar/>
      <div className='main'>
      <JobAdvertisementList/>
      </div>
    </div>
  );
}

export default App;
