import React, { useState } from 'react';
import {
  StyleSheet, View, Image, Text, TouchableOpacity,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const Upload = ({
  state, setState, submitToGoogle, navigation,
}) => {
  const [image, setImage] = useState({
    image: null,
    url: null,
  });

  const openImagePickerAsync = async () => {
    if (state.name) {
      setState({ name: '' });
    }
    const permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true,
    });

    if (pickerResult.cancelled) {
      return;
    }

    const base64Image = 'data:image/png;base64,'.concat(pickerResult.base64);
    setImage({ image: base64Image, url: pickerResult.base64 });
  };

  const launchCameraAsync = async () => {
    if (state.name) {
      setState({ name: '' });
    }
    const launchCamera = await ImagePicker.launchCameraAsync({
      base64: true,
    });
    if (launchCamera.cancelled) {
      return;
    }
    const base64Image = 'data:image/png;base64,'.concat(launchCamera.base64);
    setImage({ image: base64Image, url: launchCamera.base64 });
  };
  const clear = () => {
    if (state.name) {
      setState({ name: '' });
    }
    if (image.image) {
      setImage({ image: null });
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('Home')} onPressIn={() => submitToGoogle(image.url)}>
          <Text style={styles.text}>
            Search it for me plz!
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={openImagePickerAsync}>
          <Text style={styles.text}>
            Pick an image from camera roll
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={launchCameraAsync}>
          <Text style={styles.text}>
            Take a photo
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={clear}>
          <Text style={styles.text}>
            Clear
          </Text>
        </TouchableOpacity>
        {state.name ? <Text style={styles.a}>{state.name}</Text> : null}
      </View>
      <View style={styles.helpContainer}>
        {image.image ? (
          <Image
            style={styles.image}
            source={{ uri: image.image }}
          />
        ) : null }
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  mian: {
    flexDirection: 'column',
  },
  container: {
    marginTop: 30,
  },
  helpContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    borderWidth: 1,
    borderColor: 'red',
  },
  buttons: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#007aff',
    margin: 10,
  },
  text: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 26,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  a: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 26,
    fontWeight: '600',
  },
});

export default Upload;
