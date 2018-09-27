import React, { Component } from 'react'
import { Button } from 'react-native'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'

import { connect } from 'react-redux'
import EditProduct from '../components/EditProduct'
import { updateProduct, deleteProduct } from '../actions/products'
import { fetchBid } from '../actions/bids'
import { fetchOffer } from '../actions/offers'
import { submit } from 'redux-form'

import Link from '../components/Link'

class EditProductContainer extends Component {

  static navigationOptions = ({navigation}) => ({headerRight: <Link onPress={() => {
    navigation.state.params.dispatch(submit('EditProduct'))
  }} text='Save'/>,
  headerTitle: 'Product'});

  componentDidMount() {
    console.log(this.props);
    this.props.navigation.setParams({dispatch: this.props.dispatch, headerTitle: `Product`})
  }


  handleSubmit = (values) => {
    this.props.dispatch(updateProduct(this.props.currentProductId, values, this.props.token))
    .then(() => {
      if (this.props.currentProduct.bid_id) {
        this.props.fetchBid(this.props.currentBid.id, this.props.token)
        .then(()=> {
          this.props.navigation.pop()
        })
      } else {
        this.props.fetchOffer(this.props.currentOffer.id, this.props.token)
        .then(()=> {
          this.props.navigation.pop()
        })
      }

    })
  }

  onUpdateClick = () => {
    this.props.dispatch(submit('EditProduct'))
  }

  // To display selected taxes


  onDeleteProduct = (currentProduct) => {
    this.props.dispatch(deleteProduct(this.props.currentProductId, this.props.token))
    .then(() => {
      if (currentProduct.bid_id) {
        this.props.fetchBid(this.props.currentBid.id, this.props.token)
        .then(()=> {
          this.props.navigation.pop()
        })
      } else {
        this.props.fetchOffer(this.props.currentOffer.id, this.props.token)
        .then(()=> {
          this.props.navigation.pop()
        })
      }
    })
  }

  render() {
    return(
      <EditProduct
      onUpdateClick = {this.onUpdateClick}
        onSubmit= {this.handleSubmit}
        onDeleteProduct= {this.onDeleteProduct}
        currentProduct = {this.props.currentProduct}

      />
    )
  }
}

const mapStateToProps = state => {
  return {
    currentProductId: state.products.currentProduct.id,
    currentProduct: state.products.currentProduct,
    loading: state.products.loading,
    currentBid: state.bids.currentBid,
    currentOffer: state.offers.currentOffer,
    token: state.auth.token
  }
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    updateProduct: bindActionCreators(updateProduct, dispatch),
    deleteProduct: bindActionCreators(deleteProduct, dispatch),
    fetchOffer: bindActionCreators(fetchOffer, dispatch),
    fetchBid: bindActionCreators(fetchBid, dispatch)

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditProductContainer);
