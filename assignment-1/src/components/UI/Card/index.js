import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    //maxWidth: 275,
    margin: 5
  },
  title: {
    fontSize: 25,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          { props.title }
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          { props.body }
        </Typography>
      </CardContent>
    </Card>
  );
}
