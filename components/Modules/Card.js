import React from 'react';
import {
  StyleSheet, TouchableOpacity, Image, Text,
} from 'react-native';

const Card = ({ item, toggleModal }) => {
  const ulrs = item.sourceUrl ? 'https://spoonacular.com/recipeImages/'.concat(item.image) : item.image;
  return (
    <TouchableOpacity style={styles.card} onPress={() => toggleModal(item.id)}>
      <Image style={styles.cardImage} source={{ url: ulrs }} />
      <Text style={styles.cardText}>
        {' '}
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginBottom: 10,
    marginLeft: '2%',
    width: '96%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  cardText: {
    padding: 10,
    fontSize: 16,
  },
});

export default Card;
