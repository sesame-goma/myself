import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import {
  AppBar,
  Box,
  Container, 
  Tab,
  Tabs,
 } from '@material-ui/core';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

const loader = require('fg-loadcss');

// 内部インポート
import Welcome from './Welcome';
import About from './About';
import Skill from './Skill';
import History from './History';
import Contact from './Contact';

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
      // hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box>{children}</Box>
      {/* value === index && <Box>{children}</Box> */}
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
      width: '100vw',
      height: '100vh',
    },
    appBar: {
      backgroundImage:
        `linear-gradient(135deg, ${gradient.light} 0%, ${gradient.main} 50%, ${gradient.dark} 100%);`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    appBarTransparent: {
      backgroundColor: 'transparent',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    footAppBar: {
      top: 'auto',
      bottom: 0,
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

export interface BreakpointInterface {
  width: Breakpoint,
};

const Home: React.FunctionComponent<BreakpointInterface> = props => {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = React.useState(0);
  const isTopAppBar = isWidthUp('sm', props.width);

  React.useEffect(() => {
    loader.loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  });

  return (
    <Box>
      <AppBar
        position='fixed'
        className={clsx(
          selectedTab === 0 ? classes.appBarTransparent : classes.appBar,
          !isTopAppBar && classes.footAppBar,
        )}
      >
        <Tabs
          value={selectedTab}
          onChange={(_e: any, newValue: number) => setSelectedTab(newValue)}
          variant="scrollable"
        >
          {tabs.map((tab, index) => <Tab key={tab.key} label={tab.key} {...allyProps(index)} />)}
        </Tabs>
      </AppBar>
      <SwipeableViews
        index={selectedTab}
        onChangeIndex={(index: number) => setSelectedTab(index)}
        style={{
          height: '100vh',
          top: 0,
          left: 0,
          position: 'fixed',
        }}
      >
        {tabs.map((tab, index) => (
          <TabPanel value={selectedTab} key={tab.key} index={index} >
            {tab.content}
          </TabPanel>
        ))}
      </SwipeableViews>
    </Box>
  );
}

export default withWidth()(Home);