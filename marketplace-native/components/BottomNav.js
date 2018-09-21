import React from 'react';
import { connect } from 'react-redux';
import { View, ActivityIndicator } from 'react-native';
import NewButton from './NewButton'
import Link from './Link'

import styles from '../styles'

const BottomNav = ({newItem, toUserItems, toAllItems, creating, signout, userType}) => {
    const spinner = (
      <View style={{padding: 6, flex: 3}} >
        <ActivityIndicator size="small" color="#dbdbdb" />
      </View>
    )
    const newButton = <NewButton handlePress={newItem}/>
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
      <View style={styles.navContainer}>
        { creating ? spinner : newButton }
        {myDocs}
        {allDocs}
        <Link text = "Signout" onPress={signout}/>
      </View>
    )
}

export default BottomNav
