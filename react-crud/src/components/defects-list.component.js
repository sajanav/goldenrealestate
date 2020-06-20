import React, { Component } from "react";
import DefectDataService from "../services/defect.service";
import NoRecordPage from "../components/norecord-componet";
import { Link } from "react-router-dom";
import {
  MDBView,
  MDBContainer
} from 'mdbreact';
export default class DefectList extends Component {
    constructor(props) {
      super(props);
      this.retrieveDefects = this.retrieveDefects.bind(this);
      this.refreshList = this.refreshList.bind(this);
  
      this.state = {
        defects: [],
        currentDefect: null,
        currentIndex: -1,
        searchName: ""
      };
     }
     componentDidMount() {
        this.retrieveDefects();
      }
    
     

      retrieveDefects() {
        DefectDataService.getAll()
          .then(response => {
            this.setState({
                defects: response.data
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }
    
      refreshList() {
        this.retrieveDefects();
        this.setState({
          currentDefect: null,
          currentIndex: -1
        });
      }
      setActiveDefect(defect, index) {
        this.setState({
          currentDefect: defect,
          currentIndex: index
        });
      }
      render() {
        const { defects, currentDefect, currentIndex } = this.state;
        if (defects.length === 0) {
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
                        onClick={() => this.setActiveDefect(defect, index)}
                        key={index}
                       >
                        {defect.defectname}
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
                      {currentDefect.defectname}
                    </div>
                    <div>
                      <label>
                        <strong>Description:</strong>
                      </label>{" "}
                      {currentDefect.defectdesc}
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