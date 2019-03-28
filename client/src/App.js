import React, { Component } from "react"
import { Route } from "react-router-dom"

import Nav from "./components/Nav"
import AuthForm from "./components/authenticate"
import UsersList from "./components/UsersList"

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Nav />
        <h1>Welcome to webauth-I-Challenge!</h1>
        <Route path='/authenticate' component={AuthForm} />
        <Route path='/users' component={UsersList} />
      </div>
    )
  }
}

export default App
