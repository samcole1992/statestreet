
import React, { Component } from 'react';
import TransactionDetail from './TransactionDetail';
import {Table, PageHeader} from 'react-bootstrap';
import { Link } from 'react-router-dom'

const IndexTransactions = (props) => {
console.log(props);
    return(
      <div>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"/>

      <PageHeader style={{ display: "flex", padding:10}}>
        My Transactions
      </PageHeader>
      <div style={{ display: "flex", padding:10}}>

            <div
              style={{
                width: "30%",
                background: "#f0f0f0"
              }}
            >
            <strong style={{ padding: 10 }}>Account Name</strong>

              <ul style={{ listStyleType: "none", padding: 10 }}>
                <li>
                <input type="checkbox" checked={props.accountName.includes("Savings Account")} onChange={()=>props.changeAccountName("Savings Account") }/>
                <label> Savings Account</label>
                </li>
                <li>
                <input type="checkbox" checked={props.accountName.includes("Checking Account")} onChange={()=>props.changeAccountName("Checking Account") }/>
                <label> Checking Account</label>

                </li>
                <li>
                <input type="checkbox" checked={props.accountName.includes("Auto Loan Account")} onChange={()=>props.changeAccountName("Auto Loan Account") }/>
                <label> Auto Loan Account</label>

                </li>
                <li>
                <input type="checkbox" checked={props.accountName.includes("Credit Card Account")} onChange={()=>props.changeAccountName("Credit Card Account") }/>
                <label> Credit Card Account</label>

                </li>
                <li>
                <input type="checkbox" checked={props.accountName.includes("Investment Account")} onChange={()=>props.changeAccountName("Investment Account") }/>
                <label> Investment Account</label>

                </li>
                <li>
                <input type="checkbox" checked={props.accountName.includes("Personal Loan Account")} onChange={()=>props.changeAccountName("Personal Loan Account") }/>
                <label> Personal Loan Account</label>

                </li>
                <li>
                <input type="checkbox" checked={props.accountName.includes("Money Market Account")} onChange={()=>props.changeAccountName("Money Market Account") }/>
                <label> Money Market Account</label>

                </li>
                <li>
                <input type="checkbox" checked={props.accountName.includes("Home Loan Account")} onChange={()=>props.changeAccountName("Home Loan Account") }/>
                <label> Home Loan Account</label>

                </li>
              </ul>
              <strong style={{ padding: 10 }}>Transaction Type</strong>

              <ul style={{ listStyleType: "none", padding: 10 }}>
                <li>
                <input type="checkbox" checked={props.transactionType.includes("deposit")} onChange={()=>props.changeTransactionType("deposit") }/>
                <label> Deposit</label>

                </li>
                <li>
                <input type="checkbox" checked={props.transactionType.includes("withdrawal")} onChange={()=>props.changeTransactionType("withdrawal") }/>
                <label> Withdrawal</label>

                </li>
                <li>
                <input type="checkbox" checked={props.transactionType.includes("invoice")} onChange={()=>props.changeTransactionType("invoice") }/>
                <label> Invoice</label>

                </li>
                <li>
                <input type="checkbox" checked={props.transactionType.includes("payment")} onChange={()=>props.changeTransactionType("payment") }/>
                <label> Payment</label>

                </li>

              </ul>

            </div>

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
