import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Typography,
} from '@material-ui/core';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      height: '100vh',
      zIndex: -1,
    },
    content: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '98%',
      borderBottom: 'solid 3px #fafafa',
      position: 'absolute',
      top: '40vh',
    },
    message: {
      color: '#fafafa',
      fontWeight: 'bold',
      textShadow: `5px 0px 5px #303030`,
    },
  }),
);

const Welcome = () => {
  const classes = useStyles();

  return (
    <Box 
      className={classes.root}
    >
      <img
        src="/cenote2m.png"
        alt="cenote"
        className={classes.root}
      />
      <Box className={classes.content}>
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
export default Welcome;