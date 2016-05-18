import * as filters from '../constants/filters';
import {ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER} from '../actions/todos';
import * as Immutable from 'immutable';
import { TodoModel } from '../components/TodoList/TodoList';

export var visibilityFilter = (state:Immutable.Map<string, string>=(Immutable.fromJS({'filter': filters.SHOW_ALL})), action) => {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return state.set('filter', action.filter);
    default:
      return state;
  }
};

export var todos = (state:Immutable.List<TodoModel>=(Immutable.List<TodoModel>()), action) => {
  switch(action.type) {
    case ADD_TODO:
      return state.push({text: action.text, completed: false});
    case COMPLETE_TODO:
      var toCompletedTodo = state.get(action.index);
      var restTodos = state.splice(action.index, 1);
      toCompletedTodo.completed = true;
      return restTodos.toList().insert(action.index, toCompletedTodo);
    default:
      return state;
  }
};

