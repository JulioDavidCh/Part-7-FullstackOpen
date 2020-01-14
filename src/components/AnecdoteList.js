import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const AnecdoteList = (props) => {
  return(
    <div>
      <h2>Anecdotes</h2>
      <ul>
        {props.anecdotes
        .map(anecdote => 
        <li key={anecdote.id} >
          <Link to={`/anecdotes/${anecdote.id}`} >{anecdote.content}</Link>
        </li>
        )}
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  anecdotes: state.anecdotes
})

export default connect(mapStateToProps)(AnecdoteList)