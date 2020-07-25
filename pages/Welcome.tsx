import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '93vh',
    },
    content: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      borderBottom: 'solid 3px #fafafa',
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
    <Box className={classes.root}>
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