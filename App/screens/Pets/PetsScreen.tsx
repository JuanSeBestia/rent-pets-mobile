import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { NavigationScreenProps } from 'react-navigation';
import { navigatorDefaultOptions } from '../../util/navigator';
import I18n from '../../I18n';
import ListPets from './ListPets';

interface Props extends NavigationScreenProps {}

export class PetsScreen extends Component<Props> {
  static navigationOptions = navigatorDefaultOptions({ title: I18n.t('PETS') });

  render() {
    return (
      <Container>
        <Content padder>
          <ListPets />
        </Content>
      </Container>
    );
  }
}

export default PetsScreen;
