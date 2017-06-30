import React from 'react';
import ReactDOM from 'react-dom';

const dummyData= [
  'Do Dishes',
  'Call Sisco',
  'Make Reservations',
  'Do laundry',
  'Buy Groceries',
  'Bake Pie'
]

class Todo extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <li><button>X</button>{this.props.task}</li>
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
        {this.props.todo.map((x) => <Todo task={x} />)}
      </ul>

    )
  }
}

ReactDOM.render(<TodoList todo={dummyData}/>,
   document.getElementById('root'));
