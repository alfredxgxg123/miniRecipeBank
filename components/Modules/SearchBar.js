import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';

const Search = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const onChange = (textValue) => setSearch(textValue);

  return (
    <SearchBar
      lightTheme
      leftIconContainerStyle
      cancelButtonTitle="Cancel"
      containerStyle={{
        backgroundColor: '#41B3A3',
      }}
      platform="ios"
      icon={{ type: 'font-awesome', name: 'search' }}
      cancelIcon={{ type: 'font-awesome', name: 'cancelIcon' }}
      placeholder="Type Here..."
      onChangeText={onChange}
      value={search}
      onSubmitEditing={() => onSubmit(search)}
    />
  );
};

export default Search;
