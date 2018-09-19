import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import BuyerSignin from '../components/BuyerSignin'
import { buyerSignin } from '../actions/auth'
import {bindActionCreators} from 'redux'
import {Text, Button, AsyncStorage, View, Image} from 'react-native';
import {submit, reset} from 'redux-form'
import ErrorMessage from '../components/ErrorMessage'
import Link from '../components/Link'

class BuyerSigninContainer extends Component {
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

  onSignupClick = () => {
    const {navigate} = this.props.navigation
    navigate('BuyerSignupContainer')
  }


  onContinueClick = () => {
    this.props.dispatch(submit('BuyerSignin'))
  }

  handleSubmit = (values) => {
    //Some sort of async validation will happen here too
    this.props.buyerSignin(values, this.props.token)
    .then((response) => {
      console.log(response);
      AsyncStorage.setItem('marketplaceToken', response.payload.data.attributes.token)
    })
    .catch((error)=> {
      console.log(error);
    })
  }

  render() {
    let signuperror = this.props.error.status === 401 ? <ErrorMessage message='That Password/Username combo is incorrect'/> : null
    return(
      <View>
        { signuperror }
        <BuyerSignin onSubmit={ this.handleSubmit } authenticating={this.props.authenticating}  onSignupClick={this.onSignupClick} onContinueClick={this.onContinueClick} />
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
