// Vendor Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Custom Dependencies

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}


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

export default connect(
  mapStateToProps,
) (TodoList)