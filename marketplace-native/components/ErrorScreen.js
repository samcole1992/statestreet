// Generic full screen error component.
// Intended for general errors.
// onClick function is for recovery (how a user can continue)
import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';

const Error = ({onClick}) =>
<View style={{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: 'white'
}}>
<View >
  <Text style={{
      fontWeight: 'bold',
      margin: 20,
      fontSize:30
  }}>It seems there has been an error. Please Try again later</Text>

</View>

</View>


Error.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Error
