import React from "react"
import axios from "axios"

class Logout extends React.Component {
  state = {
    message: ""
  }

  componentDidMount() {
    axios.defaults.withCredentials = true
    axios
      .get("http://localhost:8080/api/logout")
      .then(response => {
        this.setState({ message: response.data.message })
      })
      .catch(err => {
        const message = err.response
          ? err.response.data.message
          : "There was a problem with the login, please try again."
        this.setState({ message: message })
      })
  }

  render() {
    return <h2>{this.state.message}</h2>
  }
}

export default Logout
