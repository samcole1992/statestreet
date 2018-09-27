import {

BASE_URL,
FETCHING,
FETCH_ORDERS_SUCCESS,
FETCH_ORDERS_FAILURE,
CLEARING_ALL_ORDERS,
CLEAR_ALL_ORDERS_SUCCESS,
CLEAR_ALL_ORDERS_FAILURE,
SELECT_ORDER,
CREATING_ORDER,
CREATE_ORDER_SUCCESS,
CREATE_ORDER_FAILURE,
UPDATING_ORDER,
UPDATE_ORDER_SUCCESS,
UPDATE_ORDER_FAILURE,
DELETING_ORDER,
DELETE_ORDER_SUCCESS,
DELETE_ORDER_FAILURE

} from '../constants';

const initialState = {
  error: false,
  fetching: false,
  orders: [],
  currentOrder: {}
}

export default function ordersReducer(state = initialState, action) {

switch (action.type) {
  case FETCHING:
    return {
      ...state,
      fetching: true
    }
  case FETCH_ORDERS_SUCCESS:
    return {
      ...state,
      error: false,
      fetching: false,
      orders: action.payload.data
    }
  case FETCH_ORDERS_FAILURE:
    return {
      ...state,
      fetching: false,
      error: 'FETCH_ORDERS_FAILURE'
    }
  case CLEAR_ALL_ORDERS_SUCCESS:
    return {
      ...state,
      fetching: false,
      bids: []

    }
  case CLEAR_ALL_ORDERS_FAILURE:
    return {
      ...state,
      fetching: false,
      error: 'CLEAR_ALL_ORDERS_FAILURE'
    }
  case SELECT_ORDER:
    return {
      ...state,
      currentOrder: action.payload,
    }
  case CREATING_ORDER:
    return {
      ...state,
      fetching: true
    }
  case CREATE_ORDER_SUCCESS:
    return {
      ...state,
      fetching: false,
      currentOrder: action.payload.data

    }
  case CREATE_ORDER_FAILURE:
    return {
      ...state,
      fetching: false,
      error: 'CREATE_ORDER_FAILURE'

    }
  case UPDATE_ORDER_SUCCESS:
    return {
      ...state,
      fetching: false

    }
  case UPDATE_ORDER_FAILURE:
    return {
      ...state,
      fetching: false,
      error:'UPDATE_ORDER_FAILURE'
    }
  case DELETING_ORDER:
    return {
      ...state,
      fetching: true
    }
  case DELETE_ORDER_SUCCESS:
    return {
      ...state,
      fetching: false
    }
  case DELETE_ORDER_FAILURE:
    return {
      ...state,
      fetching: false,
      errors:'DELETE_ORDER_FAILURE'
    }
  default:

      return state
}
}
