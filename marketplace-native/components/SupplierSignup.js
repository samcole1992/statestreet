import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { View, ScrollView, Text, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native';
import { Card } from 'react-native-elements';
import { Link } from './Link'

import SignUpField from './SignUpField';

import styles from '../styles.js';
//This needs to be added to once auth/user is properly in place
const validate = values => {
  const errors = {}
  if ( !values.email || (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))) {
  // if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = `Invalid Email`
  }

  return errors
}

const SupplierSignup = ({ onSignInClick, onContinueClick, authenticating}) => {
  const { height } = Dimensions.get('window')
  let continueLink

  if (authenticating) {
    continueLink = (
      <View style={{padding: 15}}>
        <ActivityIndicator size="small" color="#007AFF"/>
      </View>
    )
  }
  else {
    continueLink =  (
      <TouchableOpacity onPress={() => onContinueClick()}>
        <Text style={styles.signupLink}>Sign up as Supplier</Text>
      </TouchableOpacity>
    )
  }

  return(
    // position: absolute, top: 0, bottom: 0, left: 0, right: 0, backgroundColor: 'white',
    <View style={{height, backgroundColor: 'white'}}>
      <View>
        <Text style={ styles.signUpHeader }>Signup as Supplier</Text>
      </View>
      <View>
        <Field
          name={'email'}
          component={SignUpField}
          placeholder={'email@example.com'}
        />
      </View>
      {continueLink}

      <Text/>
      <View style={styles.horizontalRule}/>
      <TouchableOpacity onPress={onSignInClick}>
        <Text style={styles.signInLink}>
          Signin as Supplier
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default reduxForm({
  form: 'SupplierSignup',
  validate })(SupplierSignup);
