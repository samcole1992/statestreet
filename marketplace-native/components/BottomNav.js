import React from 'react';
import { connect } from 'react-redux';
import { View, ActivityIndicator } from 'react-native';
import NewButton from './NewButton'
import Link from './Link'

import styles from '../styles'

const BottomNav = ({newItem, toUserItems,toMyOrders, toAllItems, creating, signout, userType}) => {

    let myDocs
    let allDocs
    let newDoc
    if (userType=='buyer') {
      newDoc = <Link text = "New Bid" onPress={newItem}/>
      myDocs = <Link text = "My Bids" onPress={toUserItems}/>
      allDocs = <Link text= "Open Offers" onPress={toAllItems}/>
    }
    else {
      newDoc = <Link text = "New Offer" onPress={newItem}/>

      myDocs = <Link text = "My Offers " onPress={toUserItems}/>
      allDocs = <Link text= "Open Bids" onPress={toAllItems}/>
    }
    return (
      <View style={{flex:1,flexDirection:"row"}}>

        {newDoc}
        <Link text = "My Orders" onPress={toMyOrders}/>
        {myDocs}
        {allDocs}
        <Link text = "Signout" onPress={signout}/>
      </View>
    )
}

export default BottomNav
