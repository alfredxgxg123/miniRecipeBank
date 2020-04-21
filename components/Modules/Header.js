import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Search from './SearchBar';

const Headers = ({ title, onSubmit }) => (
  <View style={styles.header}>
    <Text style={styles.text}>{title}</Text>
    <Search onSubmit={onSubmit} />
  </View>
);

const styles = StyleSheet.create({
  header: {
    height: 150,
    padding: 15,
    backgroundColor: '#41B3A3',
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default Headers;
