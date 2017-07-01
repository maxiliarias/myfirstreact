import React from 'react';
import ReactDOM from 'react-dom';

const dummyData= [
  { taskText: "Do the Dishes", completed: true },
  { taskText: "Call Sisco", completed: false },
  { taskText: "Make Reservations", completed: false },
  { taskText: "Do laundry", completed: false },
  { taskText: "Buy Groceries", completed: true },
  { taskText: "Bake Pie", completed: false }
]

class Todo extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <li><button>X</button>{this.props.task.completed ?
        <strike>{this.props.task.taskText}</strike> :
        this.props.task.taskText} </li>
    )
  }
}

class TodoList extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
        <ul>
          {this.props.todos.map((x) => <Todo task={x} />)}
        </ul>
    )
  }
}

class InputLine extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <form>
      <input type="text" placeholder="task"/>
      <input type="submit" value="Add todo"/>
      </form>
    )
  }
}

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

ReactDOM.render(<TodoApp />,
   document.getElementById('root'));
