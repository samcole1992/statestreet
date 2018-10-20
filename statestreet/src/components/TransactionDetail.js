import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom'


const TransactionDetail = (props) => {

		return(
        <tr onClick ={()=>props.onClick(props.transaction)}>
           <td>{props.transaction.account}</td>
           <td>{props.transaction.accountName}</td>
           <td>{props.transaction.currencyCode}</td>
           <td>{props.transaction.amount}</td>
           <td>{props.transaction.transactionType}</td>
         </tr>
	    )
	}


export default TransactionDetail;
