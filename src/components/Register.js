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
              <input name='username' />
            </label>
          </li>
          <li>
            <label>
              <div>Name: </div>
              <input name='name' />
            </label>
          </li>
          <li>
            <label>
              <div>Password: </div>
              <input name='password' type='password' />
            </label>
          </li>
          <li>
            <button type='submit'>Register</button>
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