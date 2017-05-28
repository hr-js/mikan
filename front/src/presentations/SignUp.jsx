// @flow
import React from 'react'
import axios from 'axios'

function createUser(data){
  axios.post('http://localhost:5000/create_user',data)
}

export default class SignUp extends React.Component{
  handleSubmit(e){
    const target = e.target
    const router = this.context.router
    e.preventDefault()

    createUser({
      name: target.name.value.trim(),
      email: target.email.value.trim(),
      password: target.password.value.trim(),
      password_confirmation: target.password_confirmation.value.trim()
    }).then(() => router.replace('/login'))
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
