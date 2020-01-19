import axios from 'axios'

const baseUrl = 'http://localhost:3003/api/users'

const register = async (username, name, password) => {
  const response = await axios.post(baseUrl, {
    username,
    name,
    password
  })

  return response.data
}

export default register