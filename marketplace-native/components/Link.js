import React from 'react'
import PropTypes from 'prop-types'
import {Text, TouchableOpacity, ActivityIndicator, View} from 'react-native'
import {connect} from 'react-redux'
import styles from '../styles'

export const Link = (props) => {


  return (
    <TouchableOpacity onPress={()=>props.onPress()}>
      <Text style={ styles.androidLink}>{props.text}</Text>
    </TouchableOpacity>
  )


}

  Link.propTypes = {
    text: PropTypes.string.isRequired
  }


export default Link;
