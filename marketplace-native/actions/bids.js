import { RSAA } from 'redux-api-middleware'

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

export function fetchBuyerBids(token) {
	return {
		[RSAA]: {
			endpoint: `${BASE_URL}/bids`,
			method: 'GET',
			headers: {
				'Content-type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			types: [
				FETCHING, GET_BUYER_BIDS_SUCCESS, GET_BUYER_BIDS_FAILURE
			]
		}
	}
}

export function fetchBid(id,token) {
	return {
		[RSAA]: {
			endpoint: `${BASE_URL}/bids/${id}`,
			method: 'GET',
			headers: {
				'Content-type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			types: [
        FETCHING, FETCH_BID_SUCCESS, FETCH_BID_FAILURE
			]
		}
	}
}

export function fetchAllBids(token) {

	return {
		[RSAA]: {
			endpoint: `${BASE_URL}/bids/all`,
			method: 'GET',
			headers: {
				'Content-type': 'application/json',
				'Authorization': `Bearer ${token}`

			},
			types: [
				FETCHING, GET_ALL_BIDS_SUCCESS, GET_ALL_BIDS_FAILURE
			]
		}
	}
}

export function selectBid(bid, index) {
	let payload = bid
	return (dispatch) => {
		dispatch({
			type: SELECT_BID,
			payload
		})
	}
}
export function claimBid(bid, index) {
  console.log(bid);
	// return (dispatch) => {
	// 	dispatch({
	// 		type: SELECT_BID,
	// 		payload
	// 	})
	// }
}
export function createBid(token) {

	return {
		[RSAA]:{
			endpoint:`${BASE_URL}/bids`,
			method:'POST',
			types:[
				CREATING_BID,CREATE_BID_SUCCESS,CREATE_BID_FAILURE
			],
			headers: {
				'Content-type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify({
  			bid: {
  				date_issued: Date().toLocaleString()
  			}
  		})
		}
	};
}
