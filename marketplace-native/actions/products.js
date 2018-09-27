import { RSAA } from 'redux-api-middleware'

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

export function fetchProducts(item, token) {
  if (item.type=="bid") {
    return {
  		[RSAA]: {
  			endpoint: `${BASE_URL}/bids/${item.id}/products`,
  			method: 'GET',
  			headers: {
  				'Content-type': 'application/json',
  				'Authorization': `Bearer ${token}`

  			},
  			types: [
  				FETCHING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE
  			]
  		}
  	}
  }
  else {
    return {
      [RSAA]: {
        endpoint: `${BASE_URL}/offers/${item.id}/products`,
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${token}`

        },
        types: [
          FETCHING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE
        ]
      }
    }
  }

}



export function selectProduct(product, index) {
	let payload = product
	return (dispatch) => {
		dispatch({
			type: SELECT_PRODUCT,
			payload
		})
	}
}
export function createProduct(item, token) {
if (item.type=="bid") {
  return {
		[RSAA]:{
			endpoint:`${BASE_URL}/bids/${item.id}/products`,
			method:'POST',
			types:[
				FETCHING,CREATE_PRODUCT_SUCCESS,CREATE_PRODUCT_FAILURE
			],
			headers: {
				'Content-type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify({
  			product: {
  				date_issued: Date().toLocaleString()
  			}
  		})
		}
	}
} else {
  return {
    [RSAA]:{
      endpoint:`${BASE_URL}/offers/${item.id}/products`,
      method:'POST',
      types:[
        CREATING_PRODUCT,CREATE_PRODUCT_SUCCESS,CREATE_PRODUCT_FAILURE
      ],
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        product: {
          date_issued: Date().toLocaleString()
        }
      })
    }
  }
}

}
export function updateProduct(id, values, token) {
	return {
		[RSAA]:{
			endpoint:`${BASE_URL}/products/${id}`,
			method:'PATCH',
			types:[
				FETCHING,UPDATE_PRODUCT_SUCCESS,UPDATE_PRODUCT_FAILURE
			],
			headers: {
				'Content-type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
	 	 body: JSON.stringify({
			 product: values
		 })
		}
	}
}
export function deleteProduct(id, token) {

  return {
    [RSAA]: {
      endpoint: `${BASE_URL}/products/${id}`,
      method: 'DELETE',
      types: [
        DELETING_PRODUCT, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE
      ],
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }
  }
}
export function clearProducts(item, token) {
console.log(item);
	// return {
	// 	[RSAA]:{
	// 		endpoint:`${BASE_URL}/products`,
	// 		method:'DELETE',
	// 		types:[
	// 			CLEARING_ALL_PRODUCTS,CLEAR_ALL_PRODUCTS_SUCCESS,CLEAR_ALL_PRODUCTS_FAILURE
	// 		],
	// 		headers: {
	// 			'Content-type': 'application/json',
	// 			'Authorization': `Bearer ${token}`
	// 		}
	// 	}
	// };
}
