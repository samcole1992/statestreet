import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import BuyerSignup from '../components/BuyerSignup'
import { buyerSignup } from '../actions/auth'
import {bindActionCreators} from 'redux'
import {Text, Button, AsyncStorage, View, Image} from 'react-native';
import {submit, reset} from 'redux-form'
import ErrorMessage from '../components/ErrorMessage'
import Link from '../components/Link'


class BuyerSignupContainer extends Component {
  //some of this needs to be changed for iOs

  static navigationOptions = ({navigation}) => ({
      headerTitle: 'Sign Up as Buyer'
    })

  componentDidMount() {
    this.props.navigation.setParams({dispatch: this.props.dispatch})
  }

  onSignInClick = () => {
    const {navigate} = this.props.navigation
    navigate('BuyerSigninContainer')
  }


  onContinueClick = () => {
    this.props.dispatch(submit('BuyerSignup'))
  }

  handleSubmit = (values) => {
    //Some sort of async validation will happen here too
    console.log(values);
    this.props.buyerSignup(values, this.props.token)
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
        <BuyerSignup onSubmit={ this.handleSubmit } authenticating={this.props.authenticating} onSignInClick={this.onSignInClick} onContinueClick={this.onContinueClick}/>
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
    buyerSignup: bindActionCreators(buyerSignup, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyerSignupContainer);
