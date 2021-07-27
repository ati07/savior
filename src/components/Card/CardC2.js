import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 80,
    // padding: 10,
    margin:5,
    borderRadius:20,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 10,
  },
  pos: {
    marginBottom: 12,
  },
  new:{
    position: 'relative',
    height: 48,
    top: -15,
    width: '110%',
    marginLeft: -17,
  }
});

export default function CardC2({color}) {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.new} style={{backgroundColor:`${color}`}}>
        <Typography variant="h5" component="h4" style={{padding: 10}} gutterBottom>
        Header
        </Typography>
        </div>
        <Typography variant="h5" component="h4">
        Card subtitle
        </Typography>
        {/* <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography> */}
        <Typography variant="body2" component="p">
        Some quick example text to build on the card title and make up the bulk of the card's content.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Card Link</Button>
        <Button size="small">Another Link</Button>

      </CardActions>
    </Card>
  );
}
