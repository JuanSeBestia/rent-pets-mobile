// import { Platform } from 'react-native';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { pets } from './pets/Reducers';

import rootSaga from './RootSagas';

// Use with Chrome extension
import { composeWithDevTools } from 'redux-devtools-extension';
// import devTools from 'remote-redux-devtools';

import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

const configPersistStore = {
  key: 'root',
  storage,
  debug: true,
  // blacklist: ['pets']
};

const sagaMiddleware = createSagaMiddleware();

export const ConfigureStore = () => {
  const enhancer = compose(
    composeWithDevTools(applyMiddleware(sagaMiddleware, thunk, logger)),
    // devTools({
    //     name: Platform.OS,
    //     hostname: '192.168.0.229',
    //     port: 5678
    // })
  );

  const store = createStore(
    persistCombineReducers(configPersistStore, {
      pets,
    }),
    enhancer,
  );
  sagaMiddleware.run(rootSaga);

  const persistor = persistStore(store);

  return { persistor, store };
};
