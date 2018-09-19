import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import reducer from './reducers/index';
import { createStore, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import HomeContainer from './containers/HomeContainer';
let middleware = [ thunk, apiMiddleware]

let store = createStore(reducer, applyMiddleware(...middleware))
export default class App extends React.Component {
  render() {

    return (<Provider store={store}>
      <HomeContainer/>
    </Provider>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
