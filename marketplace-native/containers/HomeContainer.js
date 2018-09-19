import React, {Component} from 'react'
import {connect} from 'react-redux'
import { AsyncStorage, PermissionsAndroid, View, Image } from 'react-native';
import { createRootNavigator } from '../router'
import { fetchGuest, getToken, getGuestToken } from '../actions/auth'
import  Loading from '../components/Loading'

class HomeContainer extends Component {


  componentDidMount() {
    AsyncStorage.getItem('marketplaceToken')
    .then((response) => {
      this.handleAuth(response)
    })
  }

  componentWillReceiveProps(nextProps){
    //if user signed out and tokenRetrieved is set to false, by the auth reducer
    //we recall handle auth as a guest
    if( !nextProps.tokenRetrieved ) {
      this.handleAuth(null)
    }
  }

  handleAuth = (response) => {
    console.log('handle auth is called');
    if( !response ) {
      this.props.fetchGuest()
      .then((response) => {
        AsyncStorage.setItem('marketplaceGuestToken', response.payload.token)
        .then(() => {
          this.props.getGuestToken()
        })
      })
      .catch((error) => {
        console.log(error);
      })
    } else {
      //if the user is authorized, get the token from async storage
      this.props.getToken()
    }
  }


  render() {
      if(this.props.tokenRetrieved) {
        const Layout =
        createRootNavigator(this.props.isAuthenticated, this.props.userType)
        return <Layout/>
      } else {

        return(
          <View style={{flexDirection: 'column',justifyContent: 'center',alignItems: 'center',height: '100%'}}>

          </View>
        )

      }
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token,
    tokenRetrieved: state.auth.tokenRetrieved,
    userType: state.auth.userType
  }
}

const mapDispatchToProps = {
  fetchGuest,
  getToken,
  getGuestToken
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer);
