import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import EmployeeList from "./components/employees-list.component";
import BuildingList from "./components/buildings-list.component";
import DefectList from "./components/defects-list.component";
import ProgressBarList from "./components/progress-bar.component";
import HomePage from "./components/home.component";


import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBFormInline,
  MDBAnimation
} from 'mdbreact';
class App extends Component {

  componentDidMount() {
   
  }
  render() {
      return (
      <div>
      <Router>
        <div>
        <MDBNavbar
              color='white'
              dark
              expand='md'
              fixed='top'
              scrolling
              transparent
              style={{ marginTop: '1px' }}
              >
              <MDBContainer>
                <MDBCollapse  navbar>
                  <MDBNavbarNav left className="font-weight-bold">
                  <MDBNavItem active>
                      <MDBNavLink to='/home' className='black-text'><i class="fas fa-home"></i></MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem active>
                      <MDBNavLink to='/employees' className='black-text'>Employee</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to='/buildings' className='black-text'>Building</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to='/defects'className='black-text'>Defect</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to='/progressbar'className='black-text'>Progress Board</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                 </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
           </div>
           <div>
            <Switch>
              <Route  component={EmployeeList} path="/employees" />
              <Route  component={BuildingList} path="/buildings" />
              <Route  component={DefectList} path="/defects" />
              <Route  component={ProgressBarList} path="/progressbar" />
              <Route  component={HomePage} path="/home" />

            </Switch>
          </div>
       </Router>
       
      </div>
      
    );
  }
}
export default App;
