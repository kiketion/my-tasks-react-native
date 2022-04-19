import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Task = (props) => {
  return (
    <View>
      <Text>{props.text}</Text>
    </View>
  );
};

const Styles = StyleSheet.create({});

export default Task;
