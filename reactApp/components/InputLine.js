import React from 'react';
import ReactDOM from 'react-dom';

class InputLine extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <form>
      <input type="text" placeholder="task"/>
      <input
        type="submit"
        value="Add todo"
        onClick={(event) => {
          event.preventDefault()
          this.props.submit("test task")
        }}/>
      </form>
      )
    }
  }

export default InputLine;
