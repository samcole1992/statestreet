import {

BASE_URL,
FETCHING,
FETCH_PRODUCTS_SUCCESS,
FETCH_PRODUCTS_FAILURE,
CLEARING_ALL_PRODUCTS,
CLEAR_ALL_PRODUCTS_SUCCESS,
CLEAR_ALL_PRODUCTS_FAILURE,
SELECT_PRODUCT,
CREATING_PRODUCT,
CREATE_PRODUCT_SUCCESS,
CREATE_PRODUCT_FAILURE,
UPDATING_PRODUCT,
UPDATE_PRODUCT_SUCCESS,
UPDATE_PRODUCT_FAILURE,
DELETING_PRODUCT,
DELETE_PRODUCT_SUCCESS,
DELETE_PRODUCT_FAILURE

} from '../constants';

const initialState = {
  error: false,
  fetching: false,
  products: [],
  currentProduct: {},
  parent: {}
}

export default function productsReducer(state = initialState, action) {

switch (action.type) {
  case FETCHING:
    return {
      ...state,
      fetching: true
    }
  case FETCH_PRODUCTS_SUCCESS:
    return {
      ...state,
      error: false,
      fetching: false,
      products: action.payload.data
    }
  case FETCH_PRODUCTS_FAILURE:
    return {
      ...state,
      fetching: false,
      error: 'FETCH_PRODUCTS_FAILURE'
    }
  case CLEAR_ALL_PRODUCTS_SUCCESS:
    return {
      ...state,
      fetching: false,
      bids: []
    }
  case CLEAR_ALL_PRODUCTS_FAILURE:
    return {
      ...state,
      fetching: false,
      error: 'CLEAR_ALL_PRODUCTS_FAILURE'
    }
  case SELECT_PRODUCT:
    return {
      ...state,
      currentProduct: action.payload
    }
  case CREATE_PRODUCT_SUCCESS:
  console.log(action);
    return {
      ...state,
      fetching: false,
      currentProduct: action.payload.data
    }
  case CREATE_PRODUCT_FAILURE:
  console.log(action);
    return {
      ...state,
      fetching: false,
      error: 'CREATE_PRODUCT_FAILURE'

    }
  case UPDATE_PRODUCT_SUCCESS:
  console.log(action);
    return {
      ...state,
      fetching: false,
      products: state.products.push(action.payload.data)
    }
  case UPDATE_PRODUCT_FAILURE:
  console.log(action);
    return {
      ...state,
      fetching: false,
      error:'UPDATE_PRODUCT_FAILURE'
    }
  case DELETING_PRODUCT:
    return {
      ...state,
      fetching: true
    }
  case DELETE_PRODUCT_SUCCESS:
    return {
      ...state,
      fetching: false
    }
  case DELETE_PRODUCT_FAILURE:
    return {
      ...state,
      fetching: false,
      errors:'DELETE_PRODUCT_FAILURE'
    }
  default:

      return state
}
}
