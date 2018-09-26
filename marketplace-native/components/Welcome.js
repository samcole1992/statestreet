import React from 'react';
import PropTypes from 'prop-types'
import {List, ListItem,Button} from 'react-native-elements'
import { View, TouchableOpacity,Text, ActivityIndicator } from 'react-native';
import styles from '../styles'

// extract props.editButtons
const Welcome = ({
onBuyerClick,
onSupplierClick
}) => {


  return(

    <View
    testID="Welcome"
    style={{padding: 6, flex: 3}} >

    <Button
    testID="BuyerButton"
    title='Buyer'
    onPress={()=>onBuyerClick()}
    buttonStyle={{ backgroundColor: 'rgba(111, 202, 186, 1)', borderRadius: 5 }}
    />


    <Button
    testID="SupplierButton"
    title='Supplier'
    onPress={()=>onSupplierClick()}
    buttonStyle={{ backgroundColor: 'rgba(111, 0, 186, 1)', borderRadius: 5 }}

    />
      </View>
    )
}


const waiting = <ActivityIndicator size={23.5} style={{paddingRight:5}} color="rgba(0, 0, 0, 0.4)"/>



export default Welcome
