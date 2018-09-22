import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import _ from 'lodash'
// import SearchBar from '../components/SearchBar'
import {ListView, View,ActivityIndicator} from 'react-native';
import {submit, reset} from 'redux-form'

import {bindActionCreators} from 'redux'

import BuyerIndexOffers from '../components/BuyerIndexOffers'
import {
  fetchAllOffers,
  selectOffer,
  refresh,
} from '../actions/offers'
import { showUser } from '../actions/auth'
import ErrorScreen from '../components/ErrorScreen'
import Link from '../components/Link'

import DeviceInfo from 'react-native-device-info';


class BuyerIndexOffersContainer extends Component {

  static navigationOptions = ({navigation}) => ({
      headerTitle: 'All Offers'
    })

    componentDidMount() {
      console.log(this.props.token +"BuyerIndexOffersContainer");
      this.props.fetchAllOffers(this.props.token)
    }


  // pressSubmit = () => {
  //   console.log('pressSubmit');
  //   this.props.submit('SearchBar')
  // }

  // handleSubmit = (values) => {
  //   console.log(values);
  //   this.props.searchBids(values.term, this.props.token)
  // }

  selectOffer = (offer, index) => {
    const {navigate} = this.props.navigation
    console.log(this.props.offer);
    this.props.selectOffer(offer, index) //save bid to redux for future use
    navigate('OfferDetailContainer')
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
      return (<BuyerIndexOffers
        offers={this.props.offers}
        onClick={this.selectOffer}
        fetching = {this.props.fetching}
        />)
      }
  }

}

const mapStateToProps = state => {
  return {
    offers: state.offers.offers,
    error: state.offers.error,
    fetching: state.offers.fetching,
    token: state.auth.token,
    currentUser:state.auth.currentUser,
    userType:state.auth.userType
  }
}


const mapDispatchToProps = {
  fetchAllOffers,
  selectOffer
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyerIndexOffersContainer);
