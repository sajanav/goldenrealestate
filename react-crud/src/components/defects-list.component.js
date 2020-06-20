import React, { Component } from "react";
import EmployeeDataService from "../services/employee.service";
import NoRecordPage from "../components/norecord-componet";
import { Link } from "react-router-dom";
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
export default class DefectList extends Component {
    constructor(props) {
      super(props);
      this.onChangeSearchName = this.onChangeSearchName.bind(this);
      this.retrieveEmployees = this.retrieveEmployees.bind(this);
      this.refreshList = this.refreshList.bind(this);
  
      this.state = {
        defects: [],
        currentDefect: null,
        currentIndex: -1,
        searchName: ""
      };
     }
     componentDidMount() {
        this.retrieveEmployees();
      }
    
      onChangeSearchName(e) {
        const searchTitle = e.target.value;
    
        this.setState({
          searchTitle: searchTitle
        });
      }

      retrieveEmployees() {
        EmployeeDataService.getAll()
          .then(response => {
            this.setState({
                employees: response.data
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }
    
      refreshList() {
        this.retrieveEmployees();
        this.setState({
          currentEmployee: null,
          currentIndex: -1
        });
      }
      setActiveEmployee(employee, index) {
        this.setState({
          currentEmployee: employee,
          currentIndex: index
        });
      }
      render() {
        const { defects, currentDefect, currentIndex } = this.state;
        if (defects.length == 0) {
          console.log("building length is zero", defects.length);
          return <NoRecordPage/>
        } else {
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
                <h4>Defect List</h4>
                <ul className="list-group">
                  {defects &&
                    defects.map((defect, index) => (
                      <li
                        className={
                          "list-group-item " +
                          (index === currentIndex ? "active" : "")
                        }
                        onClick={() => this.setActiveEmployee(defect, index)}
                        key={index}
                       >
                        {defect}
                      </li>
                    ))}
                </ul>
              </div>
              <div className="col-md-6">
                {currentDefect ? (
                  <div>
                    <h4>Defect</h4>
                    <div>
                      <label>
                        <strong>Name:</strong>
                      </label>{" "}
                      {currentDefect}
                    </div>
                    <div>
                      <label>
                        <strong>Description:</strong>
                      </label>{" "}
                      {currentDefect}
                    </div>
                     <Link
                      to={"/defects/" + currentDefect}
                      className="badge badge-warning"
                    >
                      Edit
                    </Link>
                  </div>
                ) : (
                  <div>
                    <br />
                    <p>Please click on a Defect...</p>
                  </div>
                )}
              </div>
            </div>
            </div>
          );
      }
     } 
    }