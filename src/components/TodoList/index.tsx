import * as React from 'react';
import Todo from '../Todo';
import * as Immutable from 'immutable';

import './style.css';

export interface TodoModel {
  text:string;
  completed:boolean;
}

interface Props {
  onTodoClick:(index:number)=>void;
  todos:Immutable.List<TodoModel>
}

export class TodoList extends React.Component<Props, any> {
  render() {
    var todosNode:any = this.props.todos.map((todo, index) => {
      return (
        <Todo
        key={index}
        onClick={()=> this.props.onTodoClick(index)}
        text={todo.text}
        completed={todo.completed} 
        isLast={index === (this.props.todos.size - 1) ? true : false}
        />        
      );
    });
    if(this.props.todos.size === 0) {
      todosNode = <p className="todo no-todo-list">Nothing</p>;
    }
    return (
      <ul id="todo-list">
        {todosNode}
      </ul>
    );
  }
}
