import React, { Component } from "react";
import {
    
    MDBMask,
    MDBRow,
    MDBCol,
    MDBView,
    MDBContainer,
    MDBAnimation
  } from 'mdbreact';
    export default class HomePage extends Component {
    render() {
        return (
   <div>
        <MDBView>
          <MDBMask className='white-text gradient' />
          <MDBContainer 
            style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
            className='d-flex justify-content-center black-text align-items-center'
          >
            <MDBRow>
              <MDBCol md='6' className='text-center text-md-left mt-xl-5 mb-5'>
                <MDBAnimation type='fadeInLeft' delay='.3s'>
                  <h1 className='h1-responsive font-weight-bold mt-sm-5'>
                    Track your progress with our app
                  </h1>
                  <hr className='hr-light' />
                   <h6 className='mb-4'>
                    You can create your itenaries and track the status .This application empowers you to 
                    manage the resources and closely monitor them in an efficient way with a set of
                    clean and user friendly screens .If you have any feedbacks, please feel free to Contact
                    us . 
                  </h6>
                  <button  onClick={this.handleClick.bind(this)}
                  >Contact Us</button>
                  </MDBAnimation>
              </MDBCol>

              <MDBCol md='6' xl='5' className='mt-xl-5'>
                <MDBAnimation type='fadeInRight' delay='.3s'>
                  <img
                    src='https://resources.lookup.ae/news/8856559617033964.jpg'
                    alt=''
                    className='img-fluid'
                  />
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
      <MDBContainer>
          <MDBRow className='py-5'>
            <MDBCol md='12' className='text-center'>
            <h6 className='mb-4'>
              <i class="fas fa-copyright"></i>
              2020 Copyright:Sajana Vijayan
              </h6>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        </div>
        );
        }
        handleClick() {
            window.location.href= 'https://www.linkedin.com/in/sajana-vijayan-1448a4aa/';
          }
}
