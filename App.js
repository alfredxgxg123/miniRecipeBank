import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';
import Navbar from './components/Navigation';

export const Context = React.createContext('deafult value');

const App = () => {
  useEffect(() => {
    Permissions.askAsync(Permissions.CAMERA_ROLL);
    Permissions.askAsync(Permissions.CAMERA);
  }, []);
  return (
    <View style={styles.container}>
      <Navbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
