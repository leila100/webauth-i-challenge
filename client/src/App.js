import React, { Component } from "react"
import { Route } from "react-router-dom"

import Nav from "./components/Nav"
import AuthForm from "./components/authenticate"
import UsersList from "./components/UsersList"
import Logout from "./components/Logout"

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Nav />
        <h1>Welcome to webauth-I-Challenge!</h1>
        <Route path='/authenticate' component={AuthForm} />
        <Route path='/users' component={UsersList} />
        <Route path='/logout' component={Logout} />
      </div>
    )
  }
}

export default App
