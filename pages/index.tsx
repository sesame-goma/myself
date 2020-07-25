import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import clsx from 'clsx';
import { NextPage } from 'next';
import Typography from '@material-ui/core/Typography';
import {
  AppBar,
  Box,
  Container, 
  Tab,
  Tabs,
 } from '@material-ui/core';
import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';

const loader = require('fg-loadcss');

// 内部インポート
import Welcome from './Welcome';
import About from './About';
import Skill from './Skill';
import History from './History';
import Contact from './Contact';
import cenote from '../public/cenote2m.png';

interface TabPanelInterface {
  children: any;
  value: any;
  index: number;
  dir?: any;
}

const TabPanel =  (props: TabPanelInterface) => {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Typography>
  );
}

const allyProps = (index: number) => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controles': `full-width-tabpanel-${index}`
  }
};

const useStyles = makeStyles((theme: Theme) => {
  const gradient = theme.palette.info;
  return createStyles({
    root: {
      margin: 0,
      padding: 0,
    },
    cenote: {
      backgroundImage: `url(${cenote})`,
      backgroundSize: 'cover',
      width: '100%',
      height: '98vh',
    },
    appBar: {
      backgroundImage:
        `linear-gradient(135deg, ${gradient.light} 0%, ${gradient.main} 50%, ${gradient.dark} 100%);`
    },
    appBarTransparent: {
      backgroundColor: 'transparent',
    },
  });
});

const tabs = [
  {
    'key': 'welcome',
    'content': <Welcome />,
  },
  {
    'key': 'about',
    'content': <About />,
  },
  {
    'key': 'skill',
    'content': <Skill />,
  },
  {
    'key': 'history',
    'content': <History />,
  },
  {
    'key': 'contact',
    'content': <Contact />,
  },
];

const Home: NextPage = () => {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = React.useState(0);

  React.useEffect(() => {
    loader.loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  });

  return (
    <Box className={selectedTab === 0 ? clsx(classes.root, classes.cenote) : classes.root}>
      <AppBar
        position="static"
        className={selectedTab === 0 ? classes.appBarTransparent : classes.appBar}
      >
        <Container maxWidth="md">
          <Tabs
            value={selectedTab}
            onChange={(_e: any, newValue: number) => setSelectedTab(newValue)}
            variant="fullWidth"
          >
            {tabs.map((tab, index) => <Tab key={tab.key} label={tab.key} {...allyProps(index)} />)}
          </Tabs>
        </Container>
      </AppBar>
      <SwipeableViews
        index={selectedTab}
        onChangeIndex={(index: number) => setSelectedTab(index)}
      >
        {tabs.map((tab, index) => (
          <TabPanel value={selectedTab} key={tab.key} index={index} >
            {selectedTab === 0
              ? tab.content
              : (
                <Container maxWidth='md'>
                  {tab.content}
                </Container>
              )
            }
          </TabPanel>
        ))}
      </SwipeableViews>
    </Box>
  );
}

export default Home;