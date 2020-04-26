import React, { useState, useContext } from 'react';
import { View } from 'react-native';
import Environment from '../config/environment';
import Upload from './AI/upload';
import { GoogleContext } from '../context';
import onSearch from '../action';

const FavoritedScreen = ({ navigation }) => {
  const [state, setState] = useState({
    image: null,
    uploading: false,
    googleResponse: null,
    name: '',
  });

  const { dispatch } = useContext(GoogleContext);

  const submitToGoogle = async (url) => {
    try {
      setState({ uploading: true });
      const body = JSON.stringify({
        requests: [
          {
            features: [
              { type: 'LABEL_DETECTION', maxResults: 3 },
            ],
            image: {
              content: `${url}`,
            },
          },
        ],
      });
      const response = await fetch(
        `https://vision.googleapis.com/v1/images:annotate?key=${
          Environment.staging.GOOGLE_CLOUD_VISION_API_KEY}`,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body,
        },
      );
      const responseJson = await response.json();
      const result = filter(responseJson.responses[0].labelAnnotations);
      onSearch(dispatch)(result);
      setState({
        googleResponse: responseJson,
        uploading: false,
        name: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Upload state={state} setState={setState} submitToGoogle={submitToGoogle} navigation={navigation} />
    </View>
  );
};

const filter = (b) => {
  let first = b[0];
  for (let i = 1; i < b.length; i += 1) {
    if (first.score < b[i]) {
      first = b[i];
    }
  }
  return first.description;
};

export default FavoritedScreen;
