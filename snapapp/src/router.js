import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import PhotoShowContainer from './containers/PhotoShowContainer';
import PhotoIndexContainer from './containers/PhotoIndexContainer';

export default () => {
 return (
   <BrowserRouter>
     <Switch>
       <Route exact path='/' component={PhotoIndexContainer}/>
       <Route path='/photos/:id' component={PhotoShowContainer}/>
     </Switch>
   </BrowserRouter>
 )
}
