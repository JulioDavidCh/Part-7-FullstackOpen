const anecdotesReducer = (state = null, action) => {
  switch (action.type) {
    case 'INITIALIZE_ANECDOTES':
      return action.data
    case 'NEW_ANECDOTE':
      return [...state, action.data]
  default:
  return state
  }
}

const actionCreatorNewAnecdote = (content, author, info, id, user) => {
  return {
    type: 'NEW_ANECDOTE',
    data: {
      content,
      author,
      info,
      votes: 0,
      id,
      user
    }
  }
}

const actionCreatorInitializeAnecdotes = (data) => {
  return {
    type: 'INITIALIZE_ANECDOTES',
    data
  }
}

export { anecdotesReducer, actionCreatorNewAnecdote, actionCreatorInitializeAnecdotes }