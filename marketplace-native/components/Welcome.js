import React from 'react';
import PropTypes from 'prop-types'
import {List, ListItem} from 'react-native-elements'
import { View, TouchableOpacity,Text, ActivityIndicator } from 'react-native';
import styles from '../styles'

// extract props.editButtons
const Welcome = ({
onBuyerClick,
onSupplierClick
}) => {


  return(

    <View style={{padding: 6, flex: 3}} >
    <TouchableOpacity testID="BuyerButton" onPress={()=>onBuyerClick()}>

       <Text style={{textAlign: 'center'}}>
        Buyer
       </Text>
    </TouchableOpacity>

    <TouchableOpacity testID="SupplierButton" onPress={()=>onSupplierClick()}>

       <Text style={{textAlign: 'center'}}>
        Supplier
       </Text>
    </TouchableOpacity>
      </View>
    )
}


const waiting = <ActivityIndicator size={23.5} style={{paddingRight:5}} color="rgba(0, 0, 0, 0.4)"/>



export default Welcome
