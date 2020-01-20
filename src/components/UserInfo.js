import React from 'react'
import fetchUserInfo from '../services/users'
import { connect } from 'react-redux'
import { actionCreatorSetUserInfo as infoAC } from '../reducers/userInfoReducer'

const UserInfo = (props) => {
  const clickHandler = () => {
    props.setUserInfo()
  }

  return (
    <div>
      <h2>Users</h2>
      <button onClick={clickHandler}>Refresh</button>
      <table>
        <tbody>
        <tr>
          <th>users</th>
          <th>anecdotes</th>
        </tr>
        {
          props.userinfo.map(user => 
            <tr key={user.id}>
              <td>
                {user.username}
              </td>
              <td>
                {user.anecdotes.length}
              </td>
            </tr>
          )
        }
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = state => ({
  userinfo: state.userinfo
})

const mapDispatchToProps = dispatch => {
  return {
    setUserInfo: async () => {
      const userInfoDb = await fetchUserInfo()
      dispatch(infoAC(userInfoDb))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)