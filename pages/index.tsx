import React, { cloneElement, useEffect, useRef } from 'react';
import SwipeableViews from 'react-swipeable-views';
import clsx from 'clsx';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {
  AppBar,
  Box,
  Tab,
  Tabs,
  Typography,
  Zoom,
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
  className?: any;
}

const TabPanel =  (props: TabPanelInterface) => {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      // role="tabpanel"
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
  }
};

const useStyles = makeStyles((theme: Theme) => {
  const gradient = theme.palette.info;
  return createStyles({
    root: {
      position: 'absolute',
      top: 0,
      left: 0,
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



const ScrollTop: React.FC<FCInterface> = props => {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  cloneElement(props.children, {
    elevation: trigger ? 4 : 0,
  });
  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {props.children}
      </div>
    </Zoom>
  );
}


export interface FCInterface {
  children: React.ReactElement,
};

export interface BreakpointInterface {
  width: Breakpoint,
};

const Home: React.FC<BreakpointInterface> = props => {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = React.useState(0);

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
  // const scroll = (ref) => ref.current.scrollIntoView({ behavior: 'smooth' })

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
            onChange={(_e: any, newValue: number) => setSelectedTab(newValue)}
            variant="scrollable"
          >
            {tabs.map((tab, index) => <Tab key={tab.key} label={tab.key} {...allyProps(index)} />)}
          </Tabs>
        </AppBar>
      </AppBarColorChanger>
      {tabs.map((tab, index) => (
        <TabPanel
          className={index % 2 !== 0 ? classes.odd : ''}
          value={selectedTab}
          key={tab.key}
          index={index}
        >
          {tab.content}
        </TabPanel>
      ))}
    </Box>
  );
}

export default withWidth()(Home);