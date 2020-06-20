import React, { Component } from "react";
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
    export default class NoRecordPage extends Component {
    render() {
        console.log("i am inside no record page");
        return (<MDBView>
            <MDBMask className='white-text gradient' />
            <MDBContainer 
              style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
              className='d-flex justify-content-center black-text align-items-center'
            >
              <MDBRow>
                  <MDBAnimation type='fadeInLeft' delay='.3s'>
                    <h1>
                      No recrods available
                    </h1>
                    </MDBAnimation>
  
              </MDBRow>
            </MDBContainer>
          </MDBView>);
           }
       
}