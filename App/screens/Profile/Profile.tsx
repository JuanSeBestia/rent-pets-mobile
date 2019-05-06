import React from 'react';
import { Alert } from 'react-native';

import {
  Text,
  Container,
  Content,
  Button,
  Form,
  Item,
  Label,
  Input,
  Spinner,
  Toast,
} from 'native-base';

import { NavigationScreenProps } from 'react-navigation';
import { navigatorDefaultOptions } from '../../util/navigator';
import I18n from '../../I18n';
import UserCreators, { iCreatorsUser, iStateUser } from '../../redux/user';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import { generalStyles } from '../../theme';
import ErrorMessageText from '../../UI/ErrorMessageText';
import { UserData } from '../../util/models/user';

const ProfileSchema = Yup.object().shape({
  oldPassword: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!'),
  newPassword: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!'),
  confirmPassword: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!'),
  email: Yup.string().email('emailWrong'),
  phone: Yup.string(),
  address: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!'),
});

interface iPropsState extends iStateUser {}
const mapStateToProps = (state: { user: iStateUser }): iPropsState => {
  return {
    ...state.user,
  };
};

interface iPropsDispatch extends iCreatorsUser {}
const mapDispatchToProps = (dispatch: Dispatch): iPropsDispatch => ({
  // @ts-ignore
  ...bindActionCreators(UserCreators, dispatch),
});

interface Props extends NavigationScreenProps, iStateUser, iCreatorsUser {}

class Profile extends React.Component<Props, { loading: boolean }> {
  state = { loading: false };
  static navigationOptions = navigatorDefaultOptions({
    title: I18n.t('profile'),
  });

  render() {
    const userData = this.props.userData || new UserData();
    return (
      <Container>
        <Content padder>
          <Formik
            initialValues={{
              ...userData,
              oldPassword: '',
              newPassword: '',
              confirmPassword: '',
            }}
            validationSchema={ProfileSchema}
            onSubmit={(values, actions) => {
              console.log({ values, actions });
              actions.setSubmitting(false);
              this.props.userSuccess(
                new UserData(
                  values.email,
                  values.address,
                  values.phone,
                  values.avatar,
                  values.username,
                ),
              );
              this.setState({ loading: true });
              setTimeout(() => {
                this.setState({ loading: false });
                Toast.show({
                  text: I18n.t('profileUpdated'),
                  buttonText: "X",
                  type: "success"
                })
                this.props.navigation.navigate('Pets');
              }, 5000);
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
                    disabled
                  />
                </Item>

                <Item floatingLabel error={!!formikBag.errors.email}>
                  <Label>{I18n.t('email')}</Label>
                  <Input
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    onChangeText={formikBag.handleChange('email')}
                    onBlur={formikBag.handleBlur('email')}
                    returnKeyType="next" // View ok, funcionality Not work
                    value={formikBag.values.email}
                  />
                </Item>

                <Item floatingLabel error={!!formikBag.errors.address}>
                  <Label>{I18n.t('address')}</Label>
                  <Input
                    textContentType="addressCity"
                    onChangeText={formikBag.handleChange('address')}
                    onBlur={formikBag.handleBlur('address')}
                    returnKeyType="next" // View ok, funcionality Not work
                    value={formikBag.values.address}
                  />
                </Item>

                <Item floatingLabel error={!!formikBag.errors.phone}>
                  <Label>{I18n.t('phone')}</Label>
                  <Input
                    textContentType="telephoneNumber"
                    onChangeText={formikBag.handleChange('phone')}
                    onBlur={formikBag.handleBlur('phone')}
                    returnKeyType="next" // View ok, funcionality Not work
                    keyboardType="phone-pad"
                    value={formikBag.values.phone}
                  />
                </Item>

                <Item
                  floatingLabel
                  last
                  style={generalStyles.FormFinalInput}
                  error={!!formikBag.errors.oldPassword}
                >
                  <Label>{I18n.t('oldPassword')}</Label>
                  <Input
                    secureTextEntry
                    textContentType="password"
                    onChangeText={formikBag.handleChange('oldPassword')}
                    onBlur={formikBag.handleBlur('oldPassword')}
                    value={formikBag.values.oldPassword}
                  />
                </Item>
                <Item
                  floatingLabel
                  last
                  style={generalStyles.FormFinalInput}
                  error={!!formikBag.errors.newPassword}
                >
                  <Label>{I18n.t('newPassword')}</Label>
                  <Input
                    secureTextEntry
                    textContentType="password"
                    onChangeText={formikBag.handleChange('newPassword')}
                    onBlur={formikBag.handleBlur('newPassword')}
                    value={formikBag.values.newPassword}
                  />
                </Item>

                <Item
                  floatingLabel
                  last
                  style={generalStyles.FormFinalInput}
                  error={!!formikBag.errors.confirmPassword}
                >
                  <Label>{I18n.t('confirmPassword')}</Label>
                  <Input
                    secureTextEntry
                    textContentType="password"
                    onChangeText={formikBag.handleChange('confirmPassword')}
                    onBlur={formikBag.handleBlur('confirmPassword')}
                    value={formikBag.values.confirmPassword}
                  />
                </Item>

                <ErrorMessage
                  name="address"
                  render={errorMsg => <ErrorMessageText error={errorMsg} />}
                />

                <ErrorMessage
                  name="phone"
                  render={errorMsg => <ErrorMessageText error={errorMsg} />}
                />

                <ErrorMessage
                  name="oldPassword"
                  render={errorMsg => <ErrorMessageText error={errorMsg} />}
                />

                <ErrorMessage
                  name="newPassword"
                  render={errorMsg => <ErrorMessageText error={errorMsg} />}
                />

                <ErrorMessage
                  name="confirmPassword"
                  render={errorMsg => <ErrorMessageText error={errorMsg} />}
                />
                {!this.state.loading ? (
                  <Button
                    block
                    onPress={formikBag.handleSubmit}
                    disabled={!formikBag.isValid}
                  >
                    <Text>{I18n.t('update')}</Text>
                  </Button>
                ) : (
                  <Button disabled block>
                    <Spinner />
                  </Button>
                )}
              </Form>
            )}
          />
        </Content>
      </Container>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
