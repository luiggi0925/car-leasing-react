import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App.js';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

//import { todoApp } from './reducers/index.js'
import { combineReducers } from 'redux'
import todos from './reducers/todos.js'
import visibilityFilter from './reducers/visibilityFilter.js'

const todoApp = combineReducers({
    todos,
    visibilityFilter
  });

let store = createStore ( todoApp );

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
