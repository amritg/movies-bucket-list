import { combineReducers } from 'redux'
import { nowPlaying } from './nowPlaying'
import { upcoming } from './upcoming'
import { popular } from './popular'
import { search } from './search'

const rootReducer = combineReducers({
  nowPlaying,
  upcoming,
  popular,
  search
})

export default rootReducer
