import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

import { 
  Container
} from 'native-base'

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'

import { setBaseUrl } from '@amrit.gautam/reducers/src/actions/actions'
import { RootReducer } from '@amrit.gautam/reducers/src/reducers/RootReducer'

import NowPlaying from './components/NowPlaying'
import NavigationBar from './components/NavigationBar'
import LeftNavigationDrawer from './components/LeftNavigationDrawer'

const store = createStore(RootReducer, applyMiddleware(thunkMiddleware))

setBaseUrl('https://api.themoviedb.org')

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <NavigationBar />
          <LeftNavigationDrawer >
            <NowPlaying />
          </LeftNavigationDrawer>
        </Container>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('native', () => App);
