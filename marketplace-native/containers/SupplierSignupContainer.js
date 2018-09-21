import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SupplierSignup from '../components/SupplierSignup'
import { supplierSignup } from '../actions/auth'
import {bindActionCreators} from 'redux'
import {Text, Button, AsyncStorage, View, Image} from 'react-native';
import {submit, reset} from 'redux-form'
import ErrorMessage from '../components/ErrorMessage'
import Link from '../components/Link'


class SupplierSignupContainer extends Component {
  //some of this needs to be changed for iOs

  static navigationOptions = ({navigation}) => {
    // const buttonText = navigation.state.params ? navigation.state.params.buttonText : ''
    const buttonText = ''
    return {
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({dispatch: this.props.dispatch})
  }

  onSignInClick = () => {
    const {navigate} = this.props.navigation
    navigate('SupplierSigninContainer')
  }


  onContinueClick = () => {
    this.props.dispatch(submit('SupplierSignup'))
  }

  handleSubmit = (values) => {
    //Some sort of async validation will happen here too
    this.props.supplierSignup(values, this.props.token)
    .then((response) => {
      console.log(response);
      AsyncStorage.setItem('marketplaceToken', response.payload.data.attributes.token)
    })
    .catch((error)=> {
      console.log(error);
    })
  }

  render() {
    let signuperror = this.props.error.status === 409 ? <ErrorMessage message='That email has already been taken'/> : null
    return(
      <View>
        { signuperror }
        <SupplierSignup onSubmit={ this.handleSubmit } authenticating={this.props.authenticating}  onSignInClick={this.onSignInClick} onContinueClick={this.onContinueClick}/>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    authenticating: state.auth.authenticating,
    isAuthenticated: state.auth.isAuthenticated,
    currentUser: state.auth.currentUser,
    token: state.auth.token,
    error: state.auth.error

  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    supplierSignup: bindActionCreators(supplierSignup, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SupplierSignupContainer);
