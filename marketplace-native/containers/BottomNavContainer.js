import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import {
  AsyncStorage
} from 'react-native';
import { buyer_signout,supplier_signout } from '../actions/auth'
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

      if (this.props.userType=="buyer") {
        this.props.createBid(this.props.token)
        .then(() => {
          this.props.navigation.navigate('BidDetailContainer')
        })
      }
      else {
        this.props.createOffer(this.props.token)
        .then(() => {
          this.props.navigation.navigate('OfferDetailContainer')
        })
      }
  }

  toUserItems = () => {
    if (this.props.userType=="buyer") {
        this.props.navigation.navigate('BuyerIndexBidsContainer')
    }
    else {
      this.props.navigation.navigate('SupplierIndexOffersContainer')
    }
  }

  toAllItems = () => {
    if (this.props.userType=="buyer") {
        this.props.navigation.navigate('BuyerIndexOffersContainer')
    }
    else {
      this.props.navigation.navigate('SupplierIndexBidsContainer')

    }
  }
  toMyOrders = ()=>{
    this.props.navigation.navigate('IndexOrdersContainer')

  }
  onSignoutClick = () => {
  console.log('onSignoutClick');
  AsyncStorage.removeItem('marketplaceToken')
  if (this.props.userType=="buyer") {
    this.props.buyer_signout(this.props.token)

  } else {
    this.props.supplier_signout(this.props.token)
  }
}

  render() {
    return (
       <BottomNav
        creating={this.props.creatingItem}
        newItem={this.newItem}
        toMyOrders = {this.toMyOrders}
        toUserItems={this.toUserItems}
        toAllItems={this.toAllItems}
        signout = {this.onSignoutClick}
        userType = {this.props.userType}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    userType: state.auth.userType,

  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    createBid: bindActionCreators(createBid, dispatch),
    createOffer: bindActionCreators(createOffer, dispatch),
    buyer_signout: bindActionCreators(buyer_signout, dispatch),
    supplier_signout: bindActionCreators(supplier_signout, dispatch)


  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BottomNavContainer);
