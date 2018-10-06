// This is a error message intended to be in the front of the current screen.
// Small one, for use with another component (a form etc.)
// Used mainly with problems with the API.
// In case of an error user could repeat the action.

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {View, Text} from 'react-native'
import {Button} from 'react-native-elements'

import styles from '../styles'

const ErrorMessage = ({message}) => <Text>{message}</Text>

Error.propTypes = {
  message: PropTypes.string.isRequired
}

export default ErrorMessage
