import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { WbSunny, WbCloudy, NightsStay } from '@material-ui/icons';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3, 2),
    boxShadow: '0px -6px 15px -4px #888888'

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const DailyForecast = ({ data }) => {

  const classes = useStyles();

  return (
    <div style={{ padding: '2%' }}>
      <Paper className={classes.root}>
        <div style={{ float: "right", marginRight: "0px", marginTop: "0px" }} >
          Time : {new Date(data.dt).toString()}
        </div>
        <Typography variant="h5" component="h3">
          <Grid container spacing={2}>
            <Grid item xs>
              <Paper className={classes.paper}>
                <Typography component="p">
                  Weather Forecast : {data.weather[0].main}
                </Typography>
                <Typography component="p">
                  Description : {data.weather[0].description}
                </Typography>
                <Typography component="p">
                  Pressure : {data.pressure}
                </Typography>
                <Typography component="p">
                  Humidity : {data.humidity}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
                <Typography component="p">
                  Speed : {data.speed}
                </Typography>
                <Typography component="p">
                  Degrees : {data.deg}
                </Typography>
                <Typography component="p">
                  Cloud : {data.cloud}
                </Typography>
                <Typography component="p">
                  Snow : {data.snow}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Typography>
        <Typography variant="h5" component="h3">
          <Grid container spacing={3}>
            <Grid item xs>
              <Paper className={classes.paper}>
                <WbSunny />
                <Typography component="p">
                  Temperature : {data.temp.day}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
                <WbSunny />
                <Typography component="p">
                  Minimum Temperature : {data.temp.min}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
                <WbSunny />
                <Typography component="p">
                  Maximum Temperature : {data.temp.max}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs>
              <Paper className={classes.paper}>
                <WbSunny />
                <Typography component="p">
                  Morning Temperature : {data.temp.morn}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
                <WbCloudy />
                <Typography component="p">
                  Evening Temperature : {data.temp.eve}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
                <NightsStay />
                <Typography component="p">
                  Night Temperature : {data.temp.night}
                </Typography></Paper>
            </Grid>
          </Grid>
        </Typography>
      </Paper>
    </div>
  );
}

export default DailyForecast

// "list": [
//     {
//         "dt": 1485766800,
//         "temp": {
//             "day": 262.65,
//             "min": 261.41,
//             "max": 262.65,
//             "night": 261.41,
//             "eve": 262.65,
//             "morn": 262.65
//         },
//         "pressure": 1024.53,
//         "humidity": 76,
//         "weather": [
//             {
//                 "id": 800,
//                 "main": "Clear",
//                 "description": "sky is clear",
//                 "icon": "01d"
//             }
//         ],
//         "speed": 4.57,
//         "deg": 225,
//         "clouds": 0,
//         "snow": 0.01
//     },