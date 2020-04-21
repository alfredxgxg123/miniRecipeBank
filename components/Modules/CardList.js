import React from 'react';
import {
  StyleSheet, View, ActivityIndicator, FlatList,
} from 'react-native';
import Card from './Card';

const CardList = ({ items, toggleModal }) => {
  if (items.length === 0) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <FlatList
      style={styles.container}
      data={items}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Card item={item} toggleModal={toggleModal} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#F5FCFF',
  },
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 250,
    color: '#808080',
  },
});

export default CardList;
