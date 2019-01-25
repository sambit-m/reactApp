import React, { Component } from 'react';
import './App.css';
import {Navbar, NavbarBrand } from 'reactstrap';
import DoctorVerification from './Components/DoctorVerificationComponent';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar dark color="primary">
            <div className="container">
            <NavbarBrand href='/'> Techvictus </NavbarBrand>
          </div>
        </Navbar>
        <div>
          <DoctorVerification/>
        </div>
      </div>
    );
  }
}

export default App;
