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
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Image } from 'react-native';
import ErrorMessageText from '../../UI/ErrorMessageText';
import { NavigationScreenProps, NavigationActions } from 'react-navigation';

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
});

interface Props extends NavigationScreenProps {}
export class Login extends Component<Props> {
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

          <Formik
            initialValues={{ username: '', password: '' }}
            validationSchema={SignupSchema}
            onSubmit={(values, actions) => {
              console.log({ values, actions });
              actions.setSubmitting(false);
              this.props.navigation.dispatch(
                NavigationActions.navigate({ routeName: 'PetsScreen' }),
              );
            }}
            render={formikBag => (
              <Form>
                <Item floatingLabel error={!!formikBag.errors.username}>
                  <Label>{I18n.t('username')}</Label>
                  <Input
                    textContentType="username"
                    onChangeText={formikBag.handleChange('username')}
                    onBlur={formikBag.handleBlur('username')}
                    returnKeyType="next" // View ok, funcionality Not work
                    value={formikBag.values.username}
                  />
                </Item>

                <Item
                  floatingLabel
                  last
                  style={generalStyles.FormFinalInput}
                  error={!!formikBag.errors.password}
                >
                  <Label>{I18n.t('password')}</Label>
                  <Input
                    secureTextEntry
                    textContentType="password"
                    onChangeText={formikBag.handleChange('password')}
                    onBlur={formikBag.handleBlur('password')}
                    value={formikBag.values.password}
                  />
                </Item>

                <ErrorMessage
                  name="username"
                  render={errorMsg => <ErrorMessageText error={errorMsg} />}
                />

                <ErrorMessage
                  name="password"
                  render={errorMsg => <ErrorMessageText error={errorMsg} />}
                />
                <Button
                  block
                  onPress={formikBag.handleSubmit}
                  disabled={!formikBag.isValid}
                >
                  <Text>{I18n.t('login')}</Text>
                </Button>
              </Form>
            )}
          />
        </Content>
      </Container>
    );
  }
}

export default Login;
