import React, { useState, useEffect } from 'react';
import { View, Modal } from 'react-native';
import axios from 'axios';
import Headers from './Modules/Header';
import CardList from './Modules/CardList';
import key from '../config';
import ModalInfo from './Modules/ModalInfo';
import a from './dumm';

const HomeScreen = () => {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(
    { openModel: false },
  );
  const [summary, setSummary] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5001/homes')
      .then((response) => {
        setItems((prevItems) => [...response.data, ...prevItems]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onSubmit = (text) => {
    axios({
      method: 'GET',
      url: 'https://webknox-recipes.p.rapidapi.com/recipes/search',
      headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host': 'webknox-recipes.p.rapidapi.com',
        'x-rapidapi-key': `${key}`,
      },
      params: {
        type: 'main course',
        offset: '0',
        number: '5',
        query: `${text}`,
      },
    })
      .then((response) => {
        setItems((prevItems) => [...response.data.results]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const toggleModal = (id) => {
    if (id) {
      // const url = `https://webknox-recipes.p.rapidapi.com/recipes/${id}/summary`;
      // axios({
      //   method: 'GET',
      //   url,
      //   headers: {
      //     'content-type': 'application/octet-stream',
      //     'x-rapidapi-host': 'webknox-recipes.p.rapidapi.com',
      //     'x-rapidapi-key': `${key}`,
      //   },
      // })
      //   .then((response) => {
      //     const a = response.data;
      //     setSummary({ a });
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
      setSummary({ a });
    }
    setOpen({ openModel: !open.openModel });
  };

  return (
    <View>
      <Modal animationType="slide" visible={open.openModel} onRequestClose={() => toggleModal()}>
        <ModalInfo closeModal={toggleModal} summary={summary} />
      </Modal>
      <Headers title="Recipe bank" onSubmit={onSubmit} />
      <CardList items={items} toggleModal={toggleModal} />
    </View>
  );
};

export default HomeScreen;
