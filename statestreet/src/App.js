

import React from 'react';
import reducer from './reducers/index';
import { createStore, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import './App.css';
import AppRoutes from './router';
import {Table, PageHeader} from 'react-bootstrap';

let middleware = [ thunk, apiMiddleware]

let store = createStore(reducer, applyMiddleware(...middleware))

export default class App extends React.Component {
  render() {

    return (<Provider store={store}>
      
      <AppRoutes/>
    </Provider>);
  }
}
