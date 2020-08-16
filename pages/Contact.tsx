import React from 'react';
import clsx from 'clsx';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { 
  Facebook as FacebookIcon,
  GitHub as GitHubIcon,
  Twitter as TwitterIcon,
} from '@material-ui/icons';
import {
  Box,
  Container,
  Divider,
  Link,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Icon,
  Typography,
} from '@material-ui/core';

import TabTitle from './components/TabTitle';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(10),
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
    },
    message: {
      marginTop: theme.spacing(10),
    },
    mailIcon: {
      fontSize: theme.spacing(3),
      color: theme.palette.secondary.main,
      marginLeft: theme.spacing(1),
    },
    list: {
      width: '100%',
    },
    link: {
      marginLeft: theme.spacing(5),
    },
    twitter: {
      color: '#1DA1F2',
    },
    github: {
      color: '#333',
    },
    facebook: {
      color: '#4267B2',
    },
    qiita: {
      widht: 26,
      height: 26,
    },
    chatwork: {
      widht: 26,
      height: 26,
    },
    speakerDeck: {
      widht: 18,
      height: 18,
    },
  }),
);

const Contact = () => {
  const classes = useStyles();

  return (
    <Container maxWidth='md' className={classes.root}>
      <TabTitle title={'Contact'} />
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
                <Link
                  href='https://twitter.com/sesame_apps'
                  target='_blank'
                  rel='noopener'
                >
                  Twitter
                </Link>
              </Typography>
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <GitHubIcon className={classes.github} />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography 
                variant="subtitle1"
                className={classes.link} 
              >
                <Link
                  href='https://github.com/sesame-goma'
                  target='_blank'
                  rel='noopener'
                >
                  GitHub
                </Link>
              </Typography>
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <FacebookIcon className={classes.facebook} />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography 
                variant="subtitle1"
                className={classes.link} 
              >
                <Link
                  href='https://www.facebook.com/profile.php?id=100015748086019'
                  target='_blank'
                  rel='noopener'
                >
                  Facebook
                </Link>
              </Typography>
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <img
              src="/qiitaLogo.png"
              alt="qiita"
              className={classes.qiita}
            />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography 
                variant="subtitle1"
                className={classes.link} 
              >
                <Link
                  href='https://qiita.com/sesame_apps'
                  target='_blank'
                  rel='noopener'
                >
                  Qiita
                </Link>
              </Typography>
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <img
              src="/chatworkLogo.png"
              alt="chatowork"
              className={classes.chatwork}
            />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography 
                variant="subtitle1"
                className={classes.link} 
              >
                ChatworkID:sesame_apps
              </Typography>
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <img
              src="/speakerdeckLogo.png"
              alt="SpeakerDeck"
              className={classes.speakerDeck}
            />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography 
                variant="subtitle1"
                className={classes.link} 
              >
                <Link
                  href='https://speakerdeck.com/sesameapps'
                  target='_blank'
                  rel='noopener'
                >
                  SpeakerDeck
                </Link>
              </Typography>
            }
          />
        </ListItem>
        <Divider />
      </List>
      <Typography 
        variant="subtitle1"
        className={classes.message} 
      >
        お問い合わせはTwitterのDMまで
        <Icon className={clsx('far fa-paper-plane', classes.mailIcon)} />
      </Typography>
    </Container>
  );
}
export default Contact;