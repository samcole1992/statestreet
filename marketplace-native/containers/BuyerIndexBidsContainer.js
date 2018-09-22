import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import _ from 'lodash'
// import SearchBar from '../components/SearchBar'
import {ListView, View,ActivityIndicator} from 'react-native';
import {submit, reset} from 'redux-form'

import {bindActionCreators} from 'redux'

import BuyerIndexBids from '../components/BuyerIndexBids'
import {
  fetchBuyerBids,
  selectBid,
  getBids,
  refresh,
  createBid
} from '../actions/bids'
import { showUser } from '../actions/auth'
import ErrorScreen from '../components/ErrorScreen'
import Link from '../components/Link'

import DeviceInfo from 'react-native-device-info';


class BuyerIndexBidsContainer extends Component {

  static navigationOptions = ({navigation}) => ({
      headerTitle: 'My Bids'
    })

    componentDidMount() {
      console.log(this.props.token +"BuyerIndexBidsContainer");
      this.props.fetchBuyerBids(this.props.token)
    }

    newBid = () => {
      this.props.createBid(this.props.token).then(this.props.navigation.navigate('BidDetailContainer'))
    }


  // pressSubmit = () => {
  //   console.log('pressSubmit');
  //   this.props.submit('SearchBar')
  // }

  // handleSubmit = (values) => {
  //   console.log(values);
  //   this.props.searchBids(values.term, this.props.token)
  // }

  selectBid = (bid, index) => {
    const {navigate} = this.props.navigation
    console.log(this.props.bids);
    this.props.selectBid(bid, index) //save bid to redux for future use
    navigate('BidDetailContainer')
  }

  onErrorClick = () => {
    this.props.navigation.popToTop()
  }

  // onRefresh = () => {
  //   this.props.refresh()
  //   this.props.fetchBuyerBids(this.props.token)
  // }

  // pageBids = () => {
  //   console.log("PAGING");
  //   if (this.props.links.next) {
  //     this.props.getBuyerBids(this.props.links.next, this.props.token)
  //   } else {
  //     console.log('No more bids to fetch');
  //   }
  // }

  // onClear = () => {
  //   this.props.searchBids('', this.props.token).then(() => this.props.reset('SearchBar'))
  // }

  render() {
    if (this.props.error) {
      console.log(this.props.error)
      return <ErrorScreen onClick={this.onErrorClick}/>
    } else {
      //REFACTORING naming convention mess
      return (<BuyerIndexBids
        bids={this.props.bids}
        onClick={this.selectBid}
        fetching = {this.props.fetching}
        newBid={this.newBid}
        />)
      }
  }

}

const mapStateToProps = state => {
  return {
    bids: state.bids.bids,
    error: state.bids.error,
    fetching: state.bids.fetching,
    token: state.auth.token,
    currentUser:state.auth.currentUser,
    userType:state.auth.userType
  }
}


const mapDispatchToProps = {
  fetchBuyerBids,
  selectBid,
  refresh,
  createBid,
  submit,
  reset,
  showUser
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyerIndexBidsContainer);
