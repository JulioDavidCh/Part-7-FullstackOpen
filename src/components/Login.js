import React from 'react'

const Login = () => {
  const loginHandler = event => {
    event.preventDefault()
  }

  return(
    <div>
      <form onSubmit={loginHandler}>
        <ul>
          <li>
            <label>
              <div>Username: </div>
              <input name='username' />
            </label>
          </li>
          <li>
            <label>
              <div>Password: </div>
              <input name='password' type='password' />
            </label>
          </li>
          <li>
            <button type='submit'>Login</button>
          </li>
        </ul>
      </form>
    </div>
  )
}

export default Login