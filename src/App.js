import React, { Component } from 'react';
import Redux, { createStore } from 'redux'
import logo from './logo.svg';
import './App.css';

const initialState = {
  todos: []
}

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
