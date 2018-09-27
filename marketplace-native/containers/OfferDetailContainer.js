import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {

  Alert,
  ActivityIndicator,
  PermissionsAndroid
} from 'react-native';
import OfferDetail from '../components/OfferDetail'
import OfferRestore from '../components/OfferRestore'

import {
  fetchOffer,
  claimOffer,
  deleteOffer

} from '../actions/offers'
import {
  fetchProducts,
  createProduct,
  selectProduct,
  clearProducts
} from '../actions/products'
import ErrorScreen from '../components/ErrorScreen'
import Link from '../components/Link'


class OfferDetailContainer extends Component {
  static navigationOptions = ({navigation}) => ({headerTitle: navigation.state.params ? navigation.state.params.header : <ActivityIndicator size="small" color="#dbdbdb"/>});


  componentDidMount() {

    this.props.navigation.setParams({
      header: `Offer ${this.props.offer.id}`
    })
    this.props.fetchProducts(this.props.offer, this.props.token)
    
  }


  onCreateProduct = () => {
    const { navigate } = this.props.navigation
    this.props.createProduct(this.props.offer, this.props.token).then(() => {
      navigate('EditProductContainer')
    })
  }
  onDeleteOffer = () => {
    const { navigate } = this.props.navigation
    this.props.deleteOffer(this.props.bid, this.props.token).then(() => {
      this.props.navigation.pop()
    })
  }

  onSelectProduct = (product) => {
    console.log(product.id)
    const { navigate } = this.props.navigation
    this.props.selectProduct(product) //save invoice to redux for future use
    navigate('EditProductContainer', {headerTitle: `${product.amount + product.name}`})
  }
  onClearProducts = () => {
      this.props.clearProducts(this.props.offer, this.props.token)
    }
  onErrorClick = () => {
    const { navigate } = this.props.navigation
 this.props.navigation.popToTop()
 }
 //   onRestoreClick=()=>{
 //     //this will be replaced by a restore endpoint
 // console.log('fish and chips');
 //     const resetAction = NavigationActions.reset({
 //       index: 1,
 //       actions: [NavigationActions.navigate({ routeName: 'OfferListContainer' }),NavigationActions.navigate({ routeName: 'OfferDetailContainer' })],
 //     });
 //     this.props.restoreOffer(this.props.offer.id, this.props.token)
 //     .then(()=>this.props.navigation.dispatch(resetAction))
 //   }

  render() {
    if (this.props.offerError || this.props.productError) {
      console.log(this.props.offerError)
      console.log(this.props.productError)

      return <ErrorScreen onClick={this.onErrorClick}/>
    }
    // else if(this.props.offer.attributes.deleted_at){
    //   return <OfferRestore onRestoreClick={this.onRestoreClick}
    //   />
    // }
    else {
      return (
        <OfferDetail
        offer={this.props.offer}
        currentUser = {this.props.currentUser}
         products={ this.props.products }
         onCreateProduct={ this.onCreateProduct }
         onSelectProduct={ this.onSelectProduct }
         onClaimOffer={ this.onClaimOffer }
         onDeleteOffer = {this.onDeleteOffer}
         onClearProducts = {this.onClearProducts}
         loading={this.props.loading}
       />
     )
    }
  }

}


// [mapStateToProps(state, [ownProps]): stateProps] (Function): If this argument is specified, the new component will subscribe to Redux store updates. This means that any time the store is updated, mapStateToProps will be called. The results of mapStateToProps must be a plain object, which will be merged into the component’s props. If you don't want to subscribe to store updates, pass null or undefined in place of mapStateToProps.
// If your mapStateToProps function is declared as taking two parameters, it will be called with the store state as the first parameter and the props passed to the connected component as the second parameter, and will also be re-invoked whenever the connected component receives new props as determined by shallow equality comparisons. (The second parameter is normally referred to as ownProps by convention.)
const mapStateToProps = state => {
  return {
    offer: state.offers.currentOffer,
    offerId: state.offers.currentOffer.id,
    products: state.products.products,
    offerError: state.offers.error,
    productError: state.products.error,
    updated: state.offers.updated,
    updating: state.offers.updating,
    loading: state.products.loading,
    token: state.auth.token,
    currentUser: state.auth.currentUser
  }
}


const mapDispatchToProps = {
  fetchProducts,
  createProduct,
  selectProduct,
  fetchOffer,
  claimOffer,
  clearProducts,
  deleteOffer
}

export default connect(mapStateToProps, mapDispatchToProps)(OfferDetailContainer);
