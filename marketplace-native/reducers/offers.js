
import {

BASE_URL,

FETCHING,
GET_SUPPLIER_OFFERS_SUCCESS,
GET_SUPPLIER_OFFERS_FAILURE,
GET_ALL_OFFERS_SUCCESS,
GET_ALL_OFFERS_FAILURE,
SELECT_OFFER,
CREATING_OFFER,
CREATE_OFFER_SUCCESS,
CREATE_OFFER_FAILURE


} from '../constants';

const initialState = {
  error: false,
  fetching: false,
  offers: [],
  currentOffer: {}
}

export default function offersReducer(state = initialState, action) {

switch (action.type) {
  case CREATING_OFFER:
    return {
      ...state,
      fetching: true
    }
  case CREATE_OFFER_SUCCESS:
    return {
      ...state,
      currentOffer: action.payload.data,
      fetching: false
    }
  case CREATE_OFFER_FAILURE:
    return {
      ...state,
      error: 'CREATE_OFFER_FAILURE',
      fetching: false
    }
  case FETCHING:
    return {
      ...state,
      fetching: true
    }
  case GET_SUPPLIER_OFFERS_SUCCESS:
    return {
      ...state,
      error: false,
      fetching: false,

      offers: action.payload.data
    }
  case GET_ALL_OFFERS_SUCCESS:
    return {
      ...state,
      error: false,
      fetching: false,

      offers: action.payload.data
    }
  case GET_SUPPLIER_OFFERS_FAILURE:
    return {
      ...state,
      error: 'GET_SUPPLIER_OFFERS_FAILURE',
      fetching: false
    }
  case GET_ALL_OFFERS_FAILURE:
    return {
      ...state,
      error: 'GET_ALL_OFFERS_FAILURE',
      fetching: false,

      offers: action.payload.data
    }
  case SELECT_OFFER:
    return {
      ...state,
      currentOffer: action.payload,
    }
  default:

      return state
}
}
