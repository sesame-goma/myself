import React from 'react';
import { NextPage } from 'next';
import { 
  Avatar,
  Box,
  Icon,
  IconButton,
  Typography,
  GridList,
  GridListTile,
  GridListTileBar,
 } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import InfoIcon from '@material-ui/icons/Info';
import { makeStyles } from '@material-ui/core/styles';
// d.tsが作られていないライブラリで、自分で作るのも手間なのでこう呼ぶ
const loader = require('fg-loadcss');

// 内部インポート
// TODO:firebaseは後回しで
// import firebaseIcon from 'public/firebase.svg';



const useStyles = makeStyles(theme => ({
  firebase: {
    width: 'auto',
    height: 190,
  },
  python: {
    paddingTop: '20%',
    width: 300,
    height: 'auto',
  },
  infoIcon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const Skill: NextPage = () => {
const classes = useStyles();

  React.useEffect(() => {
    loader.loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  })
  return (
    <Box>
      {/* <Box className={classes.box}> */}
        <GridList
          cols={3}
          spacing={8}
        >
          <GridListTile>
            <Icon
              className="fab fa-react"
              style={{ fontSize: '1200%' }}
              color="primary"
            />
            <GridListTileBar
              title="React / Next.js / React-Native"
              subtitle={
              <Rating 
                defaultValue={4}
                readOnly={true}
              />
              }
              actionIcon={
                <IconButton className={classes.infoIcon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
          <GridListTile>
            <Icon className="fab fa-python" style={{ fontSize: '1200%' }} color="primary" />
            {/* <img
              src="/pythonLogo.png"
              alt="python"
              className={classes.python}
            /> */}
            <GridListTileBar
              title="Python"
              subtitle={
              <Rating 
                defaultValue={4}
                readOnly={true}
              />
              }
              actionIcon={
                <IconButton className={classes.infoIcon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
          <GridListTile>
            <Icon className="fab fa-symfony" style={{ fontSize: '1200%' }} color="primary" />
            <GridListTileBar
              title="Symfony"
              subtitle={
              <Rating 
                defaultValue={4}
                readOnly={true}
              />
              }
              actionIcon={
                <IconButton className={classes.infoIcon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
          <GridListTile>
            <Icon className="fab fa-github" style={{ fontSize: '1200%' }} color="primary" />
            <GridListTileBar
              title="Git / GitHub"
              subtitle={
              <Rating 
                defaultValue={4}
                readOnly={true}
              />
              }
              actionIcon={
                <IconButton className={classes.infoIcon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
          <GridListTile>
            <img
              src="/firebaseLogo.png"
              alt="firebase"
              className={classes.firebase}
            />
            <GridListTileBar
              title="Firebase"
              subtitle={
              <Rating 
                defaultValue={4}
                readOnly={true}
              />
              }
              actionIcon={
                <IconButton className={classes.infoIcon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        </GridList>
        <Icon className="fab fa-html5" color="primary" />
        <Icon className="fab fa-adobe" color="primary" />
        <Icon className="fab fa-js" color="primary" />
        <Icon className="fab fa-docker" color="primary" />
        {/* なぜかPHPのアイコンだけ見切れてしまうので調整 
      あとこれ多分style上書きしてるからboxのstyleが当たっていない*/}
        <Icon className="fab fa-php" style={{ width: '60%' }} color="primary" />
        <Icon className="fab fa-aws" style={{ width: '60%' }} color="primary" />
      {/* </Box> */}
    </Box>
  );
};

export default Skill;