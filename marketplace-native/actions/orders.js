import { RSAA } from 'redux-api-middleware'

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

export function fetchOrders(item, token) {
    return {
      [RSAA]: {
        endpoint: `${BASE_URL}/orders`,
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${token}`

        },
        types: [
          FETCHING, FETCH_ORDERS_SUCCESS, FETCH_ORDERS_FAILURE
        ]
      }
  }
}



export function selectOrder(order, index) {
	let payload = order
	return (dispatch) => {
		dispatch({
			type: SELECT_ORDER,
			payload
		})
	}
}
export function createOrder(item, token) {
  return {
		[RSAA]:{
			endpoint:`${BASE_URL}/orders`,
			method:'POST',
			types:[
				CREATING_ORDER,CREATE_ORDER_SUCCESS,CREATE_ORDER_FAILURE
			],
			headers: {
				'Content-type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify({
  			order: {
  				date_issued: Date().toLocaleString()
  			}
  		})

	}
}

}
export function updateOrder(id, values, token) {
	return {
		[RSAA]:{
			endpoint:`${BASE_URL}/orders/${id}`,
			method:'PATCH',
			types:[
				UPDATING_ORDER,UPDATE_ORDER_SUCCESS,UPDATE_ORDER_FAILURE
			],
			headers: {
				'Content-type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
	 	 body: JSON.stringify({
			 order: values
		 })
		}
	}
}
export function deleteOrder(id, token) {

  return {
    [RSAA]: {
      endpoint: `${BASE_URL}/orders/${id}`,
      method: 'DELETE',
      types: [
        DELETING_ORDER, DELETE_ORDER_SUCCESS, DELETE_ORDER_FAILURE
      ],
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }
  }
}
