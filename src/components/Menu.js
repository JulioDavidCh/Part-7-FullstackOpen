import React from 'react'
import { Link } from 'react-router-dom'
import { actionCreatorSetUsername as setUser } from '../reducers/userReducer'
import { connect } from 'react-redux'
import { Menu as MenuUI , Button } from 'semantic-ui-react'

const Menu = (props) => {
  const padding = {
    paddingRight: 5
  }

  const loggedUser = () => {
    return(
      <div>
        {props.user} Logged In
        <Button onClick={() => {
          window.localStorage.clear()
          props.setUser(null)
        }}
        secondary
        size='large'
        position='right'
        >
          Logout
        </Button>
      </div>
    )
  }

  return (
    <div>
      <MenuUI>
        <Link style={padding} to='/anecdotes' >
          <MenuUI.Item>anecdotes</MenuUI.Item>
        </Link>
        <Link style={padding} to='/create' >
          <MenuUI.Item>create new</MenuUI.Item>
        </Link>
        <Link style={padding} to='/about' >
          <MenuUI.Item>about</MenuUI.Item>
        </Link>
        <Link style={padding} to='/users' >
          <MenuUI.Item>users</MenuUI.Item>
        </Link>
        <MenuUI.Menu position='right'>
          {
            props.user
              ? <span style={padding}>{loggedUser(props.user)}</span>
              : <Link style={padding} to='/login' >
                <MenuUI.Item position='right'>login</MenuUI.Item>
              </Link>
          }
          {
            props.user
              ? ''
              : <Link style={padding} to='/register' >
                <MenuUI.Item position='right'>register</MenuUI.Item>
              </Link>
          }
        </MenuUI.Menu>
      </MenuUI>
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