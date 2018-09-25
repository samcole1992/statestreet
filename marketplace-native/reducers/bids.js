
import {

BASE_URL,

FETCHING,
GET_BUYER_BIDS_SUCCESS,
GET_BUYER_BIDS_FAILURE,
GET_ALL_BIDS_SUCCESS,
GET_ALL_BIDS_FAILURE,
SELECT_BID,
CREATING_BID,
CREATE_BID_SUCCESS,
CREATE_BID_FAILURE,
CLAIM_BID,
FETCH_BID_SUCCESS,
FETCH_BID_FAILURE

} from '../constants';

const initialState = {
  error: false,
  fetching: false,
  bids: [],
  currentBid: {}
}

export default function bidsReducer(state = initialState, action) {

switch (action.type) {
  case CREATING_BID:
    return {
      ...state,
      fetching: true
    }
  case CREATE_BID_SUCCESS:
    return {
      ...state,
      currentBid: action.payload.data,
      fetching: false
    }
  case CREATE_BID_FAILURE:
    return {
      ...state,
      error: 'CREATE_BID_FAILURE',
      fetching: false
    }
  case FETCHING:
    return {
      ...state,
      fetching: true
    }
  case GET_BUYER_BIDS_SUCCESS:
    return {
      ...state,
      error: false,
      fetching: false,
      bids: action.payload.data
    }
  case GET_ALL_BIDS_SUCCESS:
    return {
      ...state,
      error: false,
      fetching: false,
      bids: action.payload.data
    }
  case GET_BUYER_BIDS_FAILURE:
    return {
      ...state,
      error: 'GET_BUYER_BIDS_FAILURE',
      fetching: false
    }
  case GET_ALL_BIDS_FAILURE:
    return {
      ...state,
      error: 'GET_ALL_BIDS_FAILURE',
      fetching: false,
      bids: action.payload.data
    }
  case SELECT_BID:
    return {
      ...state,
      currentBid: action.payload,
    }
  case FETCH_BID_SUCCESS:
    return {
      ...state,
      fetching: false,
      currentBid: action.payload.data,
    }
  case FETCH_BID_FAILURE:
    return {
      ...state,
      error: 'FETCH_BID_FAILURE',
      fetching: false
    }
  default:

      return state
}
}
