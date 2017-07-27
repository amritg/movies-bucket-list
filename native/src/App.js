import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

import { 
  Container,
  Header,
  Content,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon
} from 'native-base'

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'

import { fetchNowPlaying, setBaseUrl } from '@amrit.gautam/reducers/lib/actions/actions'
import { MoviesReducer } from '@amrit.gautam/reducers/lib/reducers/MoviesReducer'
import Root from './Root'

const store = createStore(MoviesReducer, applyMiddleware(thunkMiddleware))

setBaseUrl('https://api.themoviedb.org')

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <Header style={{backgroundColor: '#00BCD4'}} iosBarStyle={'light-content'}>
            <Left style={{flex: 1}}>
              <Button
                transparent
              >
                <Icon name={'menu'} ios={'ios-menu'} android={'md-menu'} style={{color: 'white'}}></Icon>
              </Button>
            </Left>
            <Body style={{flex: 2}}>
              <Title style={{color: 'white'}}>Movies Bucket List</Title>
            </Body>
            <Right style={{flex: 1}}>
              <Button transparent>
                <Icon name='search' style={{color: 'white'}}></Icon>
              </Button>
            </Right>
          </Header>
          <Root />
        </Container>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('native', () => App);
