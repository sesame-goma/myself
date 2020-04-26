import React from 'react';
import SwipeableViews from 'react-swipeable-views';
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

// 内部インポート
import Welcome from './Welcome';
import About from './About';
import Skill from './Skill';
import History from './History';

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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // width: '100%',
      margin: 0,
      padding: 0,
      // flex: '1',
      // justifyContent: 'space-around',
      // flexWrap: 'wrap',
      // alignItem: 'center',
      // justifyContent: 'center',
      // backgroundPosition: 'center',
    },
  }),
);


const Home: NextPage = () => {
  const theme = useTheme();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (_e: any, newValue: any) => {
    setValue(newValue);
  }

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Box className={classes.root}>
      <AppBar position="static" color="default">
      <Container maxWidth="md">
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          variant="fullWidth"
        >
          <Tab label="Welcome" {...allyProps(0)} />
          <Tab label="About" {...allyProps(1)} />
          <Tab label="Skill" {...allyProps(2)} />
          <Tab label="History" {...allyProps(3)} />
          <Tab label="Contact" {...allyProps(4)} />
        </Tabs>
      </Container>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel
          value={value}
          index={0}
          dir={theme.direction}
        >
          <Welcome />
        </TabPanel>
        <TabPanel
          value={value}
          index={1}
          dir={theme.direction}
        >
          <Container maxWidth="md">
            <About />
          </Container>
        </TabPanel>
        <TabPanel
          value={value}
          index={2}
          dir={theme.direction}
        >
          <Container
            maxWidth="xl"
          >
            <Skill />
          </Container>
        </TabPanel>
        <TabPanel
          value={value}
          index={3}
          dir={theme.direction}
        >
          <Container maxWidth="md">
            <History />
          </Container>
        </TabPanel>
        <TabPanel
          value={value}
          index={4}
          dir={theme.direction}
        >
          Contact
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}

export default Home;