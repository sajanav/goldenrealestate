import React, { Component } from "react";
import BuildingDataService from "../services/building.service";
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
export default class BuildingList extends Component {
    constructor(props) {
      super(props);
      this.retrieveBuildings = this.retrieveBuildings.bind(this);
      this.refreshList = this.refreshList.bind(this);
  
      this.state = {
        buildings: [],
        currentBuiliding: null,
        currentIndex: -1,
        searchName: ""
      };
     }
     componentDidMount() {
        this.retrieveBuildings();
      }
    
      onChangeSearchName(e) {
        const searchTitle = e.target.value;
    
        this.setState({
          searchTitle: searchTitle
        });
      }

      retrieveBuildings() {
        BuildingDataService.getAll()
          .then(response => {
            this.setState({
                buildings: response.data
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }
    
      refreshList() {
        this.retrieveBuildings();
        this.setState({
          currentBuiliding: null,
          currentIndex: -1
        });
      }
      setActiveEmployee(employee, index) {
        this.setState({
          currentBuiliding: employee,
          currentIndex: index
        });
      }

   
      render() {
        const { buildings, currentBuilding, currentIndex } = this.state;
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
                <h4>Building List</h4>
                <ul className="list-group">
                  {buildings && 
                    buildings.map((building, index) => (
                      <li
                        className={
                          "list-group-item " +
                          (index === currentIndex ? "active" : "")
                        }
                        onClick={() => this.setActiveEmployee(building, index)}
                        key={index}
                       >
                        {building}
                      </li>
                    ))}
                </ul>
              </div>
              <MDBView>
              <MDBContainer
            style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
            className='d-flex justify-content-center black-text align-items-center'
          />
            </MDBView>
              <div className="col-md-6">
                {currentBuilding ? (
                  <div>
                    <h4>Building</h4>
                    <div>
                      <label>
                        <strong>Name:</strong>
                      </label>{" "}
                      {currentBuilding.employeeName}
                    </div>
                    <div>
                      <label>
                        <strong>Location:</strong>
                      </label>{" "}
                      {currentBuilding.emailID}
                    </div>
                    <div>
                      <label>
                        <strong>Contact No:</strong>
                      </label>{" "}
                      {currentBuilding.contactNo}
                    </div>
      
                    <Link
                      to={"/buildings/" + currentBuilding.employeeID}
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