import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import ShowTransactionContainer from './containers/ShowTransactionContainer';
import IndexTransactionsContainer from './containers/IndexTransactionsContainer';

export default () => {
 return (
   <BrowserRouter>
   <Switch>
   <Route exact path='/' component={IndexTransactionsContainer}/>
   <Route path='/transactions/:account' component={ShowTransactionContainer}/>

   </Switch>
   </BrowserRouter>
 )
}
