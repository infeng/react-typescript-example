import * as React from 'react';
import { connect } from 'react-redux';
import { addTodo, completeTodo, setVisibilityFilter } from '../../actions/todos';
import AddTodo from '../../components/AddTodo';
import {TodoList, TodoModel} from '../../components/TodoList';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import * as Immutable from 'immutable';
import * as filters from '../../constants/filters';

import './style.css';

interface Props {
  visibleTodos:Immutable.List<TodoModel>;
  visibilityFilter:string;
  dispatch:any;
}

export class App extends React.Component<Props, any> {
  render() {
    return(
      <div className="container">
        <Header />
        <div className="wrapper">
          <AddTodo 
          onAddClick={text => {
            this.props.dispatch(addTodo(text));
          }}
          />
          <TodoList
          todos={this.props.visibleTodos}
          onTodoClick={index => {
            this.props.dispatch(completeTodo(index));
          }} 
          />
          <Footer
          filter={this.props.visibilityFilter}
          onFilterChange={nextFilter=> {
            this.props.dispatch(setVisibilityFilter(nextFilter));
          }} 
          />
        </div>
      </div>
    );
  }
}

export class AppState {
  visibilityFilter:Immutable.Map<string,string>;
  todos:Immutable.List<TodoModel>;
  constructor() {
    this.visibilityFilter = Immutable.Map<string,string>();
    this.visibilityFilter.set('filter', filters.SHOW_ALL);
    this.todos = Immutable.List<TodoModel>();
  }
}

function selectTodos(todos:Immutable.List<TodoModel>, filter) {
  switch (filter) {
    case filters.SHOW_ALL:
      return todos;
    case filters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed).toList()
    case filters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed).toList()
  }  
}

function mapState2Props(state:AppState) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter.get('filter')),
    visibilityFilter: state.visibilityFilter.get('filter') as string
  };
}

export var TodoApp = connect(mapState2Props)(App);

