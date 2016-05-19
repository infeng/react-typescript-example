import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import { TodoApp } from './containers/App';
import reducer from './reducers';
import configure from './store';
import * as Immutable from 'immutable';

const store = configure();

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>
    ,
    document.getElementById('root')
);
