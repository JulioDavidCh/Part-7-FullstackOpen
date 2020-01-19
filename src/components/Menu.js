import React from 'react'
import { Link } from 'react-router-dom'
import { actionCreatorSetUsername as setUser } from '../reducers/userReducer'
import { connect } from 'react-redux'

const Menu = (props) => {
  const padding = {
    paddingRight: 5
  }

  const loggedUser = () => {
    return(
      <div>
        {props.user} Logged In
        <button onClick={()=>{
           window.localStorage.clear()
           props.setUser(null)
        }}>Logout</button>
      </div>
    )
  }

  return (
    <div>
      <Link style={padding} to='/anecdotes' >anecdotes</Link>
      <Link style={padding} to='/create' >create new</Link>
      <Link style={padding} to='/about' >about</Link>
      {
        props.user
        ? loggedUser(props.user)
        : <Link style={padding} to='/login' >login</Link>
      }
      {
        props.user
        ? ''
        : <Link style={padding} to='/register' >register</Link>
      }
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = {
  setUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)