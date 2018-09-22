import React from 'react';
import { connect } from 'react-redux';
import { View, ActivityIndicator } from 'react-native';
import NewButton from './NewButton'
import Link from './Link'

import styles from '../styles'

const BottomNav = ({newItem, toUserItems, toAllItems, creating, signout, userType}) => {

    let myDocs
    let allDocs
    if (userType=='buyer') {
      myDocs = <Link text = "My Bids" onPress={toUserItems}/>
      allDocs = <Link text= "Open Offers" onPress={toAllItems}/>
    }
    if (userType=='supplier') {
      myDocs = <Link text = "My Offers " onPress={toUserItems}/>
      allDocs = <Link text= "Open Bids" onPress={toAllItems}/>
    }
    return (
      <View style={{flex:1,flexDirection:"row"}}>
        <Link text = "New Bid" onPress={newItem}/>
        {myDocs}
        {allDocs}
        <Link text = "Signout" onPress={signout}/>
      </View>
    )
}

export default BottomNav
