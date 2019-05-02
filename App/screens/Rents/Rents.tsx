import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import I18n from '../../I18n';
import { navigatorDefaultOptions } from '../../util/navigator';
import { NavigationScreenProps } from 'react-navigation';
import { Text } from 'react-native';

interface Props extends NavigationScreenProps {}

export class Rents extends Component {
  static navigationOptions = navigatorDefaultOptions({
    title: I18n.t('rents'),
  });
  render() {
    return (
      <Container>
        <Content padder>
          <Text> {'PAGE RENTS'}</Text>
        </Content>
      </Container>
    );
  }
}

export default Rents;
