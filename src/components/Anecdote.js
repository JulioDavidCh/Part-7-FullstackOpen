import React from 'react'
import { connect } from 'react-redux'

const Anecdote = (props) => {

  const anecdoteById = (id) =>
    props.anecdotes.find(a => a.id === id)

  const anecdote = anecdoteById(props.id)
  return(
    <div>
      <h2>{anecdote.content} by {anecdote.author}</h2>
      <div>has {anecdote.votes} votes</div>
      <div>for more info see <a href={anecdote.info}>{anecdote.info}</a></div>
    </div>
  )
}

const mapStateToProps = state => ({
  anecdotes: state.anecdotes
})

export default connect(mapStateToProps)(Anecdote)