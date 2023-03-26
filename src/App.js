import logo from './logo.svg'
import './App.css'
import React, { Component } from 'react'
import Switch from 'react-switch'
// import Child from './Child'

class App extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      name : "",
      age : 25,
      readonly: "",
      clear: "Cleared"
    }
    this.handleChange = this.handleChange.bind(this);
  }
  

  changeName = (e)=>{
    if(e.target.value===""){
      this.setState({clear: "Cleared"})
    }else{
      this.setState({clear: "there is text value."})
    }

    this.setState({
      name: e.target.value
    })

  }

  handleSubmit = (e)=>{
    e.preventDefault();
    this.setState({
      name: "",
      clear: "Cleared"
    })
    document.getElementById("inp-txt1").value = ""
    
  }

  handleChange(e) {
    this.setState({ checked: e });
    
  }

  render(){
    return (
      <div className="App">
        <form className="body-form" onSubmit={this.handleSubmit}>
          <Switch onChange={this.handleChange} checked={this.state.checked} />
          <br/>
          <div className="empty-div"></div>
          <input id="inp-txt1" className="inp-txt" onChange={this.changeName} readOnly={!this.state.checked}/>
          <button className="btn-submit">Clear</button>
          <br/>
          {this.state.name}
          <br/>
          <p>{this.state.clear}</p>
        </form>
      </div>
    );
  }
  
}

export default App
