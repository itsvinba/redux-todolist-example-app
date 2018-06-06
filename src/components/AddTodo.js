// Vendor Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Custom Dependencies
import { addTodo } from '../actions';

let value

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: () => dispatch(addTodo(value))
  }
}

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    value = this.state.value;
    if (value.trim() != '') {
      this.props.addTodo();
      this.setState({value: ''});
    }
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
          <button type='submit'>
            Add Todo
          </button>
        </form>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (AddTodo)