import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import BuyerSignin from '../components/BuyerSignin'
import { signup, getGeo } from '../actions/auth'
import {bindActionCreators} from 'redux'
import {Text, Button, AsyncStorage, View, Image} from 'react-native';
import {submit, reset} from 'redux-form'
import ErrorMessage from '../components/ErrorMessage'
import Link from '../components/Link'
import IconLink from '../components/IconLink'
import I18n from '../i18n'

class BuyerSigninContainer extends Component {
  //some of this needs to be changed for iOs

  static navigationOptions = ({navigation}) => {
    // const buttonText = navigation.state.params ? navigation.state.params.buttonText : ''
    const buttonText = ''
    return {
    }
  }

  componentDidMount() {
    this.props.getGeo(this.props.token)
    this.props.navigation.setParams({dispatch: this.props.dispatch})
    this.props.navigation.setParams({buttonText:this.continueText()})
  }

  onSignInClick = () => {
    const {navigate} = this.props.navigation
    navigate('SigninContainer')
  }


  onContinueClick = () => {
    this.props.dispatch(submit('BuyerSignin'))
  }
  onDataProcessingInfoClick = () => {
    this.props.navigation.navigate('DataProcessingInfoContainer')
  }

  handleSubmit = (values) => {
    //Some sort of async validation will happen here too
    this.props.signup(values, this.props.token)
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
        <BuyerSignin onSubmit={ this.handleSubmit } geo={this.props.geo} authenticating={this.props.authenticating} toPrint={this.toPrint()} continueText={this.continueText()} onSignInClick={this.onSignInClick} onContinueClick={this.onContinueClick} documentType={this.props.documentType} onDataProcessingInfoClick={this.onDataProcessingInfoClick}/>
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
    buyerSignin: bindActionCreators(buyerSignin, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyerSigninContainer);
