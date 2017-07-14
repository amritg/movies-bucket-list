import { combineReducers } from 'redux'
import { nowPlaying } from './nowPlaying'
import { upcoming } from './upcoming'
import { popular } from './popular'

const rootReducer = combineReducers({
  nowPlaying,
  upcoming,
  popular
})

export default rootReducer