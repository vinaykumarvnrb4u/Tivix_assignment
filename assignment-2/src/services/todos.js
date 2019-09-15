import { client } from '.'
const url ='/todos'

//gets the all todo details
export function getTodos() {
    return new Promise((resolve, reject) => {
      client
        .get(url)
        .then(json => {
            resolve(json.data)
        }).catch(err => {
            reject(err)
        })
    })
  }

//gets the todos details for a particular userId
export function getTodosByUserId(userId) {
  return new Promise((resolve, reject) => {
    client
      .get(url,{
          params :{
            userId
          }
      })
      .then(json => {
          resolve(json.data)
      }).catch(err => {
          reject(err)
      })
  })
}

// adds a todo
export function addTodo(todo) {
    return new Promise((resolve, reject) => {
      client
        .post(url,todo)
        .then(json => {
            resolve(json.data)
        }).catch(err => {
            reject(err)
        })
    })
  }