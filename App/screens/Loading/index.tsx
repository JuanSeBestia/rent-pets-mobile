import React from 'react';
import { View, Text } from 'react-native';
import { general } from '../../theme';
import { API } from './../../environment/environment';

function Loading() {
  return (
    <View style={general.ContainerCenter}>
      <Text> Loading Page {API}</Text>
    </View>
  );
}

export default Loading;
