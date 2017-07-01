import React from 'react';
import ReactDOM from 'react-dom';
import InputLine from './InputLine';
import TodoList from './TodoList';

const dummyData= [
  { taskText: "Do the Dishes", completed: true },
  { taskText: "Call Sisco", completed: false },
  { taskText: "Make Reservations", completed: false },
  { taskText: "Do laundry", completed: false },
  { taskText: "Buy Groceries", completed: true },
  { taskText: "Bake Pie", completed: false }
]

class TodoApp extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      todos:[]
    }
  }
  componentDidMount(){
    this.setState({
      todos: dummyData
      }
    )
  }

  render(){
    return(
      <div>
      <InputLine/>
      <TodoList todos={this.state.todos}/>
      </div>
    )
  }
}

export default TodoApp;
