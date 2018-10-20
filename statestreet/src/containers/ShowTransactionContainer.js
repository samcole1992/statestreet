
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom';

import ShowTransaction from '../components/ShowTransaction'


class ShowTransactionContainer extends Component {

  render() {
      return (
        
        <ShowTransaction
        currentTransaction={this.props.currentTransaction}
        />
      )
  }

}

const mapStateToProps = state => {
  return {
    currentTransaction: state.transactions.currentTransaction
  }
}

export default withRouter(connect(mapStateToProps)(ShowTransactionContainer));
