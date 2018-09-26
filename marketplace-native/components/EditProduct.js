import React from 'react';
import {reduxForm, Field} from 'redux-form'
import {View, Text, Dimensions}
import { Button } from 'react-native-elements'
import SignUpField from './SignUpField';
import LongField from './LongField';
import NumberField from './NumberField';

const validate = values => {
  const errors = {}
  if (!values.amount) {
    errors.amount = "Required Field"
  }
  if (!values.price) {
    errors.price = "Required Field"
  }
  if (!values.name) {
    errors.name = "Required Field"
  }
}
const warn = values => {

  const warnings = {}

  if (!values.description) {
    warnings.description = 'This is a recommended field'
  }
  return warnings

}

const EditProduct = (props)=> {
  const { height } = Dimensions.get('window')
    return (
      <View style={{height, backgroundColor: 'white'}}>
        <Field
        name= "amount"
        placeholder = "100"
        component = {NumberField}
        />
        <Field
        name = "name"
        placeholder = "Product Name"
        component = {SignUpField}
        />
        <Field
        name = "price"
        component = {NumberField}
        />
        <Field
        name = "description"
        placeholder = "Product Description"
        component = {LongField}
        />
        <Button
        title='Submit'
        onPress={()=>props.onUpdateClick()}
        buttonStyle={{ backgroundColor: 'rgba(111, 202, 186, 1)', borderRadius: 5 }}
        />

      </View>
    );
}

export default reduxForm({
  form: 'EditProduct',
  validate,
  warn
})(EditProduct)
