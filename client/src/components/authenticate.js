import React, { Component } from "react"
import axios from "axios"

import "./authForm.css"

class Authenticate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      email: "",
      message: ""
    }
  }

  componentDidMount = () => {
    console.log("in authenticate component")
  }

  saveInput = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  authenticate = event => {
    event.preventDefault()
    const { username, password } = this.state
    axios
      .post("http://localhost:8080/api/login", { username, password })
      .then(response => {
        this.setState({
          message: response.data.message,
          username: "",
          password: ""
        })
      })
      .catch(err => {
        this.setState({
          message: err.response.data.message,
          username: "",
          password: ""
        })
      })
  }

  render() {
    return (
      <>
        {this.state.message && (
          <h2 className='message'>{this.state.message}</h2>
        )}
        <div className='login-wrap'>
          <div className='login-html'>
            <input
              id='tab-1'
              type='radio'
              name='tab'
              className='sign-in'
              checked
            />
            <label htmlFor='tab-1' className='tab'>
              Sign In
            </label>
            <input id='tab-2' type='radio' name='tab' className='sign-up' />
            <label htmlFor='tab-2' className='tab'>
              Sign Up
            </label>
            <div className='login-form'>
              <form className='sign-in-htm' onSubmit={this.authenticate}>
                <div className='group'>
                  <label htmlFor='user' className='label'>
                    Username
                  </label>
                  <input
                    id='user'
                    type='text'
                    className='input'
                    name='username'
                    value={this.state.username}
                    onChange={this.saveInput}
                  />
                </div>
                <div className='group'>
                  <label htmlFor='pass' className='label'>
                    Password
                  </label>
                  <input
                    id='pass'
                    type='password'
                    className='input'
                    data-type='password'
                    name='password'
                    value={this.state.password}
                    onChange={this.saveInput}
                  />
                </div>
                <div className='group'>
                  <input type='submit' className='button' value='Login' />
                </div>
              </form>
              <form className='sign-up-htm' onSubmit={this.authenticate}>
                <div className='group'>
                  <label htmlFor='user' className='label'>
                    Username
                  </label>
                  <input id='user' type='text' className='input' />
                </div>
                <div className='group'>
                  <label htmlFor='pass' className='label'>
                    Password
                  </label>
                  <input
                    id='pass'
                    type='password'
                    className='input'
                    data-type='password'
                  />
                </div>
                <div className='group'>
                  <label htmlFor='pass' className='label'>
                    Email Address
                  </label>
                  <input id='pass' type='text' className='input' />
                </div>
                <div className='group'>
                  <input type='submit' className='button' value='Sign Up' />
                </div>
                <div className='hr' />
                <div className='foot-lnk'>
                  <label htmlFor='tab-1'>Already Member?</label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Authenticate
