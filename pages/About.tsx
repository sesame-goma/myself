import { NextPage } from 'next';
import { 
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
 } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

const About: NextPage = () => {
const classes = useStyles();

  return (
    <Box>
      <h1>Wataru Tatsuda </h1>
      <Avatar src="/goma.png" alt="goma" className={classes.avatar} />
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
    </Box>
  );
};

export default About;