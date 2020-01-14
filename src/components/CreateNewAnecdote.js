import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreatorNewNotification as addNotification } from '../reducers/notificationReducer'
import { actionCreatorNewAnecdote as addAnecdote } from '../reducers/anecdotesReducer'

const CreateNew = (props) => {

  const handleSubmit = (e) => {

    const target = e.target
    const content = target.content.value
    const author = target.author.value
    const info = target.info.value

    e.preventDefault()

    props.addAnecdote(
      content,
      author,
      info
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
          <input name='content' />
        </div>
        <div>
          author
          <input name='author' />
        </div>
        <div>
          url for more info
          <input name='info' />
        </div>
        <button>create</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = {
  addNotification,
  addAnecdote
}

const CreateNewAnecdote = withRouter(CreateNew)

const connectedComponent = connect(null, mapDispatchToProps)(CreateNewAnecdote)

export default connectedComponent