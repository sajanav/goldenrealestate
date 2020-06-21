import React, { Component } from "react";
import {
  
    MDBMask,
    MDBRow,
    MDBView,
    MDBContainer,
    MDBAnimation
  } from 'mdbreact';
    export default class NoRecordPage extends Component {
    render() {
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