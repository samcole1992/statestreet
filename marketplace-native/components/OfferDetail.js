import React from 'react';
import PropTypes from 'prop-types'
import {List, ListItem, Button} from 'react-native-elements'
import {Text, View, FlatList} from 'react-native';
import BOHeader from './BOHeader'
import BOFooter from './BOFooter'
import Loading from '../components/Loading'
import styles from '../styles'

const OfferDetail = (props) => {
console.log(props+'OfferDetail');
  if (props.fetching ) {
    return <Loading/>
  }

  else{

    return(
    <FlatList
     testID="OfferDetail"
     ListHeaderComponent=
       {<BOHeader
         currentUser ={props.currentUser}
         item = {props.offer}
         createProduct= {props.onCreateProduct}
         claimOffer ={ props.onClaimOffer}
         />}
     ListFooterComponent=
       {<BOFooter
         currentUser ={props.currentUser}
         item = {props.offer}
         deleteOffer= {props.onDeleteOffer}
         clearProducts= {props.clearProducts}
         />}
       data={props.products}

       renderItem={({item, index}) => (
       <ListItem
         underlayColor={'#dbdbdb'}
         item={item}
         titleContainerStyle={{flex:.85}}
         style={{flex:1}}
         containerStyle={styles.listContainerStyle}
         titleStyle={styles.listItemTitleStyle}
         title={item.attributes.amount + item.attributes.name}
         subtitle={item.id}
         subtitleStyle={{fontWeight:'normal'}}
         rightTitleStyle={{fontWeight:'bold'}}
         rightTitle={item.attributes.price}
         onPress={()=>{
           props.onSelectProduct(item)
         }}
         />
       )}
       keyExtractor={item => item.id}

    />
  )}
}

OfferDetail.propTypes = {
  products: PropTypes.array.isRequired
}


export default OfferDetail
