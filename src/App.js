import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import NavBar from './components/NavBar'
import Form from './components/Form'
import EquipmentContainer from './containers/EquipmentContainer'

class App extends React.Component {

  state = {
    user: {
      username: "",
      orders: []
    },
    token: "",
    equipments: []
  }

  componentDidMount() {
   if (localStorage.token){
     fetch("http://localhost:4000/persist", {
       headers: {
         "Authorization": `Bearer ${localStorage.token}`
       }
     })
       .then(r => r.json())
       .then(this.handleResp)
    }

    fetch("http://localhost:4000/equipments")
      .then(r=> r.json())
      .then((equipments) => {
        this.setState({
          equipments
        })
      })
  }

  handleLogout = () => {
    this.setState({
      user: {
        id: 0,
        username: "",
        orders: []
      },
      token: ""
    })
    localStorage.clear()
  }
  

  handleResp = (resp) => {
   if (resp.user) {
     localStorage.token = resp.token
     this.setState(resp, () => {
       this.props.history.push("/equipments")
     })
   }
   else {
     alert(resp.error)
   }
  }

  handleLoginSubmit = (userInfo) => {
   fetch(`http://localhost:4000/login`, {
     method: "POST",
     headers: {
       "content-type": "application/json"
     },
     body: JSON.stringify(userInfo)
   })
     .then(res => res.json())
     .then(this.handleResp)
  }

  handleRegisterSubmit = (userInfo) => {
   fetch(`http://localhost:4000/users`, {
     method: "POST",
     headers: {
       "content-type": "application/json"
     },
     body: JSON.stringify(userInfo)
   })
     .then(res => res.json())
     .then(this.handleResp)
  }

  renderForm = (routerProps) => {
     if(routerProps.location.pathname === "/login"){
       return <Form formName="Login Form" handleSubmit={this.handleLoginSubmit}/>
     } else if (routerProps.location.pathname === "/register") {
       return <Form formName="Register Form" handleSubmit={this.handleRegisterSubmit}/>
     }
   }

  render(){
    return (
      <Router>
      <div className="App">
        <NavBar />
          <Route path="/login" render={ this.renderForm } />
          <Route path="/register" render={ this.renderForm }/>
          <Route path="/equipments">
            <EquipmentContainer
              Equipments={this.state.equipments}
              user={this.state.user}
              token={this.state.token}
            />
          </Route>
      </div>
      </Router>
    )
  }

}
export default App;