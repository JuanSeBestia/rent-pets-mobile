import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import I18n from '../../I18n';
import { navigatorDefaultOptions } from '../../util/navigator';
import { NavigationScreenProps } from 'react-navigation';
import { Text } from 'react-native';
import * as Ramda from 'ramda';

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
  pet = Ramda.pathOr(undefined, ['navigation', 'state', 'params', 'pet'])(
    this.props,
  );
  render() {
    return (
      <Container>
        <Content padder>
          <Text> {'PAGE PET DETAIL ' + this.pet.name}</Text>
        </Content>
      </Container>
    );
  }
}

export default PetDetail;
