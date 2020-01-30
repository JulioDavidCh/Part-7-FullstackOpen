import React from 'react'
import { actionCreatorSetUsername } from '../reducers/userReducer'
import { connect } from 'react-redux'
import loginService from '../services/login'

const Login = (props) => {
  const loginHandler = (event) => {
    event.preventDefault()
    const username = event.target.username.value
    const password = event.target.password.value
    props.loginUser(username, password)
    event.target.username.value = ''
    event.target.password.value = ''
  }

  return(
    <div>
      <form onSubmit={loginHandler}>
        <h2>Login</h2>
        <ul>
          <li>
            <label>
              <div>Username: </div>
              <input name='username' data-cy="usernameInput"/>
            </label>
          </li>
          <li>
            <label>
              <div>Password: </div>
              <input name='password' type='password' data-cy="passwordInput"/>
            </label>
          </li>
          <li>
            <button type='submit' data-cy="loginSubmit">Login</button>
          </li>
        </ul>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => {
  return {
    loginUser: async (username, password) => {
      const response = await loginService(username, password)
      console.log(response)
      window.localStorage.setItem('token', response.token)
      window.localStorage.setItem('username', response.username)
      window.localStorage.setItem('name', response.name)
      dispatch(actionCreatorSetUsername(response.username))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)