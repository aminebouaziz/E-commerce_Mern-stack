import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { deleteFeedback } from "../../actions/feedbackAction";

class FeedbackItem extends Component {
  onDeleteClick(id) {
    this.props.deleteFeedback(id);
  }
  render() {
    const { feedback, auth } = this.props;

    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-2">
            <a href="profile.html">
              <img
                className="rounded-circle d-none d-md-block"
                src={feedback.avatar}
                alt=""
              />
            </a>
            <br />
            <p className="text-center">{feedback.name}</p>
          </div>
          <div className="col-md-10">
            <p className="lead">{feedback.text}</p>

            <span>
              <button type="button" className="btn btn-light mr-1">
                <i className="fas fa-thumbs-up" />
                <span className="badge badge-light">
                  {feedback.likes.length}
                </span>
              </button>
              <button type="button" className="btn btn-light mr-1">
                <i className="text-secondary fas fa-thumbs-down" />
              </button>
              <Link
                to={`/feedback/${feedback._id}`}
                className="btn btn-info mr-1"
              >
                Comments
              </Link>

              {feedback.user === auth.user.id ? (
                <button
                  onClick={this.onDeleteClick.bind(this, feedback._id)}
                  type="button"
                  className="btn btn-danger mr-1"
                >
                  <i className="fas fa-times" />
                </button>
              ) : null}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

FeedbackItem.propTypes = {
  feedback: PropTypes.object.isRequired,
  deleteFeedback: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteFeedback }
)(FeedbackItem);
