import React, { Component } from 'react';
import {
  Container,
  Card,
  CardItem,
  Text,
  Body,
  Button,
  Content,
} from 'native-base';
import { NavigationScreenProps } from 'react-navigation';
import { assets } from '../../theme';
import { navigatorDefaultOptions } from '../../util/navigator';
import I18n from '../../I18n';

interface Props extends NavigationScreenProps {}

export class PetsScreen extends Component<Props> {

  static navigationOptions = navigatorDefaultOptions({ title: I18n.t('PETS') });

  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Chat App to talk some awesome people!</Text>
              </Body>
            </CardItem>
          </Card>
          <Button
            full
            rounded
            dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate('Chat')}
          >
            <Text>Chat With People</Text>
          </Button>
          <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate('Profile')}
          >
            <Text>Goto Profiles</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default PetsScreen;
