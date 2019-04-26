import React from 'react';
import { View, Text } from 'react-native';
import { general, assets } from '../../theme';
import { API } from './../../environment/environment';
import I18n from './../../I18n';

// @ts-ignore
import BouncingPreloader from 'react-native-bouncing-preloader';

const images: any = assets.images;
const listStickers = Object.keys(images)
  .filter(key => key.startsWith('sticker_'))
  .map(key => images[key]);

function Loading() {
  return (
    <View style={general.ContainerCenter}>
      <BouncingPreloader icons={listStickers} />
      <Text style={general.Padding}>
        {I18n.t('LOADING')} {API}
      </Text>
    </View>
  );
}

export default Loading;
