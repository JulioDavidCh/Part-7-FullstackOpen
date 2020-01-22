import axios from 'axios'

const postUrl = 'http://localhost:3003/api/anecdotes'

const postComment = async (id, comment) => {
  const response = await axios
  .post(`${postUrl}/${id}/comments`, { comment })

  return response.data
}

const getUrl = 'http://localhost:3003/api/comments/'

const getComment = async id => {
  const response = await axios
  .get(`${getUrl}/${id}`)

  return response.data
}

export {
  postComment,
  getComment
}