import React, { Component } from 'react';
import { generalStyles, assets } from '../../theme';
import I18n from './../../I18n';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  View,
} from 'native-base';
import { Image } from 'react-native';

export class Login extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <View style={generalStyles.ContainerCenter}>
            <Image
              resizeMethod="scale"
              resizeMode="cover"
              source={assets.images.logo}
              // style={[generalStyles.Flex1, generalStyles.WidthFull]}
            />
          </View>

          <Form>
            <Item floatingLabel>
              <Label>{I18n.t('username')}</Label>
              <Input textContentType="username" />
            </Item>
            <Item floatingLabel last style={generalStyles.FormFinalInput}>
              <Label>{I18n.t('password')}</Label>
              <Input secureTextEntry textContentType="password" />
            </Item>

            <Button block>
              <Text>{I18n.t('login')}</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default Login;
