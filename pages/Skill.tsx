import React from 'react';
import { NextPage } from 'next';
import clsx from 'clsx';
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
import { Theme, makeStyles } from '@material-ui/core/styles';

const skills = [
  {
    title: 'React-Native / Next.js',
    className: 'fab fa-react',
    rating: 5,
    iconStyleAdjuster: { color: '#61DBFB' },
  },
  {
    title: 'Symfony',
    className: 'fab fa-symfony',
    rating: 4,
  },
  {
    title: 'HTML / CSS',
    className: 'fab fa-html5',
    rating: 4,
    iconStyleAdjuster: { color: '#E44D26' },
  },
  {
    title: 'Javascript(ES6) / JQuery',
    className: 'fab fa-js',
    rating: 4,
    iconStyleAdjuster: { color:'#F0DB4F' },
  },
  {
    title: 'PHP',
    className: 'fab fa-php',
    rating: 4,
    iconStyleAdjuster: { color: '#787CB5', width: '100%', marginLeft: '20%'},
  },
  {
    title: 'Docker',
    className: 'fab fa-docker',
    rating: 2,
    iconStyleAdjuster: { color: '#0db7ed', width: '100%', marginLeft: '30%'},
  },
  {
    title: 'GitHub',
    className: 'fab fa-github',
    rating: 3,
  },
  {
    title: 'XD / Photoshop / Illustrator',
    className: 'fab fa-adobe',
    rating: 3,
    iconStyleAdjuster: { color: '#FF0000' },
  },
  {
    title: 'Linux / Ubuntu / CoreOS',
    className: 'fab fa-ubuntu',
    rating: 3,
    iconStyleAdjuster: { color: '#E95420' },
  },
]

const useStyles = makeStyles((theme: Theme) => ({
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
    fontWeight: 'bold',
    backgroundColor: 'rgba(25, 118, 210, 0.4)',
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
  skillIcon: {
    fontSize: '1200%',
  },
  infoIcon: {
    color: 'rgba(255, 255, 255, 0.65)',
  },
}));

const Skill: NextPage = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <GridList
        cols={3}
        spacing={12}
        cellHeight={195}
      >
        {skills.map(skill => (
          <GridListTile key={skill.title} className={classes.gridTile}>
            <Box className={classes.gridBox}>
              <Icon
                className={clsx(skill.className, classes.skillIcon)}
                style={'iconStyleAdjuster' in skill ? skill.iconStyleAdjuster : {}}
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
          <Box className={classes.gridBox}>
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
          <Box className={classes.gridBox}>
            <img
              src="/awslogo.png"
              alt="aws"
              className={classes.aws}
            />
            <GridListTileBar
              className={classes.gridTileBar}
              title="AWS"
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
          <Box className={classes.gridBox}>
            <img
              src="/firebaseLogo.png"
              alt="firebase"
              className={classes.firebase}
            />
            <GridListTileBar
              className={classes.gridTileBar}
              title="Firebase / GCP"
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
          </Box>
        </GridListTile>
      </GridList>
    </Box>
  );
};

export default Skill;