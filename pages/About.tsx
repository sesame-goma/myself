import React from 'react';
import { NextPage } from 'next';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Avatar,
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
 } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  box: {
    display: 'flex',
    // '& > *': {
    //   margin: theme.spacing(3),
    // },
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  list: {
    width: '100%',
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));


const About: NextPage = () => {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.box}>
        <Avatar
          src="/goma.png"
          alt="goma"
          component="span"
          className={classes.avatar}
        />
        <Typography variant="h1" >
          Wataru Tatsuda
        </Typography>
      </Box>
      <Grid 
        container
        direction="row"
        alignItems="center"
      >
        <List 
          component="nav" 
          className={classes.list} 
          aria-label="mailbox folders"
        >
          <Divider />
          <ListItem>
            <ListItemText primary="立田 渉（たつだ わたる）" secondary="Name" />
          </ListItem>
          <Divider />
          {/* ListItemのpropsでもdividerは作れるけど、
      スタイル当てられるようにコンポーネントになってる */}
          <ListItem divider>
            <ListItemText primary="1996年09月26日生まれ（23歳）" secondary="Birthday" />
          </ListItem>
          <ListItem divider>
            <ListItemText primary="株式会社ファーストロジック" secondary="Company" />
          </ListItem>
          <ListItem divider>
            <ListItemText primary="名古屋大学 文学部人文学科 考古学専攻（メソアメリカ考古学研究室）" secondary="University" />
          </ListItem>
          <ListItem>
            <ListItemText primary="基本 / 応用情報技術者、高等学校教諭免許地理歴史、学芸員" secondary="License" />
          </ListItem>
          <Divider/>
          <ListItem>
            <ListItemText primary="人生を危険に晒せ" secondary="Motto" />
          </ListItem>
          <Divider />
          <ListItem divider>
            <ListItemText primary="https://github.com/sesame-goma" secondary="GitHub" />
          </ListItem>
        </List>
      </Grid>
    </Box>
  );
};

export default About;