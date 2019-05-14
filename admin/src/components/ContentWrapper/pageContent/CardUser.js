import React, { Component } from "react";
import PropTypes from "prop-types";


class CardUser extends Component {
  render() {
    const {profile} = this.props
    
    return (
      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-success shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                  Nombres d'utilisateurs
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">{profile.length}</div>
              </div>
              <div className="col-auto">
                <i className="fas fa-dollar-sign fa-2x text-gray-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
CardUser.propTypes={
  profile : PropTypes.array.isRequired
}
export default CardUser;
