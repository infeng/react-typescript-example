import * as React from 'react';
import Todo from '../Todo/Todo';
import * as Immutable from 'immutable';

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
    var todosNode = this.props.todos.map((todo, index) => {
      return (
        <Todo
        key={index}
        onClick={()=> this.props.onTodoClick(index)}
        text={todo.text}
        completed={todo.completed} 
        />        
      );
    });
    return (
      <ul>
        {todosNode}
      </ul>
    );
  }
}
