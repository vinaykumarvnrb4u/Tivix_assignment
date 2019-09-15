import React from 'react'
import Button from '@material-ui/core/Button';
import FormDialog from '../UI/Dialog'
import { postForm } from '../../constants/postForm'
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

const Posts = ({ posts, back, add, user_id, showSmallestPostByTitle, showLongestPostByTitle, smallTitlePost, longTitlePost, longBodyPost, smallBodyPost, showLongestPostByBody, showSmallestPostByBody }) => {
  const classes = useStyles();

  const showPost = posts.map(post => {
    return <Grid item xs><SimpleCard key={post.id} title={post.title} body={post.body} /></Grid>
  })

  const showSmallLongPost = (title, post, key) => {
    return (<Grid item xs>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3" style={{ background:"aliceblue"}}>
          {title}
        </Typography>
        <Typography component="p">
          {post[key]}
        </Typography>
      </Paper>
    </Grid>)
  }

  return <div style={{ margin: '5px' }}>
    <Button variant="contained" color="primary" onClick={back} style={{ margin: '5px' }}>Back</Button>
    <Button variant="contained" color="primary" onClick={showSmallestPostByTitle} style={{ margin: '5px' }}>Smallest Post By Title</Button>
    <Button variant="contained" color="primary" onClick={showLongestPostByTitle} style={{ margin: '5px' }}>Longest Post By Title</Button>
    <Button variant="contained" color="primary" onClick={showSmallestPostByBody} style={{ margin: '5px' }}>Smallest Post By Body</Button>
    <Button variant="contained" color="primary" onClick={showLongestPostByBody} style={{ margin: '5px' }}>Longest Post By Body</Button>
    <FormDialog fields={postForm.fieldDetails} title={postForm.title} add={add} user_id={user_id} />
    <Grid container spacing={2}>
      {smallTitlePost && showSmallLongPost("Smallest Title", smallTitlePost, "title")}
      {longTitlePost && showSmallLongPost("Longest Title", longTitlePost, "title")}
      {smallBodyPost && showSmallLongPost("Smallest Body", smallBodyPost, "body")}
      {longBodyPost && showSmallLongPost("Longest Body", longBodyPost, "body")}
    </Grid>
    <div className={classes.root}><Grid container spacing={3}>{showPost}</Grid></div>
  </div>

}

export default Posts