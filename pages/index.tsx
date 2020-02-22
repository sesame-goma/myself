import React from 'react';
import { NextPage } from 'next';
import Typography from '@material-ui/core/Typography';
import { 
  Avatar,
  Box,
  Container, 
  Divider,
  List,
  ListItem,
  ListItemText,
  Tab,
  Tabs,
 } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

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
      id={`full-widht-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

const allyProps = (index: number) => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controles': `full-width-tabpanel-${index}`
  }
};

const useStyles = makeStyles(theme => ({
  list: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));


const Home: NextPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (_e: any, newValue: any) => {
    setValue(newValue);
  }

  return (
    <Container>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        variant="fullWidth"
      >
        <Tab label="About" {...allyProps(0)} />
        <Tab label="Skill" {...allyProps(1)} />
        <Tab label="History" {...allyProps(2)} />
        <Tab label="Contact" {...allyProps(3)} />
      </Tabs>
      <TabPanel
        value={value}
        index={0}
        dir={theme.direction}
      >
        <h1>Wataru Tatsuda </h1>
        <Avatar src="/goma.png" alt="goma" className={classes.avatar}/>
        <List component="nav" className={classes.list} aria-label="mailbox folders">
          <ListItem>
            <ListItemText primary="Inbox" />
          </ListItem>
          {/* ListItemのpropsでもdividerは作れるけど、
          スタイル当てられるようにコンポーネントになってる */}
          <Divider />
          <ListItem divider>
            <ListItemText primary="Drafts" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Trash" />
          </ListItem>
          <Divider light />
          <ListItem>
            <ListItemText primary="Spam" />
          </ListItem>
        </List>
      </TabPanel>
      <TabPanel
        value={value}
        index={1}
        dir={theme.direction}
      >
        二番目
      </TabPanel>
      <TabPanel
        value={value}
        index={2}
        dir={theme.direction}
      >
        三番目
      </TabPanel>
    </Container>
  );
}

export default Home;