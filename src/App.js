import React from 'react';
import TodoList from "./components/TodoComponents/TodoList.js";
import ListForm from "./components/TodoComponents/TodoForm.js";



const List = [
  {
    task: '',
    id: '',
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor(){
    super();
    this.state = {
      List
    };
  }

  toggleTodo = id =>{
    this.setState({
      List: this.state.List.map( todo => {
        if (todo.id === id ){
          return {
            ...todo,
            completed: !todo.completed
          }
        } else{
          return todo;
        }
      }
      )

    })
  }

  addTask = task =>{
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
      
    };
    this.setState({
      List: [...this.state.List, newTask]
    })
  }

  Clear = () => {
    this.setState({
      List: this.state.List.filter(todo => !todo.completed)
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList List={this.state.List} toggleTodo={this.toggleTodo} Clear={this.Clear}/>
        <ListForm addTask={this.addTask} />
      </div>
    );
  }
}

export default App;
