import React from 'react'
import PropTypes from 'prop-types'
import {Text, TouchableOpacity, ActivityIndicator, View} from 'react-native'
import {connect} from 'react-redux'
import styles from '../styles'

export const Link = (props) => {
if (props.authenticating) {
  return(
    <View style={{padding: 15}}>
      <ActivityIndicator size="small" color="#007AFF"/>
    </View>
  )
}
else {
  return (
    <TouchableOpacity onPress={()=>props.onPress()}>
      <Text style={ [props.linkStyle, styles.androidLink] }>{props.text}</Text>
    </TouchableOpacity>
  )
}

}

  Link.propTypes = {
    onPress: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
  }

  const mapStateToProps = state => {
    return {
      authenticating: state.auth.authenticating
    }
  }
export default connect(mapStateToProps)(Link);
