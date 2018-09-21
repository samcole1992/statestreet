import { RSAA } from 'redux-api-middleware'

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

export function fetchSupplierOffers(token) {

	return {
		[RSAA]: {
			endpoint: `${BASE_URL}/offers`,
			method: 'GET',
			headers: {
				'Content-type': 'application/json',
				'Authorization': `Bearer ${token}`

			},
			types: [
				FETCHING, GET_SUPPLIER_OFFERS_SUCCESS, GET_SUPPLIER_OFFERS_FAILURE
			]
		}
	}
}

export function fetchAllOffers(token) {

	return {
		[RSAA]: {
			endpoint: `${BASE_URL}/offers/all`,
			method: 'GET',
			headers: {
				'Content-type': 'application/json',
				'Authorization': `Bearer ${token}`

			},
			types: [
				FETCHING, GET_ALL_OFFERS_SUCCESS, GET_ALL_OFFERS_FAILURE
			]
		}
	}
}

export function selectOffer(offer, index) {
	let payload = offer
	return (dispatch) => {
		dispatch({
			type: SELECT_OFFER,
			payload
		})
	}
}
export function createOffer(token) {

	return {
		[RSAA]:{
			endpoint:`${BASE_URL}/offers`,
			method:'POST',
			types:[
				CREATING_OFFER,CREATE_OFFER_SUCCESS,CREATE_OFFER_FAILURE
			],
			headers: {
				'Content-type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		}
	};
}
