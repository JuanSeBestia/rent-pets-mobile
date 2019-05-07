import React from 'react';
import {
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator,
  createStackNavigator,
} from 'react-navigation';
import PetsScreen from './PetsScreen';
import SideBar from './SideBar/SideBar';
import Login from './Login';
import PetDetail from './PetDetail/PetDetail';
import Rents from './Rents/Rents';
import Profile from './Profile/Profile';
import { DEFAULT_STACK_SCREEN } from '../environment/environment';

// Navigator
const PetsStackNavigator = createStackNavigator({
  PetsScreen: { screen: PetsScreen },
  PetScreenDetail: { screen: PetDetail },
});

const AppLoggedNavigator = createDrawerNavigator(
  {
    Pets: { screen: PetsStackNavigator },
    Rents: { screen: createStackNavigator({ RentsScreen: { screen: Rents } }) },
    Profile: {
      screen: createStackNavigator({ ProfileScreen: { screen: Profile } }),
    },
  },
  {
    contentComponent: props => <SideBar {...props} />,
    initialRouteName: DEFAULT_STACK_SCREEN,
  },
);

const MainNavigator = createSwitchNavigator({
  Login: { screen: Login },
  LoggedApp: { screen: AppLoggedNavigator },
});

const RootAppNavigations = createAppContainer(MainNavigator);

export default RootAppNavigations;
