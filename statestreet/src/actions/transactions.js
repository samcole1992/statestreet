
import {
LOAD_TRANSACTIONS,
SELECT_TRANSACTION,
ACCOUNT_NAME,
TRANSACTION_TYPE
} from '../constants';


export function loadTransactions(data) {
	let payload = data
	return (dispatch) => {
		dispatch({
			type: LOAD_TRANSACTIONS,
			payload
		})
	}
}

export function selectTransaction(item) {
	let payload = item
	return (dispatch) => {
		dispatch({
			type: SELECT_TRANSACTION,
			payload
		})
	}
}

export function filterAccountName(filter) {
	let payload = filter
	return (dispatch) => {
		dispatch({
			type: ACCOUNT_NAME,
			payload
		})
	}
}

export function filterTransactionType(filter) {

	let payload = filter
	return (dispatch) => {
		dispatch({
			type: TRANSACTION_TYPE,
			payload
		})
	}
}
