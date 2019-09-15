import React from 'react'
import Button from '@material-ui/core/Button';
import FormDialog from '../UI/Dialog'
import { todoForm } from '../../constants/todoForm'
import SimpleCard from '../UI/Card'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Todos = ({ todos, back, add, user_id, showSmallestTodo, showLongestTodo, smallTitleTodo, longTitleTodo }) => {

  const classes = useStyles();

  const showTodo = todos.map(todo => {
    return <Grid item xs><SimpleCard key={todo.id} title={todo.title} completed={todo.completed} /></Grid>
  })

  const showSmallLongTodo = (title, todo) => {
    return (<Grid item xs>
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3" style={{ background:"aliceblue"}}>
        {title}
      </Typography>
      <Typography component="p">
        {todo.title}
      </Typography>
    </Paper>
    </Grid>)
  }

  return <div>
    <Button variant="contained" color="primary" onClick={back} style={{ margin: '5px' }}>Back</Button>
    <Button variant="contained" color="primary" onClick={showSmallestTodo} style={{ margin: '5px' }}>Smallest Todo</Button>
    <Button variant="contained" color="primary" onClick={showLongestTodo} style={{ margin: '5px' }}>Longest Todo</Button>
    <FormDialog fields={todoForm.fieldDetails} title={todoForm.title} add={add} user_id={user_id} />
    <Grid container spacing={2}>
        {smallTitleTodo && showSmallLongTodo("Smallest Title", smallTitleTodo)}
        {longTitleTodo && showSmallLongTodo("Longest Title", longTitleTodo)}
    </Grid>
    <div className={classes.root}><Grid container spacing={3}>{showTodo}</Grid></div>
  </div>

}

export default Todos