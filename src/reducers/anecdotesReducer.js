const initialState = [
  {
    content: 'If it hurts, do it more often',
    author: 'Jez Humble',
    info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
    votes: 0,
    id: '1'
  },
  {
    content: 'Premature optimization is the root of all evil',
    author: 'Donald Knuth',
    info: 'http://wiki.c2.com/?PrematureOptimization',
    votes: 0,
    id: '2'
  }
]

const anecdotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_ANECDOTE':
      return [...state, action.data]
  default:
  return state
  }
}

const actionCreatorNewAnecdote = (content, author, info) => {
  const id= (Math.random() * 10000).toFixed(0)
  return {
    type: 'NEW_ANECDOTE',
    data: {
      content,
      author,
      info,
      votes: 0,
      id
    }
  }
}

export { anecdotesReducer, actionCreatorNewAnecdote }