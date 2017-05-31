// @flow
import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

export default class SignUp extends React.Component{
  static get propTypes(){
    return {
      history: PropTypes.object.isRequired
    }
  }

  handleSubmit(e){
    const { name, email, password, password_confirmation } = e.target
    const user = {
      user: {
        name: name.value.trim(),
        email: email.value.trim(),
        password: password.value.trim(),
        password_confirmation: password_confirmation.value.trim()
      }
    }
    const createUser = data =>
      axios.post('http://localhost:5000/create_user',data)

    e.preventDefault()

    createUser(user)
      .then(() => this.props.history.push('/login'))
      .catch((data) => window.console.log(data.error))
  }
  render(){
    return(
      <div>
        <form onSubmit={::this.handleSubmit}>
          <label htmlFor="name_field">Name:</label>
          <input type="text" name="name" id="name_field"/><br/>
          <label htmlFor="email_field">Email:</label>
          <input type="email" name="email" id="email_field"/><br/>
          <label htmlFor="password_field">PassWord:</label>
          <input type="password" name="password" id="password_field"/><br/>
          <label htmlFor="password_confirmation_field">PassWord Confirmation:</label>
          <input type="password" name="password_confirmation" id="password_confirmation_field"/><br/>
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    )
  }
}
