import { combineReducers } from "redux"
import photos from "./photos"
import { reducer as formReducer } from 'redux-form'


export default combineReducers({
  form: formReducer,
  photos

});
