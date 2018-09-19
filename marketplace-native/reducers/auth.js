
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

const initialState = {
  error: false,
  authenticating: false,
  isAuthenticated: false,
  currentUser:undefined,
  updating: false,
  tokenRetrieved: false,
  token: null,
  guestToken: null,
  userType: null
}

export default function authReducer(state = initialState, action) {

switch (action.type) {

    case AUTHENTICATING:
      return {
        //FIXME: ...state overwriting authenticating, so this doesnt really do anything?
        ...state,
        authenticating: true
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        error: false,
        authenticating: false,
        isAuthenticated: true,
        token: action.payload.data.attributes.token,
        currentUser: action.payload.data,
      }
    case SIGNUP_FAILURE:
    console.log(action);
      return {
        ...state,
        error: action.payload,
        authenticating: false,
        isAuthenticated: false
      }
    case SIGNIN_SUCCESS:
      return {
        ...state,
        authenticating: false,
        error: false,
        isAuthenticated: true,
        token: action.payload.data.attributes.token,
        currentUser: action.payload.data,
      }
    case SIGNIN_FAILURE:
      return {
        ...state,
        authenticating: false,
        error: action.payload,
        isAuthenticated: false
      }
    case SIGNOUT_SUCCESS:
      return {
        ...state,
        authenticating: false,
        isAuthenticated: false,
        tokenRetrieved: false,
      }
    case SIGNOUT_FAILURE:
      return {
        ...state,
        authenticating: false,
        error: action.payload,
        isAuthenticated: true
      }
    case GET_TOKEN_SUCCESS:
      return {
        ...state,
        error: false,
        token: action.payload,
        isAuthenticated: true,
        tokenRetrieved: true,
      }
    case GET_TOKEN_FAILURE:

      return {
        ...state,
        error: action.payload,
      }
      case GET_GUEST_TOKEN_SUCCESS:
        //the only difference between GET_GUEST_TOKEN_SUCCESS and GET_TOKEN_SUCCESS is that GET_GUEST will not set isAuthenticated to true, preventing the HomeContainer from rendering screens dedicated to an authorized sign up user
        return {
          ...state,
          error: false,
          token: action.payload,
          tokenRetrieved: true,
        }
      case GET_GUEST_TOKEN_FAILURE:

        return {
          ...state,
          error: action.payload,
        }
      case GUEST_SUCCESS:
        return {
          ...state,
          error: false,
          authenticating: false,
          token: action.payload.token
        }
      case GUEST_FAILURE:
        return {
          ...state,
          authenticating: false,
          error: true
        }
      case UPDATING_USER:
        return {
          ...state,
          updating: true
        }
      case UPDATE_USER_SUCCESS:
      console.log(action);
        return {
          ...state,
          error: false,
          currentUser: action.payload.data,
          updating: false
        }
      case UPDATE_USER_FAILURE:
        return {
          ...state,
          error: 'UPDATE_USER_FAILURE',
          updating: false
        }

    case SHOWING_USER:
      return {
        ...state
      }
    case SHOW_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload.data
      }
    case SHOW_USER_FAILURE:
      return {
        ...state,
        error: action.payload
      }
      case RESET_ERROR:
      return {
        ...state,
        error: false
      }
  default:

      return state
  }

}
