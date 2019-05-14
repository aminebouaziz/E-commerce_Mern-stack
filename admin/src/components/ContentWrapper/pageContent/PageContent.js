import React, { Component } from "react";
import {connect} from 'react-redux';
import PropTypes from "prop-types";


import Heading from "./Heading";
import CardUser from "./CardUser";
import CardSell from "./CardSell";
import CardFeed from "./CardFeed";
import DataTable from "./DataTable";
import {getProfiles} from '../../../actions/profileAction'
import {getOrders} from '../../../actions/orderActions'
import {getFeedbacks} from '../../../actions/feedbackAction'

import Spinner from "../../common/Spinner";

class PageContent extends Component {
  componentDidMount() {
    this.props.getProfiles();
    this.props.getOrders();
    this.props.getFeedbacks();
  }
  render() {
    const { profile,order,feedback} = this.props;
    console.log(feedback.feedbacks.length)
    let cardContent;
    if(profile.profile== null){
      cardContent = <Spinner/>
    }else{
      cardContent = (
        <div className="row">
        <CardUser profile={profile.profile} /> 
         <CardSell numOrder={order.order.length} />
        <CardFeed numFeed={feedback.feedbacks.length} />
        </div>
      )
    }
    console.log("profile",profile.profile)

    return (
      <div class="container-fluid">
        <Heading />
        {cardContent}
        <div className="row">
        
         
          <DataTable />
        </div>
      </div>
    );
  }
}
PageContent.propTypes={
  profile: PropTypes.object.isRequired,
  getProfiles : PropTypes.func.isRequired,
  getFeedbacks : PropTypes.func.isRequired
}

const mapStateToProps = state =>({
  profile: state.profile,
  order: state.order,
  feedback : state.feedbacks
})
export default connect(mapStateToProps,{getProfiles,getOrders,getFeedbacks})(PageContent);
