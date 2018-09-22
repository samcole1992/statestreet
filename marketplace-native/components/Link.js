import React from 'react'
import PropTypes from 'prop-types'
import {Text, TouchableOpacity, ActivityIndicator, View} from 'react-native'
import {connect} from 'react-redux'
import styles from '../styles'

export const Link = (props) => {


  return (
    <View style={{flex: .25}} >
    <TouchableOpacity onPress={props.onPress}>
      <Text style={ styles.androidLink}>{props.text}</Text>
    </TouchableOpacity>
    </View>
  )


}

  Link.propTypes = {
    text: PropTypes.string.isRequired
  }


export default Link;
