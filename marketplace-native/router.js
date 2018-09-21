import React, {Component} from 'react';

import {StackNavigator} from 'react-navigation';

import createTabNavigator from './tabs';

import BuyerSigninContainer from './containers/BuyerSigninContainer';
import BuyerSignupContainer from './containers/BuyerSignupContainer';
import SupplierSigninContainer from './containers/SupplierSigninContainer';
import SupplierSignupContainer from './containers/SupplierSignupContainer';
import BuyerIndexBidsContainer from './containers/BuyerIndexBidsContainer';
import SupplierIndexOffersContainer from './containers/SupplierIndexOffersContainer';
import WelcomeContainer from './containers/WelcomeContainer';


export const createRootNavigator = (signedIn, userType) => {
    console.log(signedIn);
    if(signedIn && userType=='buyer'){
      return createTabNavigator(StackNavigator(routes, {initialRouteName: 'BuyerIndexBidsContainer'}))
    }
    else if (signedIn && userType=='supplier') {
      return createTabNavigator(StackNavigator(routes, {initialRouteName: 'SupplierIndexOffersContainer'}))

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
  BuyerIndexBidsContainer: {
    screen: BuyerIndexBidsContainer
  },
  SupplierIndexOffersContainer: {
    screen: SupplierIndexOffersContainer
  },
  WelcomeContainer: {
    screen: WelcomeContainer
  },
  SupplierSigninContainer: {
    screen: SupplierSigninContainer
  },
  SupplierSignupContainer: {
    screen: SupplierSignupContainer
  }
}
