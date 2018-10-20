import React from 'react';
import { PageHeader} from 'react-bootstrap';

const ShowTransaction = (props) => {

    return(
      <div>
      <PageHeader style={{ display: "flex", padding:10}}>
        Transaction {props.currentTransaction.account}
      </PageHeader>
      <ul style={{ display: "flex", display: 'inline-block',listStyle: 'none'}}>
        <li style={{padding:10}}><strong>Account No: </strong><span> {props.currentTransaction.account}</span></li>
        <li style={{padding:10}}><strong>Account Name: </strong><span> {props.currentTransaction.accountName}</span></li>
        <li style={{padding:10}}><strong>Currency: </strong><span> {props.currentTransaction.currencyCode}</span></li>
        <li style={{padding:10}}><strong>Amount: </strong><span> {props.currentTransaction.amount}</span></li>
        <li style={{padding:10}}><strong>Transaction Type: </strong><span> {props.currentTransaction.transactionType}</span></li>
        </ul>

      </div>

  )
}


export default ShowTransaction
