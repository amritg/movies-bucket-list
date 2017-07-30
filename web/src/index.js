import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { MuiThemeProvider } from 'material-ui/styles'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { Container } from 'react-grid-system'

import Main from './components/Main'
import LeftNavigationDrawer from './components/generic/LeftNavigationDrawer'
import NowPlaying from './components/NowPlaying'
import MyBucketlist from './components/MyBucketlist'
import TopNavigationBar from './components/generic/TopNavigationBar'
import Upcoming from './components/Upcoming'
import Popular from './components/Popular'
import SearchBar from './components/generic/SearchBar'
import MovieDetails from './components/MovieDetails'

import { RootReducer } from '@amrit.gautam/reducers/lib/reducers/RootReducer'

injectTapEventPlugin()

const store = createStore(RootReducer, applyMiddleware(thunkMiddleware))

const MainContainer = () => {
  return (
    <Provider store={store}>
      <Router historty={browserHistory}>
        <div>
          <TopNavigationBar />
          <LeftNavigationDrawer />
          <Container>
            <SearchBar />             
            <div>
              <Route exact path='/' component={Main}/>
              <Route path='/nowplaying' component={NowPlaying}/>
              <Route path='/mybucketlist' component={MyBucketlist}/>
              <Route path='/upcoming' component={Upcoming}/>
              <Route path='/popular' component={Popular}/>
              <Route path='/moviedetails/:id' component={MovieDetails}/>
            </div>
          </Container>
        </div>
      </Router>
    </Provider>
  )
}

const App = () => {
  return (
    <MuiThemeProvider>
      <MainContainer />
    </MuiThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
