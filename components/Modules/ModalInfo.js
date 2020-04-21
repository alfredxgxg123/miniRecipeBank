import React from 'react';
import {
  View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import HTML from 'react-native-render-html';


const ModalInfo = ({ closeModal, summary }) => {
  const htmlContent = `${summary.a.summary}`;
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TouchableOpacity style={styles.close} onPress={() => closeModal()}>
        <AntDesign name="close" size={24} />
      </TouchableOpacity>
      <View sytle={styles.view}>
        <Text style={styles.title}>
          {summary.a.title}
        </Text>
      </View>
      <View style={styles.info}>
        <HTML html={htmlContent} emSize={1.2} baseFontStyle={{ fontSize: 21 }} />
      </View>
    </KeyboardAvoidingView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  close: {
    position: 'absolute',
    top: 64,
    right: 32,
  },
  view: {
    alignSelf: 'stretch',
    marginHorizontal: 32,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    alignSelf: 'center',
    color: 'black',
    marginBottom: 20,
  },
  info: {
    marginTop: 30,
    margin: 20,
    fontWeight: '600',
  },
});

export default ModalInfo;
