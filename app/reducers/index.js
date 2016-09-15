import { combineReducers } from 'redux';
import count from './count';
import { routerReducer } from 'react-router-redux'

const reducer = combineReducers({
  count,
  routing: routerReducer
})


export default reducer;
