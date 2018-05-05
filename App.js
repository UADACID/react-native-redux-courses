/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Root from './src/root'
import CombineReducers from './src/reducers'

const store = createStore(CombineReducers)


export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}
