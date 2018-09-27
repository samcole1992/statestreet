// https://medium.com/wolox-driving-innovation/https-medium-com-wolox-driving-innovation-easy-forms-in-react-native-with-redux-form-1cdc16a9a889

import React from 'react';
import { TextInput, View, Text } from 'react-native';
import styles from '../styles';

/**
* to be wrapped with redux-form Field component
 */
export default function TextField(props) {

  const { input, meta: { touched, error, warning }, ...inputProps } = props;
  return (
    <View style={[styles.signupInputContainer]}>
      <TextInput
        {...inputProps}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
        style={[styles.signupInput]}
        autoCorrect={false}
			  autoCapitalize="none"
        underlineColorAndroid="transparent"
        placeholderTextColor='rgba(0, 0, 0, 0.4)'
      />

      {touched &&
        ((error && <Text style={ styles.textInputError }>{error}</Text>) ||
          (warning && <Text style={ styles.textInputWarning }>{warning}</Text>))}

    </View>
  )
}
