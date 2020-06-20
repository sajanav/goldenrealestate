import React, { Component } from "react";
import BuildingDataService from "../services/building.service";
import NoRecordPage from "../components/norecord-componet";
import { Link } from "react-router-dom";
import {
  
  MDBView,
  MDBContainer
} from 'mdbreact';
export default class BuildingList extends Component {
    constructor(props) {
      super(props);
      this.retrieveBuildings = this.retrieveBuildings.bind(this);
      this.refreshList = this.refreshList.bind(this);
  
      this.state = {
        buildings: [],
        currentBuilding: null,
        currentIndex: -1,
        searchName: ""
      };
     }
     componentDidMount() {
        this.retrieveBuildings();
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
          currentDefect: null,
          currentIndex: -1
        });
      }
      setActiveBuilding(building, index) {
        this.setState({
          currentBuilding: building,
          currentIndex: index
        });
      }
      render() {
        const { buildings, currentBuilding, currentIndex } = this.state;
        if (buildings.length === 0) {
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
                <h4>Building List</h4>
                <ul className="list-group">
                  {buildings &&
                    buildings.map((building, index) => (
                      <li
                        className={
                          "list-group-item " +
                          (index === currentIndex ? "active" : "")
                        }
                        onClick={() => this.setActiveBuilding(building, index)}
                        key={index}
                       >
                        {building.buildingname}
                      </li>
                    ))}
                </ul>
              </div>
              <div className="col-md-6">
                {currentBuilding ? (
                  <div>
                    <h4>Building</h4>
                    <div>
                      <label>
                        <strong>Name:</strong>
                      </label>{" "}
                      {currentBuilding.buildingname}
                    </div>
                    <div>
                      <label>
                        <strong>Location:</strong>
                      </label>{" "}
                      {currentBuilding.location}
                    </div>
                     <Link
                      to={"/buildings/" + currentBuilding}
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