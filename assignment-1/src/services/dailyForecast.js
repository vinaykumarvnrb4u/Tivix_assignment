import { client } from '.'
import { dailyForecastData } from '../constants/'

const url ='/forecast/daily'
const appid = 'b1b15e88fa797225412429c1c50c122a1'

//const appid = '2cb0bcd03c0670776a6f3bd9e8e267f9'

//gets the all daily forecast details for a particulat location
export function getDailyForecast(id) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(dailyForecastData)
        },2000)
    //   client
    //     .get(url,{
    //         params:{
    //             appid,
    //             id
    //         }
    //     })
    //     .then(json => {
    //         resolve(json.data)
    //     }).catch(err => {
    //         reject(err)
    //     })
    })
  }

  //add 
  export function addDailyForecast(data) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(data)
        },2000)
    //   client
    //     .post(url,{
    //         params:{
    //             appid,
    //             id
    //         }
    //     })
    //     .then(json => {
    //         resolve(json.data)
    //     }).catch(err => {
    //         reject(err)
    //     })
    })
  }