import * as React from 'react';

interface Props {
  onAddClick:(e:any)=>void;
}

export default class AddTodo extends React.Component<Props, any> {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e) {
    const node = this.refs['input'] as HTMLInputElement;
    const text:string = node.value.trim();
    this.props.onAddClick(text);
    node.nodeValue = '';
  }
  
  render () {
    return (
      <div>
        <input type="text" ref="input" />
        <button onClick={this.handleClick} >
        Add
        </button>
      </div>
    );
  }
}