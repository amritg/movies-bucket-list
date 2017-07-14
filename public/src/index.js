import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { MuiThemeProvider } from 'material-ui/styles'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'

import LeftNavigationDrawer from './components/LeftNavigationDrawer'
import NowPlaying from './components/NowPlaying'
import MyBucketlist from './components/MyBucketlist'
import TopNavigationBar from './components/TopNavigationBar'
import Upcoming from './components/Upcoming'
import Popular from './components/Popular'

import { fetchNowPlaying, setCardWidth, fetchUpcoming, fetchPopular } from './actions/actions'
import rootReducer from './reducers/rootReducer'

injectTapEventPlugin()

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

store.dispatch(fetchNowPlaying())
store.dispatch(fetchUpcoming())
store.dispatch(fetchPopular())

const mq1 = window.matchMedia('(max-width: 600px)')
const mq2 = window.matchMedia('(min-width: 600px)')
const mq3 = window.matchMedia('(min-width: 1250px)')
const mq4 = window.matchMedia('(min-width: 1500px)')

const listener = () => {
  if (mq1.matches) store.dispatch(setCardWidth('mobile'))
  if (mq2.matches) store.dispatch(setCardWidth('tablet'))
  if (mq3.matches) store.dispatch(setCardWidth('desktop'))
  if (mq4.matches) store.dispatch(setCardWidth('wide'))

}

mq1.addListener(listener)
mq2.addListener(listener)
mq3.addListener(listener)
mq4.addListener(listener)

class MainContainer  extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openLeftNavigationDrawer: true
    }
  }

  toggleLeftNavigationDrawer() {
    this.setState({
      openLeftNavigationDrawer: !this.state.openLeftNavigationDrawer
    })
  }

  render() {
    const contentStyle = {  transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)' }
    if (this.state.openLeftNavigationDrawer){
      contentStyle.marginLeft = 280
    }

    return (
      <Provider store={store}>
        <Router>
          <div>
            <TopNavigationBar 
              toggleLeftNavigationDrawer={this.toggleLeftNavigationDrawer.bind(this)}
            />
            <LeftNavigationDrawer open={this.state.openLeftNavigationDrawer} />
            <div style={contentStyle}>
              <Route exact path='/' component={NowPlaying}/>
              <Route exact path='/mybucketlist' component={MyBucketlist}/>
              <Route exact path='/upcoming' component={Upcoming}/>
              <Route exact path='/popular' component={Popular}/>
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}

const App = () => {
  return (
    <MuiThemeProvider>
      <MainContainer />
    </MuiThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
