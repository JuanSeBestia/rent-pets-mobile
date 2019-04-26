import { createStackNavigator, createAppContainer } from 'react-navigation';
import Pets from './Pets';
import Profile from './Profile';

const MainNavigator = createStackNavigator(
  {
    Pets: { screen: Pets },
    Profile: { screen: Profile },
  },
  {
    initialRouteName: 'Pets',
  },
);

const RootAppNavigations = createAppContainer(MainNavigator);

export default RootAppNavigations;
