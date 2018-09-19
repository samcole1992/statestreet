import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const NewButton = ({ handlePress }) => {

    return (
      <View style={{padding: 6, flex: 3}} >
        <TouchableOpacity onPress={handlePress}>
          <Text style={{textAlign: 'center'}}>
             <Icon name="plus" size={18} color="#5e9bff" style={{paddingLeft:10,flex:.15}} />
          </Text>
          <Text style={{textAlign: 'center'}}>
            New
          </Text>
        </TouchableOpacity>
      </View>
    )


}


export default NewButton
