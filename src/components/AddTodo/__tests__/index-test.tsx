jest.unmock('../index');

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-addons-test-utils';

import AddTodo from '../index';

describe('AddTodo', () => {
  it('i do not know what to do', () => {
    const app = TestUtils.renderIntoDocument(
      <AddTodo 
      onAddClick={(e) => {
        
      }}
      /> 
    ) as React.Component<any, any>;
    
    const appNode = ReactDOM.findDOMNode(app);
    
    expect(appNode.lastChild.textContent).toEqual('Add');
    
  });
});