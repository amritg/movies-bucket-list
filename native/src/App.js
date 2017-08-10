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
import { NativeRouter as Router, Route } from 'react-router-native'

import NowPlaying from './components/NowPlaying'
import Popular from './components/Popular'
import Upcoming from './components/Upcoming'
import NavigationBar from './components/NavigationBar'
import LeftNavigationDrawer from './components/LeftNavigationDrawer'
import MovieDetails from './components/generic/MovieDetails'

const store = createStore(RootReducer, applyMiddleware(thunkMiddleware))

setBaseUrl('https://api.themoviedb.org')

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Container>
            <NavigationBar />
            <LeftNavigationDrawer>
              <Route exact path="/" render={({ location }) => <NowPlaying location={location} />}/>
              <Route path="/upcoming" component={Upcoming}/>
              <Route path="/popular" component={Popular}/>
              <Route path="/moviedetails" render={({ location }) => <MovieDetails location={location} />}/>
            </LeftNavigationDrawer>
          </Container>
        </Router>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('native', () => App);
