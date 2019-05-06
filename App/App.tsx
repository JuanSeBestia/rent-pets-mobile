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

// Redux
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import Loading from './screens/Loading';
import { Root } from 'native-base';

const { persistor, store } = ConfigureStore();

interface Props {}
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={<Loading title="persist" />}
          persistor={persistor}
        >
          <Root>
            <RootAppNavigations
              ref={navigatorRef => {
                navigatorRef &&
                  NavigationService.setTopLevelNavigator(navigatorRef);
              }}
            />
          </Root>
        </PersistGate>
      </Provider>
    );
  }
}
