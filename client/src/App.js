import React, { Component } from "react"

import Nav from "./components/Nav"

import "./App.css"

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Nav />
        <h1>Welcome to webauth-I-Challenge!</h1>
      </div>
    )
  }
}

export default App
