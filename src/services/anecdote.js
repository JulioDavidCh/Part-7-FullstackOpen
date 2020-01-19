import axios from 'axios'

const baseUrl = 'http://localhost:3003/api/anecdotes'

const getAnecdotes = async () => {
  const response = await axios.get(baseUrl)

  return response.data
}

const postAnecdote = async (content, author, info, token) => {
  const newAnecdote = {
    content,
    author,
    info
  }

  const response = await axios.post(baseUrl, newAnecdote, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  
  return response.data
}

export {
  getAnecdotes,
  postAnecdote
}