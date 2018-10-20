import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import _ from 'lodash'
import {data} from '../data/data'
import {withRouter} from 'react-router-dom';

import {bindActionCreators} from 'redux'

import IndexTransactions from '../components/IndexTransactions'
import {
  loadTransactions,
  selectTransaction,
  filterAccountName,
  filterTransactionType
} from '../actions/transactions'

class IndexTransactionsContainer extends Component {

  constructor() {
     super();
     this.state = {
           data:[],
           accountName: [],
           transactionType:[]
         }
          this.changeAccountName = this.changeAccountName.bind(this);
          this.changeTransactionType = this.changeTransactionType.bind(this);
        }

    makeTransactions = () =>{
      if (!!this.props.accountName.length&&!!this.props.transactionType.length) {
        this.props.loadTransactions(data.transactions.filter( item =>
        this.props.transactionType.includes(item.transactionType)&&
        this.props.accountName.includes(item.accountName)))
        }
      else if (!this.props.accountName.length&&!!this.props.transactionType.length) {
        this.props.loadTransactions(data.transactions.filter( item =>
        this.props.transactionType.includes(item.transactionType)))
        }
      else if (!!this.props.accountName.length&&!this.props.transactionType.length) {        console.log('transactionType');
        this.props.loadTransactions(data.transactions.filter( item =>
        this.props.accountName.includes(item.accountName)))
        }
      else  {
        this.props.loadTransactions(data.transactions)
        }
    }
    componentDidMount() {
      this.makeTransactions()
    }

    selectTransaction = (transaction) => {
      const {history} = this.props
      this.props.selectTransaction(transaction)
      history.push(`/transactions/${transaction.account}`)
    }

    changeAccountName=(filter)=>{
      console.log(filter);
      if (this.props.accountName.includes(filter)) {
        console.log('yes');
        let newArray =this.props.accountName
        newArray.splice(this.props.accountName.indexOf(filter),1)
        this.props.filterAccountName(newArray)

      }
      else {
        console.log('no');
        let newArray = this.props.accountName
        newArray.push(filter)
        this.props.filterAccountName(newArray)

      }
      this.makeTransactions()

    }

    changeTransactionType=(filter)=>{


      if (this.props.transactionType.includes(filter)) {
        let newArray =this.props.transactionType
        newArray.splice(this.props.transactionType.indexOf(filter),1)
        this.props.filterTransactionType(newArray)
      }
      else {
        let newArray = this.props.transactionType
        newArray.push(filter)
        this.props.filterTransactionType(newArray)
      }
      this.makeTransactions()

    }

  render() {
      return (
        <IndexTransactions
        accountName= {this.props.accountName}
        transactionType= {this.props.transactionType}
        transactions={this.props.transactions}
        onClick={this.selectTransaction}
        changeAccountName = {this.changeAccountName}
        changeTransactionType = {this.changeTransactionType}
        />
      )
  }

}

const mapStateToProps = state => {
  return {
    currentTransaction: state.transactions.currentTransaction,
    transactions: state.transactions.transactions,
    accountName: state.transactions.accountName,
    transactionType: state.transactions.transactionType

  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    loadTransactions: bindActionCreators(loadTransactions, dispatch),
    selectTransaction: bindActionCreators(selectTransaction, dispatch),
    filterAccountName: bindActionCreators(filterAccountName, dispatch),
    filterTransactionType: bindActionCreators(filterTransactionType, dispatch)

  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(IndexTransactionsContainer));
