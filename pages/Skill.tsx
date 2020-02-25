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
    color: 'rgba(255, 255, 255, 0.6)',
  },
}));

const skills = [
  {
    title: 'React-Native / Next ',
    className: 'fab fa-react',
    rating: 5,
    style: { fontSize: '1200%'},
    color: 'primary'
  },
  {
    title: 'Symfony',
    className: 'fab fa-symfony',
    rating: 4,
    style: { fontSize: '1200%'},
    color: 'primary'
  },
  {
    title: 'Python',
    className: 'fab fa-python',
    rating: 2,
    style: { fontSize: '1200%'},
    color: 'primary'
  },
  {
    title: 'Javascript(ES2015) / JQuery',
    className: 'fab fa-js',
    rating: 4,
    style: { fontSize: '1200%'},
    color: 'primary'
  },
  {
    title: 'PHP',
    className: 'fab fa-php',
    rating: 4,
    style: { width: '100%', fontSize: '1200%' },
    color: 'primary'
  },
  {
    title: 'HTML / CSS',
    className: 'fab fa-html5',
    rating: 4,
    style: { fontSize: '1200%'},
    color: 'primary'
  },
  {
    title: 'Docker',
    className: 'fab fa-docker',
    rating: 2,
    style: { width: '100%', fontSize: '1200%'},
    color: 'primary'
  },
  {
    title: 'GitHub',
    className: 'fab fa-github',
    rating: 3,
    style: { fontSize: '1200%'},
    color: 'primary'
  },
  {
    title: 'XD / Photoshop / Illustrator',
    className: 'fab fa-adobe',
    rating: 3,
    style: { fontSize: '1200%'},
    color: 'primary'
  },
  {
    title: 'Linux / Ubuntu ',
    className: 'fab fa-ubuntu',
    rating: 3,
    style: { fontSize: '1200%'},
    color: 'primary'
  },
  {
    title: 'AWS',
    className: 'fab fa-aws',
    rating: 2,
    style: { width: '100%', fontSize: '1200%' },
    color: 'primary'
  },
  
]

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
      <GridList
        cols={4}
        spacing={8}
      >
        {skills.map(skill => (
          <GridListTile>
            <Icon
              className={skill.className}
              style={skill.style}
              color="primary"
            />
            <GridListTileBar
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
          </GridListTile>
        ))}
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
        </GridListTile>
      </GridList>
    </Box>
  );
};

export default Skill;