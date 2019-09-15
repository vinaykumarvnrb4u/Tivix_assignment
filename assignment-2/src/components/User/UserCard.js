import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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

const UserCard = ({ user }) => {
    const classes = useStyles();
    console.log(user)
    return (<div style={{ padding: '2%' }}>
        <Paper className={classes.root}>
            <Typography variant="h5" component="h3">
                Name : {user.name}
            </Typography>
            <Typography variant="h5" component="h3">
                Username : {user.username}
            </Typography>
            <Typography variant="h5" component="h3">
                Email : {user.email}
            </Typography>
            <Typography variant="h5" component="h3">
                City : {user.address.city}
            </Typography>
        </Paper>
    </div >
    )
}

export default UserCard
