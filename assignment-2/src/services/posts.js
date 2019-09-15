import { client } from '.'
const url ='/posts'

//gets the all post details
export function getPosts() {
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

//gets the post details for a particular userId
export function getPostsByUserId(userId) {
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

// adds a post
export function addPost(post) {
    return new Promise((resolve, reject) => {
      client
        .post(url,post)
        .then(json => {
            resolve(json.data)
        }).catch(err => {
            reject(err)
        })
    })
  }