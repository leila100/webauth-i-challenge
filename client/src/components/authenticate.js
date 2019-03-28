import React, { Component } from "react"
import axios from "axios"

import "./authForm.css"

class Authenticate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      registerUsername: "",
      registerPassword: "",
      email: "",
      message: "",
      checked: true
    }
  }

  saveInput = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  loginHandler = event => {
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
        const message = err.response
          ? err.response.data.message
          : "There was a problem with the registration, please try again."
        this.setState({
          message: message,
          username: "",
          password: ""
        })
      })
  }

  registerHandler = event => {
    event.preventDefault()
    const username = this.state.registerUsername
    const password = this.state.registerPassword
    axios
      .post("http://localhost:8080/api/register", { username, password })
      .then(response => {
        this.setState({
          message: "You have registered successfully!",
          username: "",
          password: ""
        })
      })
      .catch(err => {
        const message = err.response
          ? err.response.data.message
          : "There was a problem with the registration, please try again."
        this.setState({
          message: message,
          username: "",
          password: ""
        })
      })
  }

  tabClickHandler = () => {
    this.setState(prevState => {
      return { checked: !prevState.checked }
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
              onClick={this.tabClickHandler}
              checked={this.state.checked}
            />
            <label htmlFor='tab-1' className='tab'>
              Sign In
            </label>
            <input
              id='tab-2'
              type='radio'
              name='tab'
              className='sign-up'
              onClick={this.tabClickHandler}
              checked={!this.state.checked}
            />
            <label htmlFor='tab-2' className='tab'>
              Sign Up
            </label>
            <div className='login-form'>
              <form className='sign-in-htm' onSubmit={this.loginHandler}>
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
                    autoComplete='off'
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
              <form className='sign-up-htm' onSubmit={this.registerHandler}>
                <div className='group'>
                  <label htmlFor='user' className='label'>
                    Username
                  </label>
                  <input
                    id='user'
                    type='text'
                    className='input'
                    name='registerUsername'
                    value={this.state.registerUsername}
                    onChange={this.saveInput}
                    autoComplete='off'
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
                    name='registerPassword'
                    value={this.state.registerPassword}
                    onChange={this.saveInput}
                  />
                </div>
                <div className='group'>
                  <label htmlFor='pass' className='label'>
                    Email Address
                  </label>
                  <input
                    id='pass'
                    type='email'
                    className='input'
                    name='email'
                    value={this.state.email}
                    onChange={this.saveInput}
                    autoComplete='off'
                  />
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
