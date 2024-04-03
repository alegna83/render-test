import axios from 'axios'
const baseUrl = 'http://localhost:3001/notes'

const cors = require('cors')

app.use(cors())

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(responses = > response.data)
  /*const nonExisting = {
    id: 10000,
    content: 'This note is not saved to server',
    important: true,
  }
  return request.then(response => response.data.concat(nonExisting))*/
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default {
  getAll: getAll,
  create: create,
  update: update
}