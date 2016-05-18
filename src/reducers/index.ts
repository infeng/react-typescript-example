import { combineReducers } from 'redux';
import {visibilityFilter, todos} from './todos';

export default combineReducers({
  visibilityFilter,
  todos
});