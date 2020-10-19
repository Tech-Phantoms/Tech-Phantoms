import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));




const Navbar = () => {
    const classes = useStyles();

    return(
        <Toolbar>
            <Button color="inherit">About Us</Button>
            <Button color="inherit">Projects</Button>
            <Button color="inherit">Our Story</Button>
            <Button color="inherit">Events</Button>
            <Button variant="outlined" border="true" color="secondary">Join Us</Button>
        </Toolbar>
   ) }
export default Navbar