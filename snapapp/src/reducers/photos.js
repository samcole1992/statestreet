
import {
FETCHING,
FETCH_PHOTOS_FAILURE,
FETCH_PHOTOS_SUCCESS,
SELECT_PHOTO
} from '../constants';

const initialState = {
  error: false,
  fetching: false,
  photos: [],
  currentPhoto: {}
}

export default function photosReducer(state = initialState, action) {

switch (action.type) {
  case FETCH_PHOTOS_SUCCESS:
  console.log(action);
      return {
        ...state,
        fetching: false,
        photos:action.payload
      }
  case FETCH_PHOTOS_FAILURE:
  console.log(action);

      return {
        ...state,
        fetching: false,
        error: action.error
      }
  case SELECT_PHOTO:
  console.log(action);

      return {
        ...state,
        fetching: false,
        currentPhoto:action.payload
      }
  case FETCHING:
      return {
        ...state,
        fetching: true
      }
  default:
      return state

}
}
