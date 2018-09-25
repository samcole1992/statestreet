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
  claimOffer

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
    .then((action)=> {
      //if invoice has no items go straight to the new item form
      if(!action.payload.data.length){
        this.onCreateProduct().then(() => {
          navigate('EditProductContainer')
        })
      }
    })
  }


  onCreateProduct = () => {
    const { navigate } = this.props.navigation
    this.props.createProduct(this.props.offer, this.props.token).then(() => {
      navigate('EditProductContainer')
    })
  }


  onSelectProduct = (product) => {
    console.log(product.id)
    const { navigate } = this.props.navigation
    this.props.selectProduct(product) //save invoice to redux for future use
    navigate('EditProductContainer', {headerTitle: `${product.amount + product.name}`})
  }
  onClearProductsClick = () => {
      console.log('on clear taxes click');
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
         products={ this.props.products }
         onCreateProduct={ this.onCreateProduct }
         onSelectProduct={ this.onSelectProduct }
         onClaimOffer={ this.onClaimOffer }
         onClearProducts = {this.onClearProducts}
         offer={this.props.currentOffer}
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
    currentProduct: state.product.currentProduct, //for navigating back from items edit we need to be subscribed to changes
    products: state.products.products,
    offerError: state.offers.error,
    productError: state.products.error,
    updated: state.offers.updated,
    updating: state.offers.updating,
    loading: state.products.loading,
    token: state.auth.token
  }
}


const mapDispatchToProps = {
  fetchProducts,
  createProduct,
  selectProduct,
  fetchOffer,
  claimOffer,
  clearProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(OfferDetailContainer);
