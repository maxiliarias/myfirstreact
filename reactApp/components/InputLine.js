import React from 'react';
import ReactDOM from 'react-dom';

class InputLine extends React.Component{
  constructor(props){
    super(props);
    this.state={
      typedText:""
    }
  }

  handleTyping(e){
    this.setState({
      typedText: e.target.value
    })
  }

  handleSubmit(e){
    this.props.submit(this.state.typedText)
    this.setState({
      typedText: ""
    })
  }

  render(){
    return(
      <form>
      <input type="text" placeholder="task"
        onChange={(e) => this.handleTyping(e)}
        value={this.state.typedText}/>
      <input
        type="submit"
        value="Add a Task"
        onClick={(e) => {
          e.preventDefault()
          this.handleSubmit(e)
        }}/>
      </form>
      )
    }
  }

export default InputLine;
