import { createStore, combineReducers } from 'redux'
import weatherList from '../reducer/weatherList'
import weatherDetail from '../reducer/weatherDetail'

const rootReducer = combineReducers({
  weatherList,
  weatherDetail
})

let store = createStore(rootReducer)

export default store
