import React from 'react';
import { NextPage } from 'next';
import { Theme, makeStyles } from '@material-ui/core/styles';
import { 
  Avatar,
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
 } from '@material-ui/core';

 import TabTitle from './components/TabTitle';


const useStyles = makeStyles((theme: Theme) => ({
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
  avatarArea: {
    display: 'flex',
    marginBottom: theme.spacing(2),
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  list: {
    width: '100%',
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  message: {
    marginBottom: theme.spacing(10),
    fontWeight: 'bold',
  },
}));


const About: NextPage = () => {
  const classes = useStyles();

  return (
    <Container maxWidth='md' className={classes.root}>
      <TabTitle title={'About'} />
      <Box className={classes.avatarArea}>
        <Avatar
          src="/goma.png"
          alt="goma"
          component="span"
          className={classes.avatar}
        />
        <List
          component="nav"
          className={classes.list}
        >
          <ListItem>
            <ListItemText
              primary="立田 渉（たつだ わたる）"
              secondary="Name"
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary="1996年09月26日生まれ / 23歳"
              secondary="Birthday"
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
      <List
        component="nav"
        className={classes.list}
      >
        <ListItem>
          <ListItemText
            primary="名古屋大学 文学部人文学科 考古学専攻 メソアメリカ考古学研究室"
            secondary="University"
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary="基本 / 応用情報技術者、高等学校教諭免許地理歴史、学芸員"
            secondary="License"
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary="人生を危険に晒せ"
            secondary="Motto"
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary="海外旅行、音楽フェス、麻雀、映画観賞"
            secondary="Hobby"
          />
        </ListItem>
        <Divider />
      </List>
    </Container>
  );
};

export default About;