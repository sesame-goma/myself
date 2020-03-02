import React from 'react';
import { NextPage } from 'next';
import { 
  Box,
  Icon,
  IconButton,
  GridList,
  GridListTile,
  GridListTileBar,
 } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import InfoIcon from '@material-ui/icons/Info';
import { makeStyles } from '@material-ui/core/styles';
// d.tsが作られていないライブラリで、自分で作るのも手間なのでこう呼ぶ
const loader = require('fg-loadcss');

const skills = [
  {
    title: 'React-Native / Next ',
    className: 'fab fa-react',
    rating: 5,
    style: { fontSize: '1200%', color: '#61DBFB' },
  },
  {
    title: 'Symfony',
    className: 'fab fa-symfony',
    rating: 4,
    style: { fontSize: '1200%'},
  },
  {
    title: 'HTML / CSS',
    className: 'fab fa-html5',
    rating: 4,
    style: { color: '#E44D26', fontSize: '1200%'},
  },
  {
    title: 'Javascript(ES6) / JQuery',
    className: 'fab fa-js',
    rating: 4,
    style: { color:'#F0DB4F', fontSize: '1200%'},
  },
  {
    title: 'PHP',
    className: 'fab fa-php',
    rating: 4,
    style: { color: '#787CB5', width: '100%', fontSize: '1200%', marginLeft: 60 },
  },
  {
    title: 'Docker',
    className: 'fab fa-docker',
    rating: 2,
    style: { color: '#0db7ed', width: '100%', fontSize: '1200%', marginLeft: 60},
  },
  {
    title: 'GitHub',
    className: 'fab fa-github',
    rating: 3,
    style: { fontSize: '1200%'},
  },
  {
    title: 'XD / Photoshop / Illustrator',
    className: 'fab fa-adobe',
    rating: 3,
    style: { color: '#FF0000', fontSize: '1200%'},
  },
  {
    title: 'Linux / Ubuntu ',
    className: 'fab fa-ubuntu',
    rating: 3,
    style: { color: '#E95420', fontSize: '1200%'},
  },
]

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3),
    // スクロール禁止のため
    overflow: 'hidden',

  },
  gridTile: {
    marginBottom: theme.spacing(3),
  },
  gridBox: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridTileBar: {
    // color: 'blue',
    fontWeight: 'bold',
    backgroundColor: 'rgba(25, 118, 210, 0.6)',
    // fontSize: 40,
  },
  aws: {
    marginTop: 30,
    width: 220,
    height: 'auto',
  },
  firebase: {
    width: 'auto',
    height: 190,
  },
  infoIcon: {
    color: 'rgba(255, 255, 255, 0.7)',
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
    <Box
      className={classes.root}
    >
      <GridList
        cols={3}
        spacing={4}
        cellHeight={195}
      >
        {skills.map(skill => (
          <GridListTile
            className={classes.gridTile}
          >
            <Box
              className={classes.gridBox}
            >
              <Icon
                className={skill.className}
                style={skill.style}
              />
              <GridListTileBar
                className={classes.gridTileBar}
                title={skill.title}
                subtitle={
                  <Rating
                    defaultValue={skill.rating}
                    readOnly={true}
                  />
                }
                actionIcon={
                  <IconButton className={classes.infoIcon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </Box>
          </GridListTile>
        ))}
        <GridListTile>
          <Box
            className={classes.gridBox}
          >
            <img
              src="/pylogo.png"
              alt="python"
              className={classes.firebase}
            />
            <GridListTileBar
              className={classes.gridTileBar}
              title="Python"
              subtitle={
                <Rating
                  defaultValue={2}
                  readOnly={true}
                />
              }
              actionIcon={
                <IconButton className={classes.infoIcon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </Box>
        </GridListTile>
        <GridListTile>
          <Box
            className={classes.gridBox}
          >
            <img
              src="/awslogo.png"
              alt="aws"
              className={classes.aws}
            />
            <GridListTileBar
              className={classes.gridTileBar}
              title="Firebase"
              subtitle={
                <Rating
                  defaultValue={3}
                  readOnly={true}
                />
              }
              actionIcon={
                <IconButton className={classes.infoIcon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </Box>
        </GridListTile>
        <GridListTile>
          <Box
            className={classes.gridBox}
          >
            <img
              src="/firebaseLogo.png"
              alt="firebase"
              className={classes.firebase}
            />
            <GridListTileBar
              className={classes.gridTileBar}
              title="Firebase"
              subtitle={
                <Rating
                  defaultValue={3}
                  readOnly={true}
                />
              }
              actionIcon={
                <IconButton className={classes.infoIcon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </Box>
        </GridListTile>
      </GridList>
    </Box>
  );
};

export default Skill;