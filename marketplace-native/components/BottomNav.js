import React from 'react';
import { connect } from 'react-redux';
import { View, ActivityIndicator } from 'react-native';
import NewButton from './NewButton'

import styles from '../styles'

const BottomNav = ({newItem, toItems, toMyItems, creating}) => {
    const spinner = (
      <View style={{padding: 6, flex: 3}} >
        <ActivityIndicator size="small" color="#dbdbdb" />
      </View>
    )
    const newButton = <NewButton handlePress={newItem}/>

    return (
      <View style={styles.navContainer}>
        { creating ? spinner : newButton }
        <DocumentsButton handlePress={toDocuments}/>
        <CustomersButton handlePress={toCustomers}/>
      </View>
    )
}

export default BottomNav
