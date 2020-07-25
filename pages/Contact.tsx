import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { 
  Twitter as TwitterIcon,
  GitHub as GitHubIcon,
} from '@material-ui/icons';
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      width: '100%',
      height: '93vh',
    },
    message: {
      fontWeight: 'bold',
      marginLeft: 30,
      // color: '#fafafa',
      // textShadow: `5px 0px 5px #303030`,
    },
    list: {
      width: '100%',
    },
    link: {

    },
    twitter: {
      color: '#1DA1F2',
    }
  }),
);

const Contact = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography 
        variant="h5"
        className={classes.message} 
      >
        お問い合わせ、お仕事の連絡はTwitterのDMまで
      </Typography>
      <List
        component="nav"
        className={classes.list}
      >
        <ListItem>
          <ListItemIcon>
            <TwitterIcon className={classes.twitter} />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography 
                variant="subtitle1"
                className={classes.link} 
              >
                https://twitter.com/sesame_apps
              </Typography>
            }
            secondary="Twitter"
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <GitHubIcon />
          </ListItemIcon>
          <ListItemText
            primary="https://github.com/sesame-goma"
            secondary="GitHub"
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary="株式会社ファーストロジック"
            secondary="Company"
          />
        </ListItem>
        <Divider />
      </List>
    </Box>
  );
}
export default Contact;