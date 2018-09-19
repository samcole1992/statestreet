import { combineReducers, createStore } from "redux"
import auth from "./auth"

import { reducer as formReducer } from 'redux-form'

// The resulting reducer calls every child reducer, and gathers their results into a single state object. The state produced by combineReducers() namespaces the states of each reducer under their keys as passed to combineReducers()
// https://github.com/reactjs/redux/blob/master/docs/api/combineReducers.md

export default combineReducers({
  auth
});
