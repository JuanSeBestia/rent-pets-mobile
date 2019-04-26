import React, { Component } from 'react';
import { Button } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

interface Props extends NavigationScreenProps {}

export class Profile extends Component<Props> {
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Pets"
        onPress={() => navigate('Pets')}
      />
    );
  }
}

export default Profile;
