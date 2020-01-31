import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreatorNewNotification as addNotification } from '../reducers/notificationReducer'
import { actionCreatorNewAnecdote as addAnecdote } from '../reducers/anecdotesReducer'
import { postAnecdote } from '../services/anecdote'

const CreateNew = (props) => {

  const handleSubmit = (e) => {

    const target = e.target
    const content = target.content.value
    const author = target.author.value
    const info = target.info.value
    const token = window.localStorage.getItem('token')

    e.preventDefault()

    props.addAnecdote(
      content,
      author,
      info,
      token
    )

    props.addNotification(`${content} was added by ${author}`, 5)
    props.history.push('/')
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input name='content' data-cy="content-input-anecdote"/>
        </div>
        <div>
          author
          <input name='author' data-cy="author-input-anecdote"/>
        </div>
        <div>
          url for more info
          <input name='info' data-cy="info-input-anecdote"/>
        </div>
        <button type='submit' data-cy="submit-button-anecdote">create</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addNotification,
    addAnecdote: async (content, author, info, token) => {
      const response = await postAnecdote(content, author, info, token)
      dispatch(addAnecdote(
        response.content,
        response.author,
        response.info,
        response.id,
        response.user
      ))
    }
  }
}

const CreateNewAnecdote = withRouter(CreateNew)

const connectedComponent = connect(null, mapDispatchToProps)(CreateNewAnecdote)

export default connectedComponent