import React from 'react'
import { actionCreatorNewNotification as setNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'
import registerService from '../services/register'

const Register = (props) => {
  const registerHandler = (event) => {
    event.preventDefault()
    const username = event.target.username.value
    const name = event.target.name.value
    const password = event.target.password.value
    props.registerUser(username, name, password)
    event.target.username.value = ''
    event.target.password.value = ''
    event.target.name.value = ''
  }

  return(
    <div>
      <form onSubmit={registerHandler}>
        <h2>Register</h2>
        <ul>
          <li>
            <label>
              <div>Username: </div>
              <input name='username' data-cy="username-register"/>
            </label>
          </li>
          <li>
            <label>
              <div>Name: </div>
              <input name='name' data-cy="name-register"/>
            </label>
          </li>
          <li>
            <label>
              <div>Password: </div>
              <input name='password' type='password' data-cy="password-register"/>
            </label>
          </li>
          <li>
            <button type='submit' data-cy="submit-register">Register</button>
          </li>
        </ul>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.notification
})

const mapDispatchToProps = dispatch => {
  return {
    registerUser: async (username, name, password) => {
      const response = await registerService(username, name, password)
      dispatch(setNotification(`${response.username} successfully registered!`, 10))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)