import React, { Component } from "react";

class DataTable extends Component {
  render() {
    return (
      <div className="card shadow mb-4 col-md-10">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Tout les commandes
          </h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>Nom prenom</th>
                  <th>Produit commandes</th>
                  <th>prix </th>
                  <th>quantité</th>
                  <th>adresse</th>
                  <th>commandes</th>
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
                  <td>25.00</td>
                  <td>61</td>
                  <td>Sousse</td>
                  <td>
                    <a href="#" className="btn btn-danger btn-icon-split">
                      <span className="icon text-white-50">
                        <i className="fas fa-trash" />
                      </span>
                      <span className="text">Supprimer commende</span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Tiger Nixon</td>
                  <td>System Architect</td>
                  <td>25.00</td>
                  <td>61</td>
                  <td>Sousse</td>
                  <td>
                    <a href="#" className="btn btn-danger btn-icon-split">
                      <span className="icon text-white-50">
                        <i className="fas fa-trash" />
                      </span>
                      <span className="text">Supprimer commende</span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Tiger Nixon</td>
                  <td>System Architect</td>
                  <td>25.00</td>
                  <td>61</td>
                  <td>Sousse</td>
                  <td>
                    <a href="#" className="btn btn-danger btn-icon-split">
                      <span className="icon text-white-50">
                        <i className="fas fa-trash" />
                      </span>
                      <span className="text">Supprimer commende</span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Tiger Nixon</td>
                  <td>System Architect</td>
                  <td>25.00</td>
                  <td>61</td>
                  <td>Sousse</td>
                  <td>
                    <a href="#" className="btn btn-danger btn-icon-split">
                      <span className="icon text-white-50">
                        <i className="fas fa-trash" />
                      </span>
                      <span className="text">Supprimer commande</span>
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
