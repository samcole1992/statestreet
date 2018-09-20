import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import Welcome from '../components/Welcome'
import {
  Text, Linking
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

class WelcomeContainer extends Component {

    onBuyerClick = () => {
      this.props.navigation.navigate('BuyerSignupContainer')
    }
    onSupplierClick = () => {
      this.props.navigation.navigate('SupplierSignupContainer')
    }


  render() {
    console.log('renderrender');


    return <Welcome
            onBuyerClick = {this.onBuyerClick}
            onSupplierClick={this.onSupplierClick}

           />
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token
  }
}


// ########### Will need this once auth is determined
export default connect(mapStateToProps)(WelcomeContainer);
