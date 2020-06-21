import React, { Component } from "react";
import {
    MDBView,
    MDBRow,
    MDBCol,
    MDBContainer
  } from 'mdbreact';
    export default class CopyRightPage extends Component {
    render() {
        return (<MDBContainer>
             <MDBView>
              <MDBContainer
            style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
            className='d-flex justify-content-center black-text align-items-center'/>
            </MDBView>
            <MDBRow className='py-5'>
              <MDBCol md='12' className='text-center'>
              <h6 className='mb-4'>
                <i className="fas fa-copyright"></i>
                2020 Copyright:Sajana Vijayan
                </h6>
              </MDBCol>
            </MDBRow>
          </MDBContainer>);
           }
       
}