import { combineReducers, createStore } from "redux"
import auth from "./auth"
import bids from "./bids"
import offers from "./offers"
import { reducer as formReducer } from 'redux-form'


export default combineReducers({
  auth,
  form: formReducer,
  bids,
  offers

});
