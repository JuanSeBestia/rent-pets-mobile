import React, { Component } from 'react';
import { Container, Content, Text, Thumbnail, View, H2 } from 'native-base';
import I18n from '../../I18n';
import { navigatorDefaultOptions } from '../../util/navigator';
import { NavigationScreenProps } from 'react-navigation';
import * as Ramda from 'ramda';
import { iPet } from '../../util/models/pets';
import { Image } from 'react-native';
import { generalStyles } from '../../theme';

interface Props extends NavigationScreenProps {}

export class PetDetail extends Component {
  static navigationOptions = (props: NavigationScreenProps) => {
    const options = {
      ...navigatorDefaultOptions({
        title: Ramda.pathOr(I18n.t('PET DETAIL'), [
          'navigation',
          'state',
          'params',
          'pet',
          'name',
        ])(props),
      })(props),
    };
    return options;
  };
  pet: iPet = Ramda.pathOr(undefined, ['navigation', 'state', 'params', 'pet'])(
    this.props,
  );
  render() {
    return (
      <Container>
        <Content padder>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
            }}
          >
            <Image
              resizeMode="cover"
              source={{ uri: this.pet.image }}
              style={generalStyles.Flex1}
            />
          </View>

          <H2> {'\n' + I18n.t('description')} </H2>
          <Text> {this.pet.description}</Text>
          <H2> {I18n.t('like')} </H2>
          <Text> {this.pet.like}</Text>
          <H2> {I18n.t('dontlike')} </H2>
          <Text> {this.pet.dontlike}</Text>
        </Content>
      </Container>
    );
  }
}

export default PetDetail;
