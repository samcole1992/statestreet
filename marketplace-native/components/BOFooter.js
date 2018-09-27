import React from 'react'
import {View} from 'react-native'
import {Button } from 'react-native-elements'
import {connect} from 'react-redux'


const BOFooter = (props) => {
  console.log(props);
  let footer
  if ((props.item.type=='bid'&&props.currentUser.type=="buyer")||(props.item.type=='offer'&&props.currentUser.type=="supplier")) {
    return (
      <View style={{flex:1,flexDirection:"row"}}
      testID = "BOFooter"
      >
      <Button
        title = {`Delete ${props.item.type}`}
        onPress={()=>props.deleteItem()}
      />

      <Button
        title = "Clear Products"
        onPress={()=>props.clearProducts()}
      />
      </View>

  )
  }
  else{
  return (
  <View style={{flex:1,flexDirection:"row"}}
  testID = "BOFooter"
  >

  </View>)}

}
export default BOFooter
