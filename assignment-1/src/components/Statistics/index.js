import React from 'react'
import Button from '@material-ui/core/Button';
import FormDialog from '../UI/Dialog'
import { dataTrackerForm } from '../../constants'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
}));

const Statistics = ({ showMin, minTemp, showMax, maxTemp, showMean, mean, showMode, mode, add }) => {
    const classes = useStyles();
    const addToTracker = (data) => {
        let dataFormat = {
            "dt": new Date(data.dt),
            "temp": {
                "day": data.day,
                "min": data.min,
                "max": data.max,
                "night": data.night,
                "eve": data.eve,
                "morn": data.morn
            },
            "pressure": data.pressure,
            "humidity": data.humidity,
            "weather": [
                {
                    "main": data.main,
                    "description": data.description
                }
            ],
            "speed": data.speed,
            "deg": data.deg,
            "clouds": data.clouds,
            "snow": data.snow
        }
        add(dataFormat);
    }

    const showStatistics = (heading,value) => {
        return (<Paper className={classes.root}>
                    <Typography variant="h5" component="h3">
                        { heading }
                    </Typography>
                    <Typography component="p">
                        { value }
                    </Typography>
                </Paper>)
    }

    return (
        <div style={{ margin: '5px' }}>
            <Button variant="contained" color="primary" onClick={showMin} style={{ margin: '5px' }}>Min Temp</Button>
            <Button variant="contained" color="primary" onClick={showMax} style={{ margin: '5px' }}>Max Temp</Button>
            <Button variant="contained" color="primary" onClick={showMean} style={{ margin: '5px' }}>Mean</Button>
            <Button variant="contained" color="primary" onClick={showMode} style={{ margin: '5px' }}>Mode</Button>
            <FormDialog fields={dataTrackerForm.fieldDetails} title={dataTrackerForm.title} add={addToTracker} />
            <Grid container spacing={2}>
            <Grid item xs>
            {minTemp && showStatistics(" Minimum Temperature ",minTemp)}
            </Grid>
            <Grid item xs>
            {maxTemp && showStatistics(" Maximum Temperature : ",maxTemp)}
            </Grid>
            <Grid item xs>
            {mean && showStatistics(" Mean Temperature : ",mean)}
            </Grid>
            <Grid item xs>
            {mode && showStatistics(" Mode Temperature : ",mode.join(','))}
            </Grid>
            </Grid>
        </div>
    )
}

export default Statistics