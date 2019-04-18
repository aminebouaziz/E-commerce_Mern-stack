import React, { Component } from "react";

class DataTable extends Component {
  render() {
    return (
      <div className="card shadow mb-4 col-md-10">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            DataTables Example
          </h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                  <td>Tiger Nixon</td>
                  <td>System Architect</td>
                  <td>Edinburgh</td>
                  <td>61</td>
                  <td>2011/04/25</td>
                  <td>
                    <a href="#" className="btn btn-danger btn-icon-split">
                      <span className="icon text-white-50">
                        <i className="fas fa-trash" />
                      </span>
                      <span className="text">Split Button Danger</span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Tiger Nixon</td>
                  <td>System Architect</td>
                  <td>Edinburgh</td>
                  <td>61</td>
                  <td>2011/04/25</td>
                  <td>
                    <a href="#" className="btn btn-danger btn-icon-split">
                      <span className="icon text-white-50">
                        <i className="fas fa-trash" />
                      </span>
                      <span className="text">Split Button Danger</span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Tiger Nixon</td>
                  <td>System Architect</td>
                  <td>Edinburgh</td>
                  <td>61</td>
                  <td>2011/04/25</td>
                  <td>
                    <a href="#" className="btn btn-danger btn-icon-split">
                      <span className="icon text-white-50">
                        <i className="fas fa-trash" />
                      </span>
                      <span className="text">Split Button Danger</span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Tiger Nixon</td>
                  <td>System Architect</td>
                  <td>Edinburgh</td>
                  <td>61</td>
                  <td>2011/04/25</td>
                  <td>
                    <a href="#" className="btn btn-danger btn-icon-split">
                      <span className="icon text-white-50">
                        <i className="fas fa-trash" />
                      </span>
                      <span className="text">Split Button Danger</span>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default DataTable;
