import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LaunchIcon from '@material-ui/icons/Launch';

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
  },
  icon: {
    width: '0.75rem',
    paddingLeft: 2,
  }
});

const CustomUrlField = ({ record = {}, source }) => {
  const classes = useStyles();
  return (
    <a href={'//'+record[source]} className={classes.link}>
      {record[source]}
      <LaunchIcon className={classes.icon}/>
    </a>
  )
}

export default CustomUrlField;
