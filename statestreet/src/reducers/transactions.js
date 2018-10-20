
import {

LOAD_TRANSACTIONS,
SELECT_TRANSACTION,
ACCOUNT_NAME,
TRANSACTION_TYPE
} from '../constants';

const initialState = {
  error: false,
  fetching: false,
  transactions: [],
  currentTransaction: {},
  accountName: [],
  transactionType: []
}

export default function transactionsReducer(state = initialState, action) {

switch (action.type) {
  case LOAD_TRANSACTIONS:
      return {
        ...state,
        fetching: false,
        transactions:action.payload
      }
  case SELECT_TRANSACTION:
      return {
        ...state,
        fetching: false,
        currentTransaction:action.payload
      }
  case ACCOUNT_NAME:

      return {
        ...state,
        fetching: false,
        accountName:action.payload
      }
  case TRANSACTION_TYPE:
      return {
        ...state,
        fetching: false,
        transactionType:action.payload
      }
  default:
      return state

}
}
