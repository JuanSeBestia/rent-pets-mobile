/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { Component } from 'react';
import RootAppNavigations from './screens';
import { NavigationService } from './util/navigator';

interface Props {}
export default class App extends Component<Props> {
  render() {
    return (
      <RootAppNavigations
        ref={navigatorRef => {
          navigatorRef && NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}
