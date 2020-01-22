import React from 'react'
import { connect } from 'react-redux'

const UserAnecdotes = (props) => {
  const id = props.id
  const ourUser = props.userAnecdotes.filter(user => user.id === id)
  const anecdotesUser = 
  ourUser.length > 0
  ? ourUser[0].anecdotes
  : []
  return (
    <div>
      <h2>{ourUser.username} anecdotes</h2>
      <ul key={ourUser.id}>
        {
          anecdotesUser
          .map(anecdote => <li key={anecdote.id}>{anecdote.content}</li>)
        }
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  userAnecdotes: state.userinfo
})

export default connect(mapStateToProps)(UserAnecdotes)