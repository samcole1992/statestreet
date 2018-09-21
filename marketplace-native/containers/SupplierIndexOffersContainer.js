import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import _ from 'lodash'
// import SearchBar from '../components/SearchBar'
import {ListView, View,ActivityIndicator} from 'react-native';
import {submit, reset} from 'redux-form'

import {bindActionCreators} from 'redux'

import SupplierIndexOffers from '../components/SupplierIndexOffers'
import {
  fetchSupplierOffers,
  selectOffer,
  getOffers,
  refresh,
  createOffer,
  searchOffers
} from '../actions/offers'
import { showUser } from '../actions/auth'
import ErrorScreen from '../components/ErrorScreen'
import Link from '../components/Link'

import DeviceInfo from 'react-native-device-info';


class SupplierIndexOffersContainer extends Component {

  static navigationOptions = ({navigation}) => ({
  })

    componentDidMount() {

      this.props.fetchSupplierOffers(this.props.token)
    }

    newOffer = () => {
      this.props.createOffer(this.props.token).then(this.props.navigation.navigate('OfferDetailContainer'))
    }


  // pressSubmit = () => {
  //   console.log('pressSubmit');
  //   this.props.submit('SearchBar')
  // }

  // handleSubmit = (values) => {
  //   console.log(values);
  //   this.props.searchOffers(values.term, this.props.token)
  // }

  selectOffer = (offers, index) => {
    const {navigate} = this.props.navigation
    console.log(this.props.offers);
    this.props.selectOffer(offer, index) //save offer to redux for future use
    navigate('OfferDetailContainer')
  }

  onErrorClick = () => {
    this.props.navigation.popToTop()
  }

  onRefresh = () => {
    this.props.refresh()
    this.props.fetchSupplierOffers(this.props.token)
  }

  // pageOffers = () => {
  //   console.log("PAGING");
  //   if (this.props.links.next) {
  //     this.props.getSupplierOffers(this.props.links.next, this.props.token)
  //   } else {
  //     console.log('No more offers to fetch');
  //   }
  // }

  // onClear = () => {
  //   this.props.searchOffers('', this.props.token).then(() => this.props.reset('SearchBar'))
  // }

  render() {
    if (this.props.error) {
      console.log(this.props.error)
      return <ErrorScreen onClick={this.onErrorClick}/>
    } else {
      //REFACTORING naming convention mess
      return (<SupplierIndexOffers
        fetching = {this.props.fetching}

        offers={this.props.offers}
        onClick={this.selectOffer}
        newOffer={this.newOffer}/>

      )
      }
  }

}

const mapStateToProps = state => {
  return {
    offers: state.offers.offers,
    error: state.offers.error,
    fetching: state.offers.fetching,
    userType:state.auth.userType,
    token: state.auth.token,
    currentUser:state.auth.currentUser
  }
}


const mapDispatchToProps = {
  fetchSupplierOffers,
  selectOffer,
  refresh,
  createOffer,
  submit,
  reset,
  showUser
}

export default connect(mapStateToProps, mapDispatchToProps)(SupplierIndexOffersContainer);
