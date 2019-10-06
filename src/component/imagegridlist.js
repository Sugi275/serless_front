import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
// import tileData from './tileData';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */


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



export default function TitlebarGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}