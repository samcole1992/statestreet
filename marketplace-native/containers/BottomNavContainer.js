import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'

import { createBid } from '../actions/bids'
import { createOffer } from '../actions/offers'

import BottomNav from '../components/BottomNav'
import { NavigationActions } from 'react-navigation'

class BottomNavContainer extends Component {

  componentDidMount() {
    console.log(this.props.navigation);
  }

  newItem = () => {
    console.log('newItem');

      let billTo = ''
      if (this.props.currentCustomer) {
        billTo = this.props.currentCustomer.attributes.name_1
      }
      console.log(billTo);
      console.log(this.props.currentCustomer);
     this.props.createBid(this.props.token)
     .then(() => {
       this.props.navigation.navigate('ItemDetailContainer')
     })

  }

  toDocuments = () => {
    this.props.clearCustomer()
    this.props.navigation.navigate('ItemMenuContainer')
  }

  toCustomers = () => {
    this.props.navigation.navigate('CustomerMenuContainer')
  }

  render() {
    return (
       <BottomNav
        creating={this.props.creatingItem}
        newItem={this.newItem}
        toDocuments={this.toDocuments}
        toCustomers={this.toCustomers}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    createBid: bindActionCreators(createBid, dispatch),
    createOffer: bindActionCreators(createOffer, dispatch),

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BottomNavContainer);
