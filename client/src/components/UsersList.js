import React, { Component } from "react"
import axios from "axios"

class UsersList extends Component {
  state = {
    users: [],
    message: ""
  }

  componentDidMount = () => {
    axios
      .get("http://localhost:8080/api/restricted/users", {
        headers: { username: "Leila", password: "password" }
      })
      .then(response => {
        this.setState({ users: response.data })
      })
      .catch(err => {
        const message = err.response
          ? err.response.data.message
          : "There was a problem with the registration, please try again."
        this.setState({ message: message })
      })
  }

  render() {
    return (
      <ul>
        {this.state.message && <h2>{this.state.message}</h2>}
        {this.state.users.map(user => (
          <li>
            <div>Username: {user.username}</div>
            <div>password: {user.password}</div>
            <hr />
          </li>
        ))}
      </ul>
    )
  }
}

export default UsersList
