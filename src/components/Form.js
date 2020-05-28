import React, { Component } from 'react';

class Form extends Component {

  state = {
    username: "",
    password: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    let {formName} = this.props
    let {username, password} = this.state

    return (
  <div>
      <div className="centered">
         <h2 id="form-header">{formName}</h2> 
      </div>
     <div id="form">
      <form onSubmit={this.handleSubmit} className="form-inline">  
        <label htmlFor="username">Username:</label>
        <input type="text" autoComplete="off" name="username" value={username} onChange={this.handleChange} className="form-control mr-sm-2" />
        <label htmlFor="password">Password:</label>
        <input type="password" autoComplete="off" name="password" value={password} onChange={this.handleChange} className="form-control mr-sm-2" />
        <input type="submit" value="Submit" className="auth"/>
      </form>
     </div>
   </div>
    );
  }

}

export default Form;