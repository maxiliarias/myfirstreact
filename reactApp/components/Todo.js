import React from 'react';
import ReactDOM from 'react-dom';

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

export default Todo;
