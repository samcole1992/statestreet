import { RSAA } from 'redux-api-middleware'

import {
FETCHING,
FETCH_PHOTOS_FAILURE,
FETCH_PHOTOS_SUCCESS,
SELECT_PHOTO
} from '../constants';



export function fetchPhotos() {
	return {
		[RSAA]: {
			endpoint: `https://api.unsplash.com/photos?per_page=25`,
			method: 'GET',
			headers: {
				'Content-type': 'application/json',
				'Authorization': `Client-ID 8aaceace94d936bed9f66b3b896b9921b633567c0d1a05a24b030b84461d9069`
			},
			types: [
				FETCHING, FETCH_PHOTOS_SUCCESS, FETCH_PHOTOS_FAILURE
			]
		}
	}
}

export function selectPhoto(photo, index) {
	let payload = photo
	return (dispatch) => {
		dispatch({
			type: SELECT_PHOTO,
			payload
		})
	}
}
