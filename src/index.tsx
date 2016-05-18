import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import { TodoApp, App } from './containers/App';
import reducer from './reducers';
import configure from './store';
import * as Immutable from 'immutable';
import { TodoModel } from './components/TodoList/TodoList';

const store = configure();

class Test extends React.Component<any, any> {
    render() {
        return (
            <div>
             Hello World
            </div>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>
    ,
    document.getElementById('root')
);
