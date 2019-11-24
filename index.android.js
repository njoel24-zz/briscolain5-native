/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';

import App from './src/App';
import matchReducer from './src/engine/reducers/match';
import { initMatch } from './src/engine/actions/match';
import matchMiddleware from './src/engine/middlewares/MatchMiddleware';

const middlewares = applyMiddleware(matchMiddleware);
const store = createStore(matchReducer, middlewares);
store.dispatch(initMatch());

const Briscola = () => (
  <Provider store={store}>
    <App />
  </Provider>
)


AppRegistry.registerComponent('Briscola', () => Briscola);
