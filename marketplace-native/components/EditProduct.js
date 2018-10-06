import React from 'react';
import {reduxForm, Field} from 'redux-form'
import {View, Text, Dimensions} from 'react-native'
import { Button } from 'react-native-elements'
import TextField from './TextField';
import LongField from './LongField';
import NumberField from './NumberField';
import {connect} from 'react-redux';

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
  return errors;
}
const warn = values => {

  const warnings = {}

  if (!values.description) {
    warnings.description = 'This is a recommended field'
  }
  return warnings

}
const { height } = Dimensions.get('window')

const EditProduct = (props)=> {

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
        component = {TextField}
        />
        <Field
        name = "price"
        component = {NumberField}
        placeholder = "$100"

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
const mapStateToProps = (state) => {
	//selector allows you to grab current field values from within the form, kind of like a dom selector

  return {

    initialValues: {
			description: state.products.currentProduct.attributes.description,
			price: state.products.currentProduct.attributes.price,
			amount: state.products.currentProduct.attributes.amount,
      name: state.products.currentProduct.attributes.name,

		},
  }
}
EditProduct= reduxForm({
  form: 'EditProduct',
  validate,
  warn
})(EditProduct)

export default connect(mapStateToProps)(EditProduct)
