import React from 'react';
import {
  NavigationScreenProps,
  NavigationAction,
  NavigationContainerComponent,
} from 'react-navigation';
import { Header, Left, Button, Icon, Body, Title, Right } from 'native-base';

export const navigatorDefaultOptions = (repalceOptions = {}) => (
  props: NavigationScreenProps,
) => {
  console.log('navigatorDefaultOptions', { props });

  const options = { ...props.navigationOptions, ...repalceOptions };
  // @ts-ignore
  const isFirst = props.navigation.isFirstRouteInParent();
  options.header = (
    <Header transparent={!!options.transparent}>
      <Left>
        {!isFirst && (
          <Button transparent onPress={() => props.navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        )}
        {isFirst && (
          <Button transparent onPress={() => props.navigation.toggleDrawer()}>
            <Icon name="menu" />
          </Button>
        )}
      </Left>
      <Body>
        <Title>{options.title}</Title>
      </Body>
      <Right />
    </Header>
  );
  return options;
};

export class NavigationService {
  private static _navigator: NavigationContainerComponent;
  static setTopLevelNavigator(navigatorRef: NavigationContainerComponent) {
    this._navigator = navigatorRef;
  }
  static get navigation() {
    return this._navigator;
  }
  static dispatch = (action: NavigationAction) =>
    NavigationService.navigation.dispatch(action);
}
