import React from 'react'
import {View, Text} from 'react-native'
import {Button} from 'react-native-elements'

const BOHeader = (props) => {
let button
if (props.item.type=='bid'&&props.currentUser.type=="buyer") {
  button = <Button
  title='Create Product'
  onPress={()=>props.createProduct()}
  />
}
else if (props.item.type=='offer'&&props.currentUser.type=="supplier") {
  button = <Button
  title='Create Product'
  onPress={()=>props.createProduct()}
  />
}
else {
  button = <Button
  title='Claim'
  onPress={()=>props.claimItem()}
  />
}
  return (
    <View
    testID = "BOHeader"
    style={{flex:1,flexDirection:'row'}}>
    <View>
      <Text>
      {props.item.total}
      </Text>
      <Text>
      {props.item.date_issued}
      </Text>
    </View>
    <View>
      {button}
    </View>
    </View>
  );
}

export default BOHeader;
