import React from 'react'
import {View} from 'react-native'
import {Button } from 'react-native-elements'
import {connect} from 'react-redux'


const BOFooter = (props) => {
  let footer
  if (props.item.type=='bid'&&props.currentUser.type=="buyer") {
    footer = <View style={{flex:1,flexDirection:"row"}}
    testID = "BOFooter"
    >
    <Button
      title = `Delete ${prop.item.type}`
      onPress={()=>props.deleteItem()}
    />

    <Button
      title = "Clear Products"
      onPress={()=>props.clearProducts()}
    />
    </View>
  }
  else if (props.item.type=='offer'&&props.currentUser.type=="supplier") {
    footer = <View style={{flex:1,flexDirection:"row"}}
    testID = "BOFooter"
    >
    <Button
      title = `Delete ${prop.item.type}`
      onPress={()=>props.deleteItem()}
    />

    <Button
      title = "Clear Products"
      onPress={()=>props.clearProducts()}
    />
    </View>
  }
  return (
    {footer}

)

}
export default BOFooter
