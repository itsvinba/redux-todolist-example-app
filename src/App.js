import React, { Component } from 'react';
import Redux, { createStore } from 'redux';

import todoApp from './reducers/todos';
import { addTodo } from './actions';

import logo from './logo.svg';
import './App.css';

const initialState = {
  todos: []
}

const store = createStore(todoApp)

// --- Testing store with reducer & action ---
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))

unsubscribe()
// --------------------------------------------

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Redux Example Todo App</h1>
        </header>
        <p className="App-intro">
          <AddTodo />
          <TodoList />
        </p>
      </div>
    );
  }
}

class AddTodo extends Component {
  render() {
    return (
      <div>
        <button onClick = {() => {
          
        }}>
          Add Todo
        </button>
      </div>
    )
  }
}

class TodoList extends Component {
  render() {
    return (
      <ul>
        <li>test item</li>
      </ul>
    )
  }
}

export default App;
