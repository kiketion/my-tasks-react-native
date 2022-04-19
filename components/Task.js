import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Task = (props) => {
  return (
    <View style={Styles.item}>
      <View style={Styles.itemLeft}>
        <View style={Styles.square}></View>
        <Text style={Styles.itemText}>{props.text}</Text>
      </View>
      <View style={Styles.circular}></View>
    </View>
  );
};

const Styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#545B62',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#545B62',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;
