import React, { Component } from "react";
import ProgressBarDataService from "../services/progressbar.service";
import NoRecordPage from "../components/norecord-componet";
import CopyRightPage from "../components/copyright.component";

import {

  MDBView,
  MDBContainer
} from 'mdbreact';
export default class ProgressBarList extends Component {
  constructor(props) {
    super(props);
    this.retrieveProgressBar = this.retrieveProgressBar.bind(this);
    this.refreshList = this.refreshList.bind(this);

    this.state = {
      progressBarDetails: [
        { }
      ],
      progressBarDetailsHeader:  [
        {
            "employee Name": "",
            "defect Name": "",
            "building Name": "",
            "status": ""
        }
      ],
      currentProgressBar: null,
      currentIndex: -1,
      searchName: "",

    };

  }

  renderTableData() {
      return this.state.progressBarDetails.progressBarDetails?.map((student, index) => {
      const {id, employeeName, defectName, buildingName, status } = student //destructuring
      return (
        <tr key={id}>
          
          <td>{employeeName}</td>
          <td>{defectName}</td>
          <td>{buildingName}</td>
          <td>{status}</td>
        </tr>
      )
    })
  }

  renderTableHeader() {
    let header = Object.keys(this.state.progressBarDetailsHeader[0])
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }
  componentDidMount() {
    ProgressBarDataService.getAll()
      .then(response => {

        this.setState({
        progressBarDetails: response.data
        });
          
        this.setState(this.state); 
       })
      .catch(e => {
        console.log(e);
      });

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
        progressBarDetails:response.data
        });
       
     
      
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
  
    if (this.state.progressBarDetails.length ===0) {
      return <NoRecordPage />
    } else {
      return (


        <div>
           <MDBView>
              <MDBContainer
            style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
            className='d-flex justify-content-center black-text align-items-center'/>
            </MDBView>
          {this.state.progressBarDetails.length >1 ? (
            <div>
          <h3 id='title' align='center'>Progress DashBoard</h3>
          <table id='progressbar'>
            <thead>
              <tr>{this.renderTableHeader()}</tr>
              </thead>
              <tbody>
              {this.renderTableData(this.state.progressBarDetails)}
            </tbody>
          </table>
          </div>): (
                  <div>
                    <NoRecordPage />
                  </div>
                )
            }
        <CopyRightPage/>
        </div>
      );
    }
  }
}