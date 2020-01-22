import React,{ useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { postComment, getComment } from '../services/comment'

const Anecdote = (props) => {
  const [newComments, setComments] = useState([])

  useEffect(() => {
    const helper = async () => {
      const ourComments = await getComment(props.id)
      if(ourComments) return setComments(ourComments.comments)
      setComments([])
    }

    helper()
  },[])

  const anecdoteById = (id) =>
    props.anecdotes.find(a => a.id === id)

  const anecdote = anecdoteById(props.id)

  const submitHandler = async (event) => {
    event.preventDefault()
    const ourComment = event.target.comment.value
    const updatedComments = await postComment(props.id, ourComment)
    setComments(updatedComments[0].comments)
  }

  return(
    <div>
      <h2>{anecdote.content} by {anecdote.author}</h2>
      <div>has {anecdote.votes} votes</div>
      <div>for more info see <a href={anecdote.info}>{anecdote.info}</a></div>
      <div>added by {anecdote.user.username}</div>

      <div>
        <h2>comments</h2>
        <form onSubmit={submitHandler}>
         <input name='comment' />
         <button type='submit'>add comment</button>
        </form>
      </div>
      <ul key={String(Math.random())}>
        {
        newComments
        .map(comment => <li key={String(Math.random())}>{comment}</li>)
        }
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  anecdotes: state.anecdotes
})

export default connect(mapStateToProps)(Anecdote)