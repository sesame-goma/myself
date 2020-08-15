import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
  title: {
    marginBottom: theme.spacing(5),
    fontWeight: 'bold',
    borderBottom: 'solid',
    borderBottomColor: theme.palette.secondary.main,
  },
}),
);

export interface TabTitleInterface {
  title: string,
};

const TabTitle: React.FC<TabTitleInterface> = props => {
  const classes = useStyles();
  return (
    <Typography
      variant="h3"
      className={classes.title}
    >
      {props.title}
    </Typography>
  );
}
export default TabTitle;