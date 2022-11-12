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
import AlertPopup from './core/utilities/alert/AlertPopup';
import Home from './pages/homePages/Home';
import { Route, Routes } from 'react-router-dom';
import SignUpForSystemEmployee from './pages/signUpPages/SignUpForSystemEmployee';
import LoginPanel from './pages/Login';
import JobSeekerList from './pages/list/JobSeekerList';
import EmployerList from './pages/list/EmployerList';


function App() {
  return (
    <div>
      <NavBar />
      <AlertPopup />
      <div className='main'>
        <Routes>
          <Route path='*' element={<div><h1>Page not found</h1></div>}/>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/employer' element={<HomeForEmployer/>} />
          <Route path='/jobSeeker' element={<HomeForJobSeeker/>} />
          <Route path='/jobSeekerList' element={<JobSeekerList/>} />
          <Route path='/employerList' element={<EmployerList/>} />

          <Route path='/account'>
            <Route path='/account/jobSeeker' element={<JobseekerAccount/>}/>
            <Route path='/account/employer' element={<EmployerAccount/>} />
            <Route path='/account/systemEmployee' element={<SystemEmployeeAccount/>} />
          </Route>

          <Route path='/jobSeekerCv'>
            <Route path='/jobSeekerCv/create' element={<JobSeekerCvCreate/>} />
            <Route path='/jobSeekerCv/list' element={<JobSeekerCvList/>} />
            <Route path='/jobSeekerCv/props' element={<JobSeekerCvProps/>} />
          </Route>

          <Route path='/signup'>
            <Route path='/signup/jobSeeker' element={<SignUpForJobSeeker/>} />
            <Route path='/signup/employer' element={<SignUpForEmployer/>} />
            <Route path='/signup/systemEmployee' element={<SignUpForSystemEmployee/>} />
          </Route>

          <Route path='/login' element={<LoginPanel/>} />
          <Route path='/systemEmployeePermission' element={<SystemEmployeePermission/>} />
          <Route path='/WhoAppliedToMyJobAdv' element={<WhoAppliedToJobAdv/>} />
          

          <Route path='/jobAdvertisement'>
            <Route path='/jobAdvertisement/list' element={<JobAdvertisementList />}/>
            <Route path='/jobAdvertisement/detail' element={<JobAdvertisementDetail/>}/>
            <Route path='/jobAdvertisement/create' element={<JobAdvertisementCreate/>} />
          </Route>
        </Routes>



      </div>
    </div>
  );
}

export default App;
