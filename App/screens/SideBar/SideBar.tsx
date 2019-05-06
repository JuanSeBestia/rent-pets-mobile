import React from 'react';
import { Image } from 'react-native';
import {
  Text,
  Container,
  List,
  ListItem,
  Content,
  Button,
} from 'native-base';
import { NavigationScreenProps } from 'react-navigation';
import { connect } from 'react-redux';
import UserCreators, { iStateUser, iCreatorsUser } from '../../redux/user';
import { Dispatch, bindActionCreators } from 'redux';
import I18n from '../../I18n';
const routes = ['Pets', 'Profile', 'Rents'];

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

interface Props extends NavigationScreenProps, iStateUser, iCreatorsUser {
  [extraProps: string]: any;
}

class SideBar extends React.Component<Props> {
  render() {
    return (
      <Container>
        <Content>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png',
            }}
            style={{
              height: 120,
              width: '100%',
              alignSelf: 'stretch',
              position: 'absolute',
            }}
          />
          <Image
            // square
            style={{
              height: 80,
              width: 70,
              position: 'absolute',
              alignSelf: 'center',
              top: 20,
            }}
            source={{
              uri:
                'https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/logo.png',
            }}
          />
          <List
            dataArray={routes}
            contentContainerStyle={{ marginTop: 120 }}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}
                >
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
        {/* <Footer> */}
        <Button
          full
          onPress={() => {
            this.props.loggout();
            this.props.navigation.navigate('Login');
          }}
        >
          <Text>{I18n.t('loggout')}</Text>
        </Button>
        {/* </Footer> */}
      </Container>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideBar);
