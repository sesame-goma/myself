import React, { cloneElement, useEffect } from 'react';
import clsx from 'clsx';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {
  AppBar,
  Box,
  Tab,
  Tabs,
  Typography,
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
  index: number;
  name: string;
  dir?: any;
  className?: any;
}

const TabPanel =  (props: TabPanelInterface) => {
  const { children, name, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      id={`${name}`}
      {...other}
    >
      <Box>{children}</Box>
    </Typography>
  );
}

const useStyles = makeStyles((theme: Theme) => {
  const gradient = theme.palette.info;
  return createStyles({
    root: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100vw',
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
    odd: {
      backgroundColor: '#f5f5f5',
    },
  });
});

const tabs = [
  {
    'name': 'welcome',
    'content': <Welcome />,
  },
  {
    'name': 'about',
    'content': <About />,
  },
  {
    'name': 'skill',
    'content': <Skill />,
  },
  {
    'name': 'history',
    'content': <History />,
  },
  {
    'name': 'contact',
    'content': <Contact />,
  },
];

export interface FCInterface {
  children: React.ReactElement,
};

export interface BreakpointInterface {
  width: Breakpoint,
};

const Home: React.FC<BreakpointInterface> = props => {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>, value: number) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
      `#${tabs[value].name}`,
    );

    anchor && anchor.scrollIntoView({ behavior: 'smooth' });
  };

  const AppBarColorChanger: React.FC<FCInterface> = ({ children }) => {
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 100,
    });

    return cloneElement(children, {
      className: clsx(
        !isWidthUp('sm', props.width) && classes.footAppBar,
        trigger ? classes.appBar : classes.appBarTransparent,
      ),
    });
  }

  useEffect(() => {
    loader.loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  });

  return (
    <Box className={classes.root}>
      <AppBarColorChanger>
        <AppBar>
          <Tabs
            value={selectedTab}
            onChange={(e: any, newValue: number) => {
              setSelectedTab(newValue);
              handleClick(e.nativeEvent, newValue);
            }}
            variant="scrollable"
          >
            {tabs.map((tab) => <Tab key={tab.name} label={tab.name} />)}
          </Tabs>
        </AppBar>
      </AppBarColorChanger>
      {tabs.map((tab, index) => (
        <TabPanel
          className={index % 2 !== 0 ? classes.odd : ''}
          name={tab.name}
          index={index}
          key={tab.name}
        >
          {tab.content}
        </TabPanel>
      ))}
    </Box>
  );
}

export default withWidth()(Home);