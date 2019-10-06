import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

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

const tileData = [
    {
      img: 'https://i.imagesup.co/images2/0__05c7e898ac694e.jpg',
      title: 'fun',
      author: 'Image by Free-Photos on Pixabay',
      cols: 2,
      featured: true,
    },
    {
      img: 'https://i.imagesup.co/images2/0__05c7e8a33418ff.jpg',
      title: 'dog',
      author: 'Image by Free-Photos on Pixabay',
    },
    {
      img: 'https://cdn.pixabay.com/photo/2014/12/27/15/31/camera-581126_1280.jpg',
      title: 'Camera',
      author: 'Image by Free-Photos on Pixabay',
    },
    {
      img: 'https://cdn.pixabay.com/photo/2017/05/12/08/29/coffee-2306471_1280.jpg',
      title: 'Morning',
      author: 'Image by Free-Photos on Pixabay',
      featured: true,
    },
    {
      img: 'https://cdn.pixabay.com/photo/2017/05/13/12/40/fashion-2309519__480.jpg',
      title: 'Hats',
      author: 'Hans',
    },
    {
      img: 'https://cdn.pixabay.com/photo/2015/10/26/11/10/honey-1006972__480.jpg',
      title: 'Honey',
      author: 'Image by Free-Photos on Pixabay',
    }
  ];

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
            <img src={'https://i.imagesup.co/images2/0__05c7e898ac694e.jpg'} alt={'fun'} />
            <GridListTileBar
              title={'title'}
              subtitle={<span>by: ore</span>}
              actionIcon={
                <IconButton aria-label={`info about fun`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
        </Grid>
      </Grid>
    </div>
  );
}