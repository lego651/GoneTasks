import React from 'react'

import './TodoInput.css'

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "test"
    }
  }
  render() {
    return (
      <div>
        <input type="text"
               value={this.state.value} 
               onChange={this.handleChange.bind(this)} />
        <button className="btn btn-primary"
                onClick={() => this.addTodo(this.state.value)}>
          Submit
        </button>
      </div>
    )
  }
  handleChange(e) {
    this.setState({value: e.target.value})
  }
  addTodo(todo) {
    if(todo.length > 0) {
      this.props.addTodo(todo)
      this.setState({value: ""})
    }
  }
}
