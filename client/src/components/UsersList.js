import React, { Component } from "react"
import axios from "axios"

class UsersList extends Component {
  state = {
    users: [],
    message: ""
  }

  componentDidMount = () => {
    axios.defaults.withCredentials = true
    axios
      .get("http://localhost:8080/api/users")
      .then(response => {
        console.log("response: ", response.data)
        this.setState({ users: response.data })
      })
      .catch(err => {
        const message = err.response
          ? err.response.data.message
          : "There was a problem with the authentication, please try again."
        this.setState({ message: message })
      })
  }

  render() {
    return (
      <ul>
        {this.state.message && <h2>{this.state.message}</h2>}
        {this.state.users.map(user => (
          <li key={user.id}>
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
