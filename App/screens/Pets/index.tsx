import React, { Component } from 'react';
import { Button } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

interface Props extends NavigationScreenProps {}

export class Pets extends Component<Props> {
  static navigationOptions = {
    title: 'Pets',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() => navigate('Profile', { name: 'Jane' })}
      />
    );
  }
}

export default Pets;
