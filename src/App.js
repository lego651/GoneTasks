import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import TodoInput from './components/TodoInput'
import TodoItem from './components/TodoItem'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {id: 0, text: "Make dinner tonight!"},
        {id: 1, text: "Fold the laundry."},
        {id: 2, text: "Learn to make a React App!"},
      ],
      nextId: 3
    }
  }
  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header />
          <TodoInput todoText=""
                     addTodo={this.addTodo.bind(this)} />
          <ul>
            {
              this.state.todos.map((todo) => {
                return <TodoItem todo={todo}
                                 key={todo.id}
                                 id={todo.id}
                                 removeTodo={this.removeTodo.bind(this)} />
              })
            }
          </ul>
        </div>
      </div>
    );
  }
  addTodo(todoText) {
    // console.log("todo added:", todoText)
    let todos = this.state.todos.slice();
    // let todos = Object.assign({}, this.state.todos)
    todos.push(
      {
        id: this.state.nextId,
        text: todoText
      }
    )
    this.setState({
      todos: todos,
      nextId: ++this.state.nextId
    })
  }
  removeTodo(id) {
    // console.log("removing:", id)
    this.setState ({
      todos: this.state.todos.filter((todo, index) => todo.id !== id)
    })
  }
}

export default App;
