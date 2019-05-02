import React from 'react';
import {
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator,
  createStackNavigator,
} from 'react-navigation';
import Profile from './Profile';
import PetsScreen from './Pets/PetsScreen';
import Loading from './Loading';
import SideBar from './SideBar/SideBar';
import Login from './Login';
const PetsStackNavigator = createStackNavigator({
  Pets: { screen: PetsScreen },
});

const AppLoggedNavigator = createDrawerNavigator(
  {
    Pets: { screen: PetsStackNavigator },
    Orders: { screen: Loading },
    Profile: { screen: Profile },
  },
  {
    contentComponent: props => <SideBar {...props} />,
  },
);

const MainNavigator = createSwitchNavigator({
  Login: { screen: Login },
  LoggedApp: { screen: AppLoggedNavigator },
});

const RootAppNavigations = createAppContainer(MainNavigator);

export default RootAppNavigations;
