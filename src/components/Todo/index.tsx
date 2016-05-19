import * as React from 'react';

interface Props {
  onClick:(e:any)=>void;
  text:string;
  completed:boolean
}

export default class Todo extends React.Component<Props, any> {
  render() {
    return (
      <li 
      onClick={this.props.onClick}
      style={{
        textDecoration: this.props.completed ? 'line-through': 'none',
        cursor: this.props.completed ? 'default' : 'pointer'
      }}
      >
        {this.props.text}
      </li>
    );
  }
}
