// this is a component for showing a spinner while loading anything
import React from 'react';
import {
  ActivityIndicator
} from 'react-native';

const Loading = () =>
    <ActivityIndicator size="large" color="#1E90FF" style={{ padding: 50 }} />

export default Loading
