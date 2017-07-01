import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';

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

export default TodoList;
