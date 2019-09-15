import { client } from '.'
const url ='/users'

//gets the todos details for a particular userId
export function getUserById(userId) {
  return new Promise((resolve, reject) => {
    client
      .get(`${url}/${userId}`)
      .then(json => {
          resolve(json.data)
      }).catch(err => {
          reject(err)
      })
  })
}
