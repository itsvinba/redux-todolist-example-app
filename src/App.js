// Vendor Dependencies
  import React, { Component } from 'react';
  import { createStore } from 'redux';
  import { Provider } from 'react-redux'

// Custome Dependencies
  import AddTodo from './components/AddTodo'
  import TodoList from './components/TodoList'
  import todoApp from './reducers/todos';
  import { addTodo } from './actions';
  import logo from './logo.svg';
  import './App.css';

const store = createStore(
  todoApp, 
  /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(store.getState())

// --- Testing store with reducer & action ---
  // const unsubscribe = store.subscribe(() =>
  //   console.log(store.getState())
  // )

  // store.dispatch(addTodo('Learn about actions'))
  // store.dispatch(addTodo('Learn about reducers'))
  // store.dispatch(addTodo('Learn about store'))

  // unsubscribe()
// --------------------------------------------

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppHeader />
          <br/><br/>
          <AddTodo />
          <TodoList />
        </div>
      </Provider>
    );
  }
}


// 
//  Components
//  
class AppHeader extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">React Redux Example Todo App</h1>
      </header>
    )
  }
}

export default App;
