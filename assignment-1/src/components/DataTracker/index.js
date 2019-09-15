import React, { Component } from 'react'
import { getDailyForecast,addDailyForecast } from '../../services/dailyForecast'
import DailyForecast from '../DailyForecast'
import Statistics from '../Statistics'
import { minmax,mean,mode } from './helpers'
import Loader from '../UI/Loader'
import CustomizedSnackbars from '../UI/SnackBarBox'

class DataTracker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dailyForecastData:[],
            minTemp: null,
            maxTemp: null,
            mean:null,
            mode:null,
            loading:false,
            openSnack : false,
            msgSnack : '',
            snackType : "success"
        }
    }

    componentDidMount() {
        this.setState({
            loading: true
        })
        getDailyForecast().then((data)=>{
            this.setState({
                dailyForecastData:data.list,
                loading: false
            })
        }).catch((err)=>{
            console.log(err);
        })
    }

    //Records a new value into the tracker
    insert = (value) => {
      console.log(value);
      this.setState({
          loading: true
      })
      addDailyForecast(value).then((data)=>{
        let dailyForecastData = [...this.state.dailyForecastData];
        dailyForecastData.push(data);
        this.setState({
            ...this.state,
            dailyForecastData,
            loading: false,
            openSnack:true,msgSnack:" inserted successfully ",snackType:"success"
        })
      }).catch((err)=>{
        this.setState({
            loading: false,
            openSnack:true,msgSnack:"sorry couldn't add the details. Something went wrong",snackType:"error"
        });  
        console.log(err);
    })
    }
    //Show the minimum value from the recorded tracker values
    showMin = () => {
        const minTemp=minmax([...this.state.dailyForecastData],"min")
        this.setState({
            minTemp
        })
    }
    //Show the maximum value from the recorded tracker values
    showMax = () => {
        const maxTemp=minmax([...this.state.dailyForecastData],"max")
        this.setState({
            maxTemp
        })
    }
    //Show the mean value from the recorded tracker values
    showMean = () => {
        this.setState({
            mean:mean([...this.state.dailyForecastData])
        })
    }
    //Show the mode value from the recorded tracker values
    showMode= () => {
        //[3, 5, 4, 4, 1, 1, 2, 3]
        let roundedTemps = this.state.dailyForecastData.map(( day )=>(Math.round(day.temp.day)))
        this.setState({
            mode:mode(roundedTemps)
        })
    }


    showDailyForecasts=()=>{
        const { dailyForecastData } = this.state
        const dailyForecasts = dailyForecastData ? dailyForecastData.map((dailyForecast)=>{
            return <DailyForecast data={dailyForecast}/>
        }) : [];
        return dailyForecasts;
    }

    closeSnackMsg=(event,reason)=>{
        if (reason === 'clickaway') {
            return;
          }
          this.setState({openSnack:false})
    }

    render() {
        const { minTemp,maxTemp,mean,mode,loading ,openSnack ,msgSnack ,snackType } = this.state
    return(
        <div>
        { loading && <Loader />}    
        <Statistics showMin={this.showMin} minTemp={minTemp} showMax={this.showMax} maxTemp={maxTemp} showMean={this.showMean} mean={mean} showMode={this.showMode} mode={mode} add={this.insert}/>    
        {this.showDailyForecasts()}
        <CustomizedSnackbars openSnack={openSnack} msg={msgSnack} variant={snackType} handleClose={this.closeSnackMsg}/>
        </div>     
    )

    }
}

export default DataTracker