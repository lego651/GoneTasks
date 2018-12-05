import React from 'react'
import './TodoItem.css'

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div className="todoWrapper">
        <button className="removeTodo"
                onClick={(e)=>this.removeTodo(this.props.id)}>
          Remove
        </button>
        {this.props.todo.text}
      </div>
    )
  }
  removeTodo(id) {
    this.props.removeTodo(id)
  }
}
