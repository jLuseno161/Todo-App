import React from "react"

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false
      }
    ]
  };

  render() {
    return (
      // <div>
      //   <h1>Hello from Create React App</h1>
      //   <p>I am in a React Component!</p>
      // </div>

      // React Fragment (a virtual element that doesn’t get shown in the DOM).
      <React.Fragment>
      <h2>My To do List</h2>
        <ul>
          {this.state.todos.map(todo => (
            <li>{todo.title}</li>
          ))}
        </ul>
      </React.Fragment>
    )
  }
}
export default TodoContainer