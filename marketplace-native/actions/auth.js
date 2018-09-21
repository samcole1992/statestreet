import { AsyncStorage } from 'react-native';
import { RSAA } from 'redux-api-middleware'

import {

BASE_URL,

UPDATING_USER,
UPDATE_USER_SUCCESS,
UPDATE_USER_FAILURE,


AUTHENTICATING,

SIGNIN_SUCCESS,
SIGNIN_FAILURE,

SIGNUP_SUCCESS,
SIGNUP_FAILURE,

GUEST_SUCCESS,
GUEST_FAILURE,

RESET_ERROR,
GET_TOKEN_SUCCESS,
GET_TOKEN_FAILURE,

GET_GUEST_TOKEN_SUCCESS,
GET_GUEST_TOKEN_FAILURE,

SIGNOUT_SUCCESS,
SIGNOUT_FAILURE,

SHOWING_USER,
SHOW_USER_SUCCESS,
SHOW_USER_FAILURE

} from '../constants';

export function showUser(token) {

	return {
		[RSAA]: {
			endpoint: `${BASE_URL}/user`,
			method: 'GET',
			headers: {
				'Content-type': 'application/json',
				'Authorization': `Bearer ${token}`

			},
			types: [
				SHOWING_USER, SHOW_USER_SUCCESS, SHOW_USER_FAILURE
			]
		}
	}
}

export function updateUser(body, token) {


	return {
		[RSAA]:{
			endpoint:`${BASE_URL}/user`,
			method:'PATCH',
			types:[
				UPDATING_USER,UPDATE_USER_SUCCESS,UPDATE_USER_FAILURE
			],
			headers: {
				'Content-type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
	 	 body: JSON.stringify({
			 user: body
		 })
		}
	}
}
export function resetError() {
  return {
      type: RESET_ERROR
    }
}




export function getToken() {
  return (dispatch) => {
	   return AsyncStorage.getItem('marketplaceToken')
	    .then( response => {
	      dispatch(getTokenSuccess(response))
	    })
	    .catch((err) => {
	      dispatch(getTokenFailure(err))
	    })
	}
}

export function getGuestToken() {
  return (dispatch) => {
	    return AsyncStorage.getItem('marketplaceGuestToken')
	    .then( response => {
	      dispatch(getGuestTokenSuccess(response))
	    })
	    .catch((err) => {
	      dispatch(getGuestTokenFailure(err))
	    })
	}
}

export function getGuestTokenSuccess(payload) {
  return {
    type: GET_GUEST_TOKEN_SUCCESS,
    payload
  }
}

export function getGuestTokenFailure(payload) {
  return {
    type: GET_GUEST_TOKEN_FAILURE,
    payload
  }
}

export function getTokenSuccess(payload) {
  return {
    type: GET_TOKEN_SUCCESS,
    payload
  }
}

export function getTokenFailure(payload) {
  return {
    type: GET_TOKEN_FAILURE,
    payload
  }
}

export function fetchGuest() {
	console.log('guest was called');

  return {
    [RSAA]: {
      endpoint: `${BASE_URL}/guest`,
      method: 'POST',
      types: [
        AUTHENTICATING,GUEST_SUCCESS,GUEST_FAILURE
      ],
      headers: {
        'Content-type': 'application/json'
      }
    }
  }
}
export function supplierSignup(email, guestToken) {

  return {
    [RSAA]: {
      endpoint: `${BASE_URL}/supplier_signup`,
      method: 'POST',
      types: [
        AUTHENTICATING,SIGNUP_SUCCESS,SIGNUP_FAILURE
      ],
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${guestToken}`
      },
      body: JSON.stringify({
				supplier: email
      })
    }
  }
}
export function buyerSignup(email, guestToken) {

  return {
    [RSAA]: {
      endpoint: `${BASE_URL}/buyer_signup`,
      method: 'POST',
      types: [
        AUTHENTICATING,SIGNUP_SUCCESS,SIGNUP_FAILURE
      ],
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${guestToken}`
      },
      body: JSON.stringify({
				buyer: email
      })
    }
  }
}

export function buyerSignin(email, password, token) {


  return {
    [RSAA]: {
      endpoint: `${BASE_URL}/buyer_signin`,
      method: 'POST',
      types: [
        AUTHENTICATING,SIGNIN_SUCCESS,SIGNIN_FAILURE
      ],
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
				buyer: {
          email,
          password
        },
      })
    }
  }
}

export function signout(token) {


  return {
    [RSAA]: {
      endpoint: `${BASE_URL}/signout`,
      method: 'DELETE',
      types: [
        AUTHENTICATING,SIGNOUT_SUCCESS,SIGNOUT_FAILURE
      ],
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    }
  }
}
