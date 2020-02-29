import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { GridList, GridListTile } from '@material-ui/core';

// const Cenote = require('../public/cenote.JPG');

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // display: 'flex',
      // flexWrap: 'wrap',
      // justifyContent: 'space-around',
      // overflow: 'hidden',
      // backgroundColor: theme.palette.background.paper,
      // backgroundImage: `url('../public/cenote.JPG')`,
    },
    gridList: {
      width: 500,
      height: 450,
    },
  }),
);

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 */
 const tileData = [
   {
     img: '/cenote.JPG',
     title: 'Image',
     author: 'author',
     cols: 2,
   },
  //  {
  //    [etc...]
  //  },
 ];


export default function Welcome() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}> */}
            {/* <img src='/cenote.JPG' alt='pn' /> */}
          {/* </GridListTile>
        ))}
      </GridList> */}
    </div>
  );
}
