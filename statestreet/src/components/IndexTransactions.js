
import React, { Component } from 'react';
import TransactionDetail from './TransactionDetail';
import {Table, PageHeader} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import SideBar from './SideBar';

const IndexTransactions = (props) => {
console.log(props);
    return(
      <div>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"/>

      <PageHeader style={{ display: "flex", padding:10}}>
        My Transactions
      </PageHeader>
      <div style={{ display: "flex", padding:10}}>

      <SideBar accountName={props.accountName} transactionType={props.transactionType} changeAccountName={props.changeAccountName} changeTransactionType={props.changeTransactionType}/>

            <Table striped bordered condensed hover style={{ padding:10}}>
              <thead>
                <tr>
                  <th>Account No.</th>
                  <th>Account Name</th>
                  <th>Currency</th>
                  <th>Amount</th>
                  <th>Transaction Type</th>
                </tr>
              </thead>
              <tbody>

              {props.transactions.map((transaction, index) => (

                <TransactionDetail
                  key={index}
                  transaction={transaction}
                  onClick= {props.onClick}
                />
              ))}
              </tbody>
              </Table>
          </div>
          </div>

  )
}



export default IndexTransactions;
