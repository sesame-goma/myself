import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Typography,
} from '@material-ui/core';

// 内部インポート
import cenote from '../public/cenote2m.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: `url(${cenote})`,
      backgroundSize: 'cover',
      width: '100%',
      height: '93vh',
    },
    content: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      borderBottom: 'solid 3px #fafafa',
      boxShadow: `5px 0px 0px #303030`,
    },
    message: {
      color: '#fafafa',
      fontWeight: 'bold',
      textShadow: `5px 0px 5px #303030`,
    },
  }),
);

export default function Welcome() {
  const classes = useStyles();

  return (
    <Box 
      className={classes.root}
    >
      <Box
        className={classes.content}
      >
        <Typography 
          variant="h2"
          className={classes.message} 
        >
          Welcome, Wataru Tatsuda Portfolio
        </Typography>
      </Box>
    </Box>
  );
}
