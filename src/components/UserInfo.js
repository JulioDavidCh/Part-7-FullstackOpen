import React from 'react'
import fetchUserInfo from '../services/users'
import { connect } from 'react-redux'
import { actionCreatorSetUserInfo as infoAC } from '../reducers/userInfoReducer'
import { Link } from 'react-router-dom'
import { Table, Header, Button } from 'semantic-ui-react'

const UserInfo = (props) => {
  const clickHandler = () => {
    props.setUserInfo()
  }

  return (
    <div>
      <Header as='h2' textAlign='center'>Users</Header>
      <Button primary onClick={clickHandler} data-cy="refresh-users">Refresh</Button>
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>users</Table.HeaderCell>
            <Table.HeaderCell>anecdotes</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          { props.userinfo.map(user =>
              <Table.Row key={user.id}>
                <Table.Cell>
                  <Link to={`/users/${user.id}`} >{user.username}</Link>
                </Table.Cell>
                <Table.Cell>
                  {user.anecdotes.length}
                </Table.Cell>
              </Table.Row>
            )
          }
        </Table.Body>
      </Table>
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