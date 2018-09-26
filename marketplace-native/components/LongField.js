// https://medium.com/wolox-driving-innovation/https-medium-com-wolox-driving-innovation-easy-forms-in-react-native-with-redux-form-1cdc16a9a889

import React from 'react';
import { TextInput, View, Text } from 'react-native';
import styles from '../styles';

/**
* to be wrapped with redux-form Field component
 */
export default function LongField(props) {

  const { input, meta: { touched, error, warning }, ...inputProps } = props;

    return (
      <View style={[styles.inputContainer]}>
        <TextInput
          {...inputProps}
          onChangeText={input.onChange}
          onBlur={input.onBlur}
          onFocus={input.onFocus}
          value={input.value}
          multiline = {true}
          style={[styles.textarea]}
          autoCapitalize="none"
          autoCorrect={false}

          underlineColorAndroid="transparent"
          placeholderTextColor='rgba(0, 0, 0, 0.4)'
        />

        {touched &&
          ((error && <Text style={ styles.textInputError }>{error}</Text>) ||
            (warning && <Text style={ styles.textInputWarning }>{warning}</Text>))}

      </View>
    );
}
