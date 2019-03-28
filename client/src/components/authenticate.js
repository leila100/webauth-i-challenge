import React, { Component } from "react"

import "./authForm.css"

import {
  AuthWrapper,
  Auth,
  Tab,
  TabLabel,
  TabRadio,
  Form,
  Group,
  Label
} from "../styles/formStyles"

class Authenticate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      email: ""
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
    console.log("Authenticating with ", this.state)
  }

  render() {
    return (
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
    )
  }
}

export default Authenticate
