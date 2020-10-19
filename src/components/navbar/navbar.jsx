import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


const Navbar = () => {
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