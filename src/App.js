// Vendor Dependencies
  import React, { Component } from 'react';
  import { createStore } from 'redux';
  import { Provider } from 'react-redux'

// Custome Dependencies
  import AddTodo from './components/AddTodo'
  import todoApp from './reducers/todos';
  import { addTodo } from './actions';
  import logo from './logo.svg';
  import './App.css';

const store = createStore(todoApp)

// --- Testing store with reducer & action ---
  const unsubscribe = store.subscribe(() =>
    console.log(store.getState())
  )

  // store.dispatch(addTodo('Learn about actions'))
  // store.dispatch(addTodo('Learn about reducers'))
  // store.dispatch(addTodo('Learn about store'))

  unsubscribe()
// --------------------------------------------

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppHeader />
          <AddTodo />
          <TodoList todos={store.getState()}/>
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


// class AddTodo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: '',
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }
//   handleSubmit(event) {
//     store.dispatch(addTodo(this.state.value));
//     this.setState({value: ''});
//     console.log(store.getState())
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <input type="text" value={this.state.value} onChange={this.handleChange}/>
//           <button type='submit'>
//             Add Todo
//           </button>
//         </form>
//       </div>
//     )
//   }
// }

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => 
          <li key={todo.id}>
            {todo.text}
          </li> )}
      </ul>
    )
  }
}

export default App;
