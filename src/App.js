import React from 'react';
import './App.css';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom'

import Home from './containers/Home'
import NavBar from './components/NavBar'
import Form from './components/Form'
import EquipmentContainer from './containers/EquipmentContainer'
import EquipmentContainers from './containers/EquipmentContainers'
import UserProf from './containers/UserProf'

class App extends React.Component {

  state = {
    user: {
      id: 0, 
      username: "",
      orders: []
    },
    token: "",
    equipments: []
  }

  componentDidMount() {
   if (localStorage.token){
     fetch("http://localhost:4001/persist", {
       headers: {
         "Authorization": `Bearer ${localStorage.token}`
       }
     })
       .then(r => r.json())
       .then(this.handleResp)
    }

    fetch("http://localhost:4001/equipments")
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
   fetch(`http://localhost:4001/login`, {
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
   fetch(`http://localhost:4001/users`, {
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
   
  renderProfile = (routerProps) => {
    if (this.state.token) {
      return <EquipmentContainer
        equipments={this.state.equipments}
        user={this.state.user}
        token={this.state.token}
        handlePurchaseEquipment={this.handlePurchaseEquipment}
      />
    } else {
      return <Redirect to="/login"/>
    }
  }

  renderUser = (routerProps) => {
    if (this.state.token) {
      return <UserProf
        token={this.state.token}
        handlePurchaseEquipment={this.handlePurchaseEquipment}
      />
    } else {
      return <Redirect to="/login"/>
    }
  }


   render(){
    return (
      <div className="App">
        <NavBar token ={this.state.token} />
        {this.state.token && <button onClick={this.handleLogout}>Log out</button>}
        <Switch>
          <Route exact path="/" render component={ Home }/>
          <Route path="/login" render={ this.renderForm } />
          <Route path="/register" render={ this.renderForm }/>
          <Route path="/equipments" render={ this.renderProfile } />
          <Route path="/profile" render={ this.renderUser } /> 
        </Switch>
      </div>
    )
  } 



  handlePurchaseEquipment = (newOrder) => {
    // console.log(newlyCreatedOrder)

    let copy = [...this.state.user.orders, newOrder]

    this.setState({
      user: {
        ...this.state.user,
        orders: copy
      }
    })  
  }
  

}

export default withRouter(App)  ;
