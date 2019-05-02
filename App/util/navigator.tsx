import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { Header, Left, Button, Icon, Body, Title, Right } from 'native-base';

export const navigatorDefaultOptions = (repalceOptions = {}) => (
  props: NavigationScreenProps,
) => {
  const options = { ...props.navigationOptions, ...repalceOptions };
  options.header = (
    <Header>
      <Left>
        <Button transparent onPress={() => props.navigation.toggleDrawer()}>
          <Icon name="menu" />
        </Button>
        {/* <Button transparent onPress={() => props.navigation.goBack()}>
          <Icon name="arrow-back" />
        </Button> */}
      </Left>
      <Body>
        <Title>{options.title}</Title>
      </Body>
      <Right />
    </Header>
  );
  return options;
};
