import React from 'react'
import { TextInput, View, Text} from 'react-native'
import styles from '../styles'

export default function NumberField(props){
  const { input, meta: { touched, error, warning }, ...inputProps } = props;
return (
  <View style={[styles.inputContainer]}>
    <TextInput
      {...inputProps}
      keyboardType={'numeric'}
      onChangeText={input.onChange}
      onBlur={input.onBlur}
      onFocus={input.onFocus}
      value={input.value}
      style={[styles.input]}
      autoCorrect={false}
      clearTextOnFocus={true}
      underlineColorAndroid="transparent"
      placeholderTextColor='rgba(0, 0, 0, 0.4)'
      underlineColorAndroid='black'
    />

    {touched &&
      ((error && <Text style={ styles.textInputError }>{error}</Text>) ||
        (warning && <Text style={ styles.textInputWarning }>{warning}</Text>))}

  </View>
);
}
