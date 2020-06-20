import React, { Component } from "react";
import ProgressBarDataService from "../services/progressbar.service";
import { Link } from "react-router-dom";
import NoRecordPage from "../components/norecord-componet";
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
export default class ProgressBarList extends Component {
    constructor(props) {
      super(props);
      this.retrieveProgressBar = this.retrieveProgressBar.bind(this);
      this.refreshList = this.refreshList.bind(this);
  
      this.state = {
        progressBars: [],
        currentProgressBar: null,
        currentIndex: -1,
        searchName: ""
      };
     }
     componentDidMount() {
        this.retrieveProgressBar();
      }
    
      onChangeSearchName(e) {
        const searchTitle = e.target.value;
    
        this.setState({
          searchTitle: searchTitle
        });
      }

      retrieveProgressBar() {
        ProgressBarDataService.getAll()
          .then(response => {
            this.setState({
              progressBars: response.data
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }
    
      refreshList() {
        this.retrieveProgressBar();
        this.setState({
          currentProgressBar: null,
          currentIndex: -1
        });
      }
      setActiveProgressBar(progressBar, index) {
        this.setState({
          currentProgressBar: progressBar,
          currentIndex: index
        });
      }
      render() {
        const { progressBars, currentProgressBar, currentIndex } = this.state;
        if (progressBars.length == 0) {
          console.log("building length is zero", progressBars.length);
          return <NoRecordPage/>
        }else{
        return (
            
            <div>
              <MDBView>
              <MDBContainer
            style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
            className='d-flex justify-content-center black-text align-items-center'
          />
            </MDBView>
            <div className="list row">
               <div className="col -md-6">
                <h4>Progress Bar</h4>
                <ul className="list-group">
                  {progressBars &&
                    progressBars.map((progressBar, index) => (
                      <li
                        className={
                          "list-group-item " +
                          (index === currentIndex ? "active" : "")
                        }
                        onClick={() => this.setActiveProgressBar(progressBar, index)}
                        key={index}
                       >
                        {progressBar.progressbarid}

                      </li>
                    ))}
                </ul>
              </div>
              <div className="col-md-6">
                {currentProgressBar ? (
                  <div>
                    <h4>Employee</h4>
                    <div>
                      <label>
                        <strong>Name:</strong>
                      </label>{" "}
                      {currentProgressBar.employeeName}
                    </div>
                    <div>
                      <label>
                        <strong>Email ID:</strong>
                      </label>{" "}
                      {currentProgressBar.emailID}
                    </div>
                    <div>
                      <label>
                        <strong>Contact No:</strong>
                      </label>{" "}
                      {currentProgressBar.contactNo}
                    </div>
      
                    <Link
                      to={"/progressbar/" + currentProgressBar.employee.employeeName}
                      className="badge badge-warning"
                    >
                      Edit
                    </Link>
                  </div>
                ) : (
                  <div>
                    <br />
                    <p></p>
                  </div>
                )}
              </div>
            </div>
            </div>
          );
         }
      }
    }