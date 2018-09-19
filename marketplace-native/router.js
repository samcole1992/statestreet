import React, {Component} from 'react';

import {StackNavigator} from 'react-navigation';

import createTabNavigator from './tabs';

import BuyerSigninContainer from './containers/BuyerSigninContainer';
import BuyerSignupContainer from './containers/BuyerSignupContainer';
import SupplierSigninContainer from './containers/SupplierSigninContainer';
import SupplierSignupContainer from './containers/SupplierSignupContainer';
import WelcomeContainer from './containers/WelcomeContainer';


export const createRootNavigator = (signedIn, userType) => {
    console.log(signedIn);
    if(signedIn && userType=='buyer'){
      return createTabNavigator(StackNavigator(routes, {initialRouteName: 'MyBidsContainer'}))
    }
    else if (signedIn && userType=='supplier') {
      return createTabNavigator(StackNavigator(routes, {initialRouteName: 'MyOffersContainer'}))

    }
    else {
      return StackNavigator(routes, {initialRouteName: 'WelcomeContainer'})

    }
}

const routes = {

  BuyerSigninContainer: {
    screen: BuyerSigninContainer
  },
  BuyerSignupContainer: {
    screen: BuyerSignupContainer
  },
  SupplierSigninContainer: {
    screen: SupplierSigninContainer
  },
  SupplierSignupContainer: {
    screen: SupplierSignupContainer
  }
}
