import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import _ from 'lodash'
// import SearchBar from '../components/SearchBar'
import {ListView, View,ActivityIndicator} from 'react-native';
import {submit, reset} from 'redux-form'

import {bindActionCreators} from 'redux'

import IndexOrders from '../components/IndexOrders'
import {
  fetchOrders,
  selectOrder,
  refresh,
} from '../actions/orders'
import { showUser } from '../actions/auth'
import ErrorScreen from '../components/ErrorScreen'
import Link from '../components/Link'

import DeviceInfo from 'react-native-device-info';


class IndexOrdersContainer extends Component {

  static navigationOptions = ({navigation}) => ({
      headerTitle: 'My Orders'
    })

    componentDidMount() {
      console.log(this.props.token +"IndexOrdersContainer");
      this.props.fetchOrders(this.props.token)
    }


  // pressSubmit = () => {
  //   console.log('pressSubmit');
  //   this.props.submit('SearchBar')
  // }

  // handleSubmit = (values) => {
  //   console.log(values);
  //   this.props.searchOrders(values.term, this.props.token)
  // }

  selectOrder = (order, index) => {
    const {navigate} = this.props.navigation
    console.log(this.props.order);
    this.props.selectOrder(order, index) //save order to redux for future use
    navigate('OrderDetailContainer')
  }

  onErrorClick = () => {
    this.props.navigation.popToTop()
  }

  // onRefresh = () => {
  //   this.props.refresh()
  //   this.props.fetchBuyerOrders(this.props.token)
  // }

  // pageOrders = () => {
  //   console.log("PAGING");
  //   if (this.props.links.next) {
  //     this.props.getBuyerOrders(this.props.links.next, this.props.token)
  //   } else {
  //     console.log('No more orders to fetch');
  //   }
  // }

  // onClear = () => {
  //   this.props.searchOrders('', this.props.token).then(() => this.props.reset('SearchBar'))
  // }

  render() {
    if (this.props.error) {
      console.log(this.props.error)
      return <ErrorScreen onClick={this.onErrorClick}/>
    } else {
      //REFACTORING naming convention mess
      return (<IndexOrders
        orders={this.props.orders}
        onClick={this.selectOrder}
        fetching = {this.props.fetching}
        />)
      }
  }

}

const mapStateToProps = state => {
  return {
    orders: state.orders.orders,
    error: state.orders.error,
    fetching: state.orders.fetching,
    token: state.auth.token,
    currentUser:state.auth.currentUser,
    userType:state.auth.userType
  }
}


const mapDispatchToProps = {
  fetchOrders,
  selectOrder
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexOrdersContainer);
